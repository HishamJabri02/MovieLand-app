import {
  Box,
  Grid,
  TextField,
  Typography,
  Divider,
  Backdrop,
} from "@mui/material";
import Date from "./Date";
import TimeRangePicker from "./TimeRangePicker";
import CloseIcon from "@mui/icons-material/Close";
import Like from "../../../../../assets/images/Like.svg";
import { useEffect, useState } from "react";
import { getAddressApi } from "../api/getAddressApi";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import GradiantCirculeLoading from "../../../../../core/GradiantCirculeLoading";
import { uploadImage } from "../../../../../core/uploadImage";
import { getDelevaryApi } from "../api/getdelevaryApi";
import CheckOutInput from "./CheckOutInput";
import CheckOutItems from "./CheckOutItems";
import GradiantButton from "../../../../../core/GradiantButton";
import { Link, useNavigate } from "react-router-dom";
import CustomSnackbar from "../../../../../core/CustomSnackbar";
import { useDispatch, useSelector } from "react-redux";
import { CheckOutAsync } from "../state/CheckOutAsync";
import { useTranslation } from "react-i18next";
import { ShoppingCartAsync } from "../../ShoppingCart/state/ShoppingCartAsync";
import cash from "../../../../../assets/images/cash.png";
import { confirmOrder } from "../api/confirmOrder";
import isFloat from "./isFloat";
function CheckOutForm() {
  const { i18n, t } = useTranslation();
  const language = i18n.language;
  const loadingOrder = useSelector((state) => state.CheckOutReducer.loading);
  const errorMessage = useSelector((state) => state.CheckOutReducer.error);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState({});
  const [time, setTime] = useState([]);
  const [address, setAddress] = useState([]);
  const [delevary, setDelevary] = useState([]);
  const [selectedDelevary, setSelectedDelevary] = useState(
    delevary[0]?._id || ""
  );
  const [selectedAddress, setSelectedAddress] = useState("");
  const [slectedPayment, setSelectedPayment] = useState("");
  const [slectedUser, setSelectedUser] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ShoppingCartAsync());
  }, []);
  const details = useSelector((state) => state.ShoppingCartReducer.details);
  const loadingCart = useSelector((state) => state.ShoppingCartReducer.loading);
  const handleGetAddress = async () => {
    setLoading(true);
    const response = await getAddressApi();
    setAddress(response.data);
    setLoading(false);
  };
  const handleGetDelevary = async () => {
    const response = await getDelevaryApi();
    setDelevary(response.data);
  };
  const handleOpen = () => {
    setConfirm(true);
  };
  const handleClose = () => {
    setConfirm(false);
  };
  const handleSubmit = async () => {
    if (
      date === null ||
      Object.keys(date).length === 0 ||
      time[0] === null ||
      time[1] === null ||
      time.length === 0 ||
      selectedAddress.length === 0 ||
      selectedDelevary.length === 0 ||
      slectedPayment.length === 0 ||
      slectedUser.length === 0 ||
      description.length === 0
    ) {
      setOpen(true);
      setError("please fill all the required field");
      handleClose();
    } else {
      const data = {
        delevary_location: selectedAddress,
        payment_method: slectedPayment,
        delevary_method: selectedDelevary,
        delivery_date: date,
        desired_date: {
          from: `${
            time[0].c.hour < 10 ? "0" + time[0].c.hour : time[0].c.hour
          }:${
            time[0].c.minute < 10 ? "0" + time[0].c.minute : time[0].c.minute
          }`,
          to: `${time[1].c.hour < 10 ? "0" + time[1].c.hour : time[1].c.hour}:${
            time[1].c.minute < 10 ? "0" + time[1].c.minute : time[1].c.minute
          }`,
        },
        optional_note: description,
        user_status: slectedUser,
      };
      handleClose();
      const response = await dispatch(CheckOutAsync(data));
      console.log(response);
      if (errorMessage) {
        setError(errorMessage);
        setOpen(true);
      } else {
        if (slectedPayment === "electronic") {
          window.open(
            response.payload.data.payment.electronicInfo.url,
            "_blank"
          );
        }
        navigate("/review");
        // const confirm = await confirmOrder(order.payload.data._id);
        // if (confirm.success) {
        // }
      }
    }
  };
  useEffect(() => {
    handleGetAddress();
    handleGetDelevary();
  }, []);
  const [delevaryCharge, setDelevaryCharge] = useState({});
  useEffect(() => {
    const delevary = address.find((item) => item._id === selectedAddress);
    setDelevaryCharge(delevary);
  }, [selectedAddress]);
  return (
    <>
      <Backdrop open={confirm} sx={{ zIndex: "6" }}>
        <Box
          sx={{
            width: { xs: "100%", sm: "70%", md: "44%", lg: "36%" },
            height: { xs: "60%", sm: "56%", md: "54%", lg: "50%" },
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            p: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
              height: "100%",
            }}
          >
            <img src={Like} style={{ width: "80px" }} />
            <Typography>Order Sent</Typography>
            <Typography sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
              You Are About To Submit A Request Of{"  "}
              {details?.total_price_after_discount
                ? parseFloat(
                    (
                      (isFloat(details?.total_price_after_discount)
                        ? details?.total_price_after_discount
                        : parseFloat(
                            details?.total_price_after_discount?.toFixed(2)
                          )) +
                      (isFloat(delevaryCharge?.address?.delevary_price)
                        ? delevaryCharge?.address?.delevary_price
                        : parseFloat(
                            delevaryCharge?.address?.delevary_price?.toFixed(
                              2
                            ) || 0
                          ))
                    ).toFixed(2)
                  )
                : parseFloat(
                    (
                      (isFloat(details?.total_price)
                        ? details?.total_price
                        : parseFloat(details?.total_price?.toFixed(2))) +
                      (isFloat(delevaryCharge?.address?.delevary_price)
                        ? delevaryCharge?.address?.delevary_price
                        : parseFloat(
                            delevaryCharge?.address?.delevary_price?.toFixed(
                              2
                            ) || 0
                          ))
                    ).toFixed(2)
                  )}
              {language === "ar" ? details.code_ar : details.code_en}
            </Typography>
            <GradiantButton name="Continue" onClick={handleSubmit} />
          </Box>
        </Box>
      </Backdrop>
      {loadingOrder && <GradiantCirculeLoading />}
      <Grid
        container
        sx={{
          px: { xs: 2, sm: 8, md: 10 },
          justifyContent: "space-between",
          direction: language === "ar" ? "rtl" : "ltr",
        }}
      >
        <Grid item xs={12} lg={7}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              mb: 3,
            }}
          >
            <Typography
              sx={{
                backgroundColor: "#F2F2F2",
                p: 1,
                pl: "28px",
                fontWeight: "600",
              }}
            >
              01. {t("checkout.one")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                pl: 1,
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: "10px", sm: "0px" },
              }}
            >
              <Date date={date} setDate={setDate} />
              <TimeRangePicker time={time} setTime={setTime} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              mb: 3,
            }}
          >
            <Typography
              sx={{
                backgroundColor: "#F2F2F2",
                p: 1,
                pl: "28px",
                fontWeight: "600",
              }}
            >
              02. {t("checkout.two")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                minHeight: "80px",
              }}
            >
              {loading ? (
                <GradiantCirculeLoading />
              ) : address && address.length !== 0 ? (
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={selectedAddress}
                  onChange={(event) => setSelectedAddress(event.target.value)}
                  name="radio-buttons-group"
                >
                  {address.map((item) => (
                    <FormControlLabel
                      sx={{
                        pl: 3,
                        border: "1px solid lightgray",
                        borderRadius: "10px",
                        m: 0,
                        mb: 2,
                      }}
                      key={item._id}
                      value={item._id}
                      control={<Radio checked={selectedAddress === item._id} />}
                      label={
                        <Box sx={{ display: "flex", gap: 2 }}>
                          <Box sx={{ display: "flex" }}>
                            <Typography
                              sx={{
                                fontWeight: "bold",
                                fontSize: { xs: "12px", sm: "16px" },
                              }}
                            >
                              {item.city?.name.en}
                            </Typography>
                            <Typography
                              sx={{
                                fontWeight: "bold",
                                fontSize: { xs: "12px", sm: "16px" },
                              }}
                            >
                              -{item.address?.name.en}
                            </Typography>
                          </Box>
                          <Box>
                            <Typography
                              sx={{ fontSize: { xs: "12px", sm: "16px" } }}
                            >
                              {item?.description}
                            </Typography>
                          </Box>
                        </Box>
                      }
                    />
                  ))}
                </RadioGroup>
              ) : (
                <Typography>
                  you don't have any adress please{" "}
                  <Link to="/adresses">Go To Address</Link> to add a new one
                </Typography>
              )}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              mb: 3,
            }}
          >
            <Typography
              sx={{
                backgroundColor: "#F2F2F2",
                p: 1,
                pl: "28px",
                fontWeight: "600",
              }}
            >
              03. {t("checkout.three")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                minHeight: "80px",
              }}
            >
              {delevary && delevary.length !== 0 ? (
                <Box sx={{ display: "flex", gap: "20px" }}>
                  {delevary.map((item) => (
                    <Box
                      key={item._id}
                      sx={{
                        width: "100px",
                        height: "60px",
                        borderRadius: "10px",
                        border:
                          selectedDelevary === item._id
                            ? "2px solid #1976d2"
                            : "2px solid lightgray",
                        cursor: "pointer",
                      }}
                      onClick={() => setSelectedDelevary(item._id)}
                    >
                      <img
                        src={uploadImage(item.image)}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "10px",
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              ) : (
                <GradiantCirculeLoading />
              )}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              mb: 3,
            }}
          >
            <Typography
              sx={{
                backgroundColor: "#F2F2F2",
                p: 1,
                pl: "28px",
                fontWeight: "600",
              }}
            >
              04. {t("checkout.four")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                minHeight: "80px",
              }}
            >
              <Box sx={{ display: "flex", gap: "20px" }}>
                <Box
                  sx={{
                    width: "100px",
                    height: "60px",
                    borderRadius: "10px",
                    border:
                      slectedPayment === "cash"
                        ? "2px solid #1976d2"
                        : "2px solid lightgray",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedPayment("cash")}
                >
                  <img
                    src={cash}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                    }}
                  />
                </Box>
                {/* <Box
                  sx={{
                    width: "100px",
                    height: "60px",
                    borderRadius: "10px",
                    border:
                      slectedPayment === "electronic"
                        ? "2px solid #1976d2"
                        : "2px solid lightgray",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedPayment("electronic")}>
                  <img
                    src={electronic}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                    }}
                  />
                </Box> */}
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              mb: 3,
            }}
          >
            <Typography
              sx={{
                backgroundColor: "#F2F2F2",
                p: 1,
                pl: "28px",
                fontWeight: "600",
              }}
            >
              05. {t("checkout.five")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
                value={slectedUser}
                onChange={(event) => setSelectedUser(event.target.value)}
              >
                <FormControlLabel
                  sx={{
                    pl: 3,
                    border: "1px solid lightgray",
                    borderRadius: "10px",
                    m: 0,
                    mb: 2,
                  }}
                  control={<Radio checked={slectedUser === "Receive"} />}
                  value="Receive"
                  label={
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: "12px", sm: "16px" },
                        }}
                      >
                        Personal Receipt
                      </Typography>
                    </Box>
                  }
                />
                <FormControlLabel
                  sx={{
                    pl: 3,
                    border: "1px solid lightgray",
                    borderRadius: "10px",
                    m: 0,
                    mb: 2,
                  }}
                  control={<Radio checked={slectedUser === "Gift"} />}
                  value="Gift"
                  label={
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: "12px", sm: "16px" },
                        }}
                      >
                        Send As A Gift
                      </Typography>
                    </Box>
                  }
                />
                <FormControlLabel
                  control={<Radio checked={slectedUser === "Shipping"} />}
                  value="Shipping"
                  sx={{
                    pl: 3,
                    border: "1px solid lightgray",
                    borderRadius: "10px",
                    m: 0,
                    mb: 2,
                  }}
                  label={
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: "12px", sm: "16px" },
                        }}
                      >
                        Shipping To The Provinces
                      </Typography>
                    </Box>
                  }
                />
              </RadioGroup>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              mb: 3,
            }}
          >
            <Typography
              sx={{
                backgroundColor: "#F2F2F2",
                p: 1,
                pl: "28px",
                fontWeight: "600",
              }}
            >
              06. {t("checkout.six")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Box>
          </Box>
        </Grid>
        <Grid
          lg={4}
          xs={12}
          sx={{
            borderRadius: "6px",
            position: "static",
            top: 0,
            mb: 2, // Add margin bottom to create space between the component and the next element
          }}
        >
          <Box sx={{ border: "1px solid #B5B5B5", p: 2, position: "relative" }}>
            <Typography sx={{ fontSize: "18px", fontWeight: "bold", py: 2 }}>
              {t("checkout.summary")}
            </Typography>
            {loadingCart ? (
              <GradiantCirculeLoading />
            ) : (
              <>
                <CheckOutItems details={details} />
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    flexDirection: "column",
                    mb: 2,
                  }}
                >
                  <CheckOutInput
                    title={t("home.product.items")}
                    value={details?.quantity}
                    action="items"
                    details={details}
                  />
                  <CheckOutInput
                    title={t("home.product.subTotal")}
                    value={details?.total_price?.toFixed(2)}
                    details={details}
                  />
                  <CheckOutInput
                    title={t("home.product.discount")}
                    value={details?.discount?.toFixed(2) || 0}
                    details={details}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography>{t("checkout.delevary")}</Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "12px", sm: "1rem" },
                      }}
                    >
                      {delevaryCharge?.address?.delevary_price.toFixed(2) ||
                        "0"}
                      {language === "ar" ? details.code_ar : details.code_en}
                    </Typography>
                  </Box>
                  <Divider sx={{ borderStyle: "dashed" }} />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography>{t("home.product.total")}</Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "12px", sm: "1rem" },
                      }}
                    >
                      {details?.total_price_after_discount
                        ? parseFloat(
                            (
                              (isFloat(details?.total_price_after_discount)
                                ? details?.total_price_after_discount
                                : parseFloat(
                                    details?.total_price_after_discount?.toFixed(
                                      2
                                    )
                                  )) +
                              (isFloat(delevaryCharge?.address?.delevary_price)
                                ? delevaryCharge?.address?.delevary_price
                                : parseFloat(
                                    delevaryCharge?.address?.delevary_price?.toFixed(
                                      2
                                    ) || 0
                                  ))
                            ).toFixed(2)
                          )
                        : parseFloat(
                            (
                              (isFloat(details?.total_price)
                                ? details?.total_price
                                : parseFloat(
                                    details?.total_price?.toFixed(2)
                                  )) +
                              (isFloat(delevaryCharge?.address?.delevary_price)
                                ? delevaryCharge?.address?.delevary_price
                                : parseFloat(
                                    delevaryCharge?.address?.delevary_price?.toFixed(
                                      2
                                    ) || 0
                                  ))
                            ).toFixed(2)
                          )}
                      {language === "ar" ? details.code_ar : details.code_en}
                    </Typography>
                  </Box>
                </Box>
                <GradiantButton name={t("buttons.buy")} onClick={handleOpen} />
              </>
            )}
          </Box>
        </Grid>
      </Grid>
      <CustomSnackbar
        message={error}
        type="error"
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}
export default CheckOutForm;
