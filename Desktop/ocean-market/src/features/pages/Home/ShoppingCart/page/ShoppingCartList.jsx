import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Box, Grid, Typography } from "@mui/material";
import trash from "../../../../../assets/images/trash.svg";
import { useDispatch, useSelector } from "react-redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState } from "react";
import CustomSnackbar from "../../../../../core/CustomSnackbar";
import { uploadImage } from "../../../../../core/uploadImage";
import { useTranslation } from "react-i18next";
import heart from "../../../../../assets/images/gradiantHeart.svg";
import { ShoppingCartAsync } from "../state/ShoppingCartAsync";
import { deleteProductApi } from "../api/deleteProductApi";
import UpdateFromCart from "./UpdateFromCart";
import { getProductDetailsApi } from "../../Products/api/getProductDetailsApi";
import FavoriteIcon from '@mui/icons-material/Favorite';
function ShoppingCartList({details}) {
  const {t , i18n}=useTranslation()
  const language = i18n.language
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(false);
  const [updatedItem, setUpdatedItem] = useState({});
  const handleClick = async(item) => {
    const response= await getProductDetailsApi(item.product_id._id)
    handleOpen();
    setUpdatedItem({item:item , product:response.data});
  };
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  const {items,code_ar,code_en}=details
  return (
    <>
      {items && items.length!==0 &&
      items.map((item) => (
        <Grid
          item
          key={item._id}
          sx={{
            p: 2,
            border: "1px solid #B5B5B5",
            borderRadius: 1,
            height: {xs:"150px",md:"25vh"},
            display: "flex",
            mb: 2,
            justifyContent: {md: "center", lg: "normal" },
          }}>
          <Box sx={{ aspectRatio:{xs:"0",sm:"4/5"}, mr:language==="ar" ? 0:2,ml:language==="ar" ? 2:0}}>
            <img
              src={uploadImage(
                item.color?.images[0] || item?.product_id?.image_cover
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
              gap: { xs: "5px" },
              justifyContent:"space-between"
            }}>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "18px", md: "20px" },
                color: "#2B2B2B",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "pre",
              }}>
              {language==="ar" ? item.name_ar :item.product_name}
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
               {language==="ar" ? item.product_id.info_ar :item.product_id.info}
            </Typography>
            <Box sx={{ display: "flex", gap: "50px", alignItems: "center" }}>
              {
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "16px",
                      lg: "20px",
                    },
                    color: "blue",
                  }}>
                  {item.size.price_after_discount
                    ? item.size.price_after_discount.toFixed(2)
                    : item.size.price.toFixed(2)}{" "}
                  {language==="ar"? code_ar: code_en}
                </Typography>
              }
              {item.size.price_after_discount && (
                <Typography
                  sx={{
                    fontSize: { xs: "10px", sm: "16px" },
                    color: "#969696",
                    textDecoration: "line-through",
                  }}>
                  {item.size.price.toFixed(2)} {language==="ar"? code_ar: code_en}
                </Typography>
              )}
            </Box>
            <Box
              sx={{
                width: { md: "65%" },
                height: "45px",
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
                  backgroundColor: item.color.color_hex,
                  borderRadius: "100%",
                  border: "1px solid #B5B5B5",
                }}></span>
              /<span>{item.size.name}</span>
              <KeyboardArrowDownIcon />
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: "13% !important", md: "100% !important" },
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              gap: 1,
            }}>
              { 
                item.product_id.isLiked ? <FavoriteIcon sx={{width:"30px",display:{xs:"none" ,sm:"block"}}} /> :
                <FavoriteBorderOutlinedIcon
                sx={{
                  display: { xs: "none", sm: "block" },
                  fontSize: { xs: "20px", lg: "30px" },
                }}
                />
              }
            <img
              width={window.innerWidth > 1200 ? "30px" : "20px"}
              src={trash}
              style={{ cursor: "pointer" }}
              onClick={() => deleteProductApi(item._id)}
            />
          </Box>
        </Grid>
      ))}
      {open && (
        <UpdateFromCart
          open={open}
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
