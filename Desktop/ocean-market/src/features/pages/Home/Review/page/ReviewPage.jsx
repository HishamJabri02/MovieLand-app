/* eslint-disable no-unused-vars */
import {
  Backdrop,
  Box,
  Divider,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import Happy from "../../../../../assets/images/Happy.svg";
import CloseIcon from "@mui/icons-material/Close";
import { uploadImage } from "../../../../../core/uploadImage";
import GradiantButton from "../../../../../core/GradiantButton";
import { useSelector } from "react-redux";
import Navbar from "../../Navbar/Navbar";
import ReviewItems from "./ReviewItems";
import Footer from "../../Footer/Page/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function ReviewPage() {
  const navigate = useNavigate();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const {
    location,
    delevary_method_id,
    delevary_date,
    desired_date,
    payment,
    cart,
    note,
    user_status,
    invoice,
  } = useSelector((state) => state.CheckOutReducer.details);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar />
      <Typography
        sx={{
          fontFamily: "Lucida Bright !important",
          fontSize: "25px",
          fontWeight: "bold",
          pt: 4,
          textAlign: "center",
        }}>
        Review
      </Typography>
      <Backdrop open={open} sx={{ zIndex: "6" }}>
        <Box
          sx={{
            width: { xs: "100%", sm: "70%", md: "44%", lg: "36%" },
            height: { xs: "60%", sm: "56%", md: "54%", lg: "50%" },
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            p: 4,
          }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}>
            <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
              height: "100%",
            }}>
            <img src={Happy} style={{ width: "80px" }} />
            <Typography>Thanks For Choosing Our App!</Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "16px" },
                textAlign: "center",
              }}>
              Your Request Has Been Received And You Will Receive A Notification
              Of The Status Of Your Application.{" "}
            </Typography>
            <GradiantButton
              name="Go To HomePage"
              onClick={() => {
                navigate("/");
              }}
            />
          </Box>
        </Box>
      </Backdrop>
      <Grid
        container
        sx={{
          pt: 4,
          px: { xs: 2, sm: 8, md: 10 },
          justifyContent: "space-between",
        }}>
        <Grid item xs={12} lg={7}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              mb: 3,
            }}>
            <Typography
              sx={{
                backgroundColor: "#F2F2F2",
                p: 1,
                pl: "28px",
                fontWeight: "600",
              }}>
              01. Time Of Receipt
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                pl: 1,
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: "10px", sm: "0px" },
              }}>
              <TextField
                id="outlined-read-only-input"
                label="Date"
                defaultValue={delevary_date}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-read-only-input"
                label="From-to"
                value={desired_date.from + "      " + desired_date.to}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              mb: 3,
            }}>
            <Typography
              sx={{
                backgroundColor: "#F2F2F2",
                p: 1,
                pl: "28px",
                fontWeight: "600",
              }}>
              02. Delivery Address{" "}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                minHeight: "80px",
              }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={location.city._id}
                name="radio-buttons-group">
                <FormControlLabel
                  sx={{
                    pl: 3,
                    border: "1px solid lightgray",
                    borderRadius: "10px",
                    m: 0,
                    mb: 2,
                  }}
                  value={location.city._id}
                  control={<Radio />}
                  label={
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Box sx={{ display: "flex" }}>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "12px", sm: "16px" },
                          }}>
                          {location.city.name.en}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "12px", sm: "16px" },
                          }}>
                          -{location.address.name.en}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
                          {location.description}
                        </Typography>
                      </Box>
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
            }}>
            <Typography
              sx={{
                backgroundColor: "#F2F2F2",
                p: 1,
                pl: "28px",
                fontWeight: "600",
              }}>
              03. Shopping Options{" "}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                minHeight: "80px",
              }}>
              <Box sx={{ display: "flex", gap: "20px" }}>
                <Box
                  sx={{
                    width: "100px",
                    height: "60px",
                    borderRadius: "10px",
                    border: "2px solid #1976d2",
                    cursor: "pointer",
                  }}>
                  <img
                    src={uploadImage(delevary_method_id.image)}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              mb: 3,
            }}>
            <Typography
              sx={{
                backgroundColor: "#F2F2F2",
                p: 1,
                pl: "28px",
                fontWeight: "600",
              }}>
              04. Payment Methods
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
                value={payment.method}>
                <FormControlLabel
                  sx={{
                    pl: 3,
                    border: "1px solid lightgray",
                    borderRadius: "10px",
                    m: 0,
                    mb: 2,
                  }}
                  value="cash"
                  control={<Radio />}
                  label={
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: "12px", sm: "16px" },
                        }}>
                        Cash On delivery
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
            }}>
            <Typography
              sx={{
                backgroundColor: "#F2F2F2",
                p: 1,
                pl: "28px",
                fontWeight: "600",
              }}>
              05. User Status
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
                value={user_status}>
                <FormControlLabel
                  sx={{
                    pl: 3,
                    border: "1px solid lightgray",
                    borderRadius: "10px",
                    m: 0,
                    mb: 2,
                  }}
                  control={<Radio />}
                  value={user_status}
                  label={
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: "12px", sm: "16px" },
                        }}>
                        {user_status === "Shipping"
                          ? "Shipping To The Provinces"
                          : user_status === "Gift"
                          ? "Send As A Gift"
                          : "Personal Reciept"}
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
            }}>
            <Typography
              sx={{
                backgroundColor: "#F2F2F2",
                p: 1,
                pl: "28px",
                fontWeight: "600",
              }}>
              06. Description
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}>
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                value={note}
                readOnly
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
            mb: 2,
          }}>
          <Box sx={{ border: "1px solid #B5B5B5", p: 2 }}>
            <Typography sx={{ fontSize: "18px", fontWeight: "bold", py: 2 }}>
              Order Summary
            </Typography>
            <ReviewItems cart={cart} />
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                flexDirection: "column",
                mb: 2,
              }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                <Typography>Subtotal</Typography>
                <Typography sx={{ fontSize: { xs: "12px", sm: "1rem" } }}>
                  {invoice.sub_total_price} KWD
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                <Typography>Discount</Typography>
                <Typography sx={{ fontSize: { xs: "12px", sm: "1rem" } }}>
                  {invoice.sub_total_price - invoice.total_price_after_discount}{" "}
                  KWD
                </Typography>
              </Box>
              <Divider sx={{ borderStyle: "dashed" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                <Typography>Total Items</Typography>
                <Typography sx={{ fontSize: { xs: "12px", sm: "1rem" } }}>
                  {invoice.total_price_after_discount} KWD
                </Typography>
              </Box>
            </Box>
            <GradiantButton name="Confirm" onClick={handleOpen} />
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default ReviewPage;
