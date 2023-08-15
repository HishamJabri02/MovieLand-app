import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Box, Grid, Typography } from "@mui/material";
import trash from "../../../../../assets/images/trash.svg";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromBag } from "../state/ShoppingCartSlice";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import UpdateFromCart from "./UpdateFromCart";
import CustomSnackbar from "../../../../../core/CustomSnackbar";
import { uploadImage } from "../../../../../core/uploadImage";
function ShoppingCartList() {
  const details = useSelector((state) => state.ShoppingCartReducer.details);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(false);
  const [updatedItem, setUpdatedItem] = useState({});
  const handleClick = (item) => {
    handleOpen();
    setUpdatedItem(item);
  };
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      {details.map((item) => (
        <Grid
          item
          key={item.key}
          sx={{
            p: 2,
            border: "1px solid #B5B5B5",
            borderRadius: 1,
            height: "25vh",
            display: "flex",
            mb: 2,
            justifyContent: { md: "center", lg: "normal" },
          }}>
          <Box sx={{ aspectRatio: "4/5", mr: 2 }}>
            <img
              src={uploadImage(
                item.selectedColor?.images[0] || item.image_cover
              )}
              alt=""
              style={{
                borderRadius: "10px",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexBasis: { md: "75%" },
              width: { xs: "50%" },
              gap: { xs: "5px", md: "10px" },
            }}>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "18px", md: "20px", lg: "23px" },
                color: "#2B2B2B",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "pre",
              }}>
              {item.name}
            </Typography>
            <Typography
              sx={{
                color: "#707070",
                width: { sm: "250px" },
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "pre",
                fontSize: { xs: "10px", sm: "14px", lg: "1rem" },
              }}>
              {item.info}
            </Typography>
            <Box sx={{ display: "flex", gap: "50px", alignItems: "center" }}>
              {
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "16px",
                      lg: "22px",
                    },
                    color: "blue",
                  }}>
                  {item.selectedSize.price_after_discount
                    ? item.selectedSize.price_after_discount
                    : item.selectedSize.price}{" "}
                  kwd
                </Typography>
              }
              {item.selectedSize.price_after_discount && (
                <Typography
                  sx={{
                    fontSize: { xs: "10px", sm: "20px" },
                    color: "#969696",
                    textDecoration: "line-through",
                  }}>
                  {item.selectedSize.price} kwd
                </Typography>
              )}
            </Box>
            <Box
              sx={{
                width: { md: "45%" },
                height: "35px",
                display: "flex",
                justifyContent: "space-around",
                border: "1px solid #B5B5B5",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => handleClick(item)}>
              <span
                style={{
                  width: "25px",
                  height: "25px",
                  backgroundColor: item.selectedColor.color_hex,
                  borderRadius: "100%",
                  border: "1px solid #B5B5B5",
                }}></span>
              /<span>{item.selectedSize.name}</span>
              <KeyboardArrowDownIcon />
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: "100% !important", md: "auto" },
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              gap: 1,
            }}>
            <FavoriteBorderOutlinedIcon
              sx={{
                display: { xs: "none", sm: "block" },
                fontSize: { xs: "20px", lg: "30px" },
              }}
            />
            <img
              width={window.innerWidth > 1200 ? "30px" : "20px"}
              src={trash}
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(deleteFromBag(item.key))}
            />
          </Box>
        </Grid>
      ))}
      {open && (
        <UpdateFromCart
          handleOpen={handleOpen}
          updatedItem={updatedItem}
          setMessage={setMessage}
        />
      )}
      <CustomSnackbar
        open={message}
        setOpen={setMessage}
        type="success"
        message={"Product updated Successfully"}
      />
    </>
  );
}

export default ShoppingCartList;
