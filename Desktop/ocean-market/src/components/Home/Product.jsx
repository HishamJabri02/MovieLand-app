/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useState } from "react";
import { WishListAsync } from "../../features/pages/Home/WishList/state/WishListAsync";
import heart from "../../assets/images/gradiantHeart.svg";
import { getAllFavoritesAsync } from "../../features/pages/Home/WishList/state/getAllFavoritesAsync";
import CustomSnackbar from "../../core/CustomSnackbar";
import { uploadImage } from "../../core/uploadImage";
import { useTranslation } from "react-i18next";
function Product({
  id,
  name_ar,
  name,
  imageCover,
  isActive,
  isNew,
  rating,
  isLike,
  fav,
  special,
  code
}) {
  const { t,i18n } = useTranslation();
  const language = i18n.language; 
   const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const message = useSelector((state) => state.WishListReducer.message.data);
  const error = useSelector((state) => state.WishListReducer.error);
  const [like, setLike] = useState(isLike);
  const handleFavoriteClick = async (event) => {
    event.preventDefault();
    try {
      const response = await dispatch(WishListAsync(id));
      if (fav) {
        await dispatch(getAllFavoritesAsync());
      }
      if (response.meta.requestStatus === "rejected") {
        setOpen(true);
        return;
      } else {
        setLike((prev) => !prev);
        setOpen(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Card
        sx={{
          width: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          boxShadow: "none",
          transition: ".3s",
          border: "1px solid lightgray",
          height: "100%",
          cursor: "pointer",
          "&:hover": {
            border: "0px",
            borderColor: "lightgray",
            boxShadow:
              "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.62)",
          },
        }}>
        <CardMedia
          sx={{ flexBasis: "80%", backgroundPosition: "unset" }}
          image={  uploadImage(special?.color?.images[0] || imageCover)}>
          {!isActive ||
            special.size?.price === null ||
            (special.quantity <= 0 && (
              <>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "black",
                    opacity: ".4",
                  }}></Box>
                <Typography
                  sx={{
                    position: "absolute",
                    zIndex: "2",
                    color: "#fff",
                    top: "0",
                    display: "flex",
                    width: "100%",
                    height: "70%",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: { xs: "10px", sm: "1rem" },
                  }}>
                  {t("generall.unavaible")}
                </Typography>
              </>
            ))}
        </CardMedia>
        <Typography
          sx={{
            position: "absolute",
            width: { xs: "40px", sm: "55px" },
            height: { xs: "30px", sm: "40px" },
            lineHeight: { xs: "30px", sm: "40px" },
            textAlign: "center",
            backgroundColor: `${isNew ? "#1492E6" : "#DB3022"}`,
            borderRadius: { xs: "15px", sm: "10px" },
            display: `${
              !isNew && special.discount_ratio === null ? "none" : "block"
            }`,
            color: "#fff",
            top: "15px",
            left: "15px",
            fontSize: { xs: "12px", sm: "1rem" },
          }}>
          {isNew
            ? t("generall.new")
            : "-" + Math.floor(special.discount_ratio) + "%"}
        </Typography>
        <CardContent
          sx={{
            position: "relative",
            padding: "0px",
            "&:last-child": { paddingBottom: 0 },
          }}>
          <CardActions
            sx={{
              display: "flex",
              padding: "0px",
              position: "absolute",
              top: { xs: "-15px", md: "-25px" },
              right: { xs: "5px", sm: "10px" },
            }}>
            {like ? (
              <Box
                sx={{
                  width: { xs: "25px", sm: "30px", md: "40px" },
                  height: { xs: "25px", sm: "30px", md: "40px" },
                  padding: { xs: "4px", sm: "8px" },
                  backgroundColor: "#fff",
                  borderRadius: "100%",
                  filter: "drop-shadow(2px 2px 4px #E6E6E6)",
                  display: "flex",
                  alignItems: "center",
                  mr: 1,
                }}
                onClick={(event) => handleFavoriteClick(event)}>
                <img src={heart} alt="" width="100%" />
              </Box>
            ) : (
              <FavoriteBorderIcon
                sx={{
                  width: { xs: "25px", sm: "30px", md: "40px" },
                  height: { xs: "25px", sm: "30px", md: "40px" },
                  padding: { xs: "4px", sm: "8px" },
                  backgroundColor: "#fff",
                  borderRadius: "100%",
                  filter: "drop-shadow(2px 2px 4px #E6E6E6)",
                  color: "gray",
                }}
                onClick={(event) => handleFavoriteClick(event)}
              />
            )}
            <ShoppingBagIcon
              sx={{
                width: { xs: "25px", sm: "30px", md: "40px" },
                height: { xs: "25px", sm: "30px", md: "40px" },
                padding: { xs: "4px", sm: "8px" },
                backgroundColor: "#fff",
                borderRadius: "100%",
                filter: "drop-shadow(2px 2px 4px #E6E6E6)",
              }}
            />
          </CardActions>
          <Box
            sx={{
              paddingLeft: { xs: "6px", sm: "12px" },
              paddingTop: { xs: "10px", sm: "20px" },
            }}>
            <Box
              sx={{ display: "flex", marginBottom: { xs: "4px", sm: "8px" } }}>
              <Rating
                name="read-only"
                value={rating}
                readOnly
                sx={{
                  fontSize: { xs: "1rem", md: "1.6rem" },
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "10px", sm: "12px", md: ".9rem" },
                marginBottom: { xs: "4px", sm: "8px" },
                textAlign: "start",
                fontWeight: "600",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "pre",
              }}>
              {language === "ar" ? name_ar : name}{" "}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                marginBottom: { xs: "4px", sm: "8px" },
              }}>
              {special.size?.price && (
                <Typography
                  variant="body2"
                  sx={{
                    color: "#095EF9",
                    fontSize: { xs: "10px", sm: "1rem" },
                  }}>
                  {special.size.price_after_discount
                    ? special.size.price_after_discount.toFixed(2)
                    : special.size.price.toFixed(2)}{" "}
                  {code}
                </Typography>
              )}
              {special.size?.price_after_discount && (
                <Typography
                  variant="subtitle2"
                  sx={{
                    textDecoration: "line-through",
                    color: "gray",
                    fontSize: { xs: "10px", sm: "1rem" },
                  }}>
                  {special.size.price.toFixed(2)} {code}
                </Typography>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
      <CustomSnackbar
        type={error ? "error" : "success"}
        message={error ? error : message}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}
export default Product;
