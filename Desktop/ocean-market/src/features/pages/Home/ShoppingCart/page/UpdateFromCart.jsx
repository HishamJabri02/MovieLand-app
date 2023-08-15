/* eslint-disable react/prop-types */
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Backdrop, Box, Button, Grid, Rating, Typography } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import GradiantButton from "../../../../../core/GradiantButton";
import { useDispatch } from "react-redux";
// import { updateProduct } from "../state/ShoppingCartSlice";
import { uploadImage } from "../../../../../core/uploadImage";
import { useTranslation } from "react-i18next";
import { updateProduct } from "../api/updateProduct";
function UpdateFromCart({ handleOpen, updatedItem, setMessage, open }) {
  const {t , i18n}=useTranslation()
  const language = i18n.language;
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(updatedItem.item.color?.images[0] || details.item.product_id.image_cover);
  const [selectedColor, setSelectedColor] = useState(updatedItem.item.color);
  const [selectedSize, setSelectedSize] = useState(updatedItem.item.size);
  const [counter, setCounter] = useState(updatedItem.item.count);
  const handleShow = async(item) => {
    await updateProduct(item)
    handleOpen();
    setMessage(true);
    updatedItem=""
    setTimeout(()=>{
      location.reload()
    },400)
  };
  function handleIncrementQuantity() {
    if (selectedSize.quantity <= counter) {
      return;
    } else {
      setCounter(counter + 1);
    }
  }

  function handleDecrementQuantity() {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  }
  return (
    <Backdrop open={open} sx={{ zIndex: "3", overflow: "scroll" }}>
      <Box
        sx={{
          width: { sm: "80%", md: "auto" },
          margin: { sm: "auto", md: "0" },
          p:{xs:0,md:4},
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", sm: "unset" },
          backgroundColor: "#fff",
          gap: { xs: "20px", md: "0px" },
          position: { xs: "absolute", sm: "relative" },
          top: "0px",
        }}>
        <Box
          sx={{
            aspectRatio: { md: "4/5" },
            height: { xs: "auto", md: "70vh", lg: "80vh" },
            borderRadius: { xs: "0", md: "25px" },
            position: "relative",
            mr: { md: 2, lg: 6 },
          }}>
          <img
            src={uploadImage(selectedImage)}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: { xs: "0", md: "25px" },
            }}
          />
          <CloseIcon
            sx={{
              position: "absolute",
              right: "15px",
              top: "15px",
              cursor: "pointer",
              backgroundColor: "white",
              display: { xs: "block", md: "none" },
            }}
            onClick={() => handleOpen()}
          />
          <Typography
            sx={{
              position: "absolute",
              width: { xs: "40px", sm: "55px" },
              height: { xs: "30px", sm: "40px" },
              lineHeight: { xs: "30px", sm: "40px" },
              textAlign: "center",
              backgroundColor: `${updatedItem.isNew ? "#1492E6" : "#DB3022"}`,
              borderRadius: { xs: "15px", sm: "10px" },
              display: `${
                !updatedItem.isNew && updatedItem.product.special.discountRatio === null
                  ? "none"
                  : "block"
              }`,
              color: "#fff",
              top: "15px",
              left: "15px",
              fontSize: { xs: "12px", sm: "1rem" },
            }}>
            {updatedItem.isNew
              ? "New"
              : "-" + Math.floor(updatedItem.product.special.discount_ratio) + "%"}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            order: { xs: "2", md: "0" },
            px: 4,
          }}>
          <Box
            sx={{
              position: "relative",
              justifyContent: { xs: "space-between", md: "unset" },
              display: "flex",
              gap: { xs: 0, md: 16 },
              alignItems: "center",
              mt: { md: 0, lg: 4 },
              mb: 1,
            }}>
            <Typography variant="h6">{language==="ar"?updatedItem.item.product_id?.name_ar|| updatedItem.item.product_id.name: updatedItem.item.product_id.name}</Typography>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{
                color: updatedItem.product.isActive  ? "#095EF9" : "#DB0000",
              }}>
              {updatedItem.product.isActive ? `( ${t("home.product.availble")} )`:`( ${t("home.product.unavailble")} )`}    
            </Typography>
            <CloseIcon
              sx={{
                position: "absolute",
                top: "-25px",
                right: { md: "0", lg: "24px" },
                cursor: "pointer",
                backgroundColor: "white",
                display: { xs: "none", md: "block" },
              }}
              onClick={() => handleOpen()}
            />
          </Box>
          <Rating
            name="read-only"
            value={updatedItem.rating}
            readOnly
            sx={{ fontSize: "2rem", mb: 1 }}
          />
          <Typography
            variant="subtitle1"
            fontSize="1rem"
            fontFamily="poppins"
            sx={{ color: "#707070", mb: 1 }}>
            {updatedItem.product.materials.map((type, index) => (
              <span key={index}> {type} /</span>
            ))}
          </Typography>
          <Typography
            variant="subtitle1"
            fontSize="1rem"
            fontFamily="poppins"
            sx={{ color: "#969696", mb: 1 }}>
            {language==="ar"?updatedItem.item.product_id?.info_ar|| updatedItem.item.product_id.info:updatedItem.item.product_id.info}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              alignItems: "flex-end",
              mb: 1,
            }}>
            {selectedSize?.price && (
              <Typography
                variant="body2"
                sx={{ color: "#095EF9", fontSize: "22px" }}>
                {selectedSize.price_after_discount
                  ? selectedSize.price_after_discount.toFixed(2)
                  : selectedSize.price.toFixed(2)}{" "}
                {language==="ar" ?updatedItem.product.code_ar :updatedItem.product.code_en}
              </Typography>
            )}
            {selectedSize.price_after_discount && (
              <Typography
                variant="subtitle2"
                sx={{
                  textDecoration: "line-through",
                  color: "gray",
                  fontSize: "1.1rem",
                }}>
                {selectedSize.price.toFixed(2)} {language==="ar" ?updatedItem.product.code_ar :updatedItem.product.code_en}
              </Typography>
            )}
          </Box>
          <Box sx={{ mb: 1 }}>
            {updatedItem.product.colors.length !== 0 && (
                <>
                  <Typography sx={{ mb: 1 }}>{t("home.product.color")}</Typography>
                  <Box sx={{ display: "flex", gap: 2, mb: 2 , flexWrap:"wrap"}}>
                    {updatedItem.product.colors.map((color, index) => (
                      <Typography
                        key={index}
                        sx={{
                          backgroundColor: color.color_hex,
                          width: "30px",
                          height: "30px",
                          borderRadius: "100%",
                          border:
                            selectedColor._id === color._id
                              ? "2px solid blue"
                              : "1px solid lightgray",
                        }}
                        onClick={() => {
                          setSelectedColor(color);
                          setSelectedImage(
                            color?.images[0] || updatedItem.item.product_id.image_cover
                          );
                          setSelectedSize(color?.sizes[0]);
                          setCounter(1);
                        }}></Typography>
                    ))}
                  </Box>
                </>
              )}
            { updatedItem.product.colors.length !== 0 && (
                <>
                  <Typography sx={{ mb: 1 }}>{t("home.product.size")}</Typography>
                  <Grid
                    container
                    sx={{
                      display: "flex",
                      gap: 2,
                      mb: 2,
                    }}>
                    {updatedItem.product.colors
                      .filter((color) => color._id === selectedColor?._id)
                      .map((color) =>
                        color.sizes.map((size) => (
                          <Grid
                            item
                            key={size._id}
                            sx={{
                              width: "85px",
                              height: "35px",
                              textAlign: "center",
                              lineHeight: "35px",
                              border:
                                selectedSize?._id === size?._id
                                  ? "2px solid blue"
                                  : "2px solid #C4C4C4",
                              borderRadius: "10px",
                            }}
                            onClick={() => {
                              setSelectedSize(size);
                              setCounter(1);
                            }}>
                            {size.name}
                          </Grid>
                        ))
                      )}
                  </Grid>
                </>
              )}
          </Box>
          <Typography sx={{ mb: 2 }}>{t("home.product.quantity")}</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid lightgrey",
              width: { xs: "70%", lg: "55%" },
              mx: { xs: "auto", md: "0" },
              height: "7vh",
              mb: 4,
            }}>
            <Button
              sx={{
                backgroundColor: "#F5F5F5",
                flexBasis: "35%",
                height: "100%",
              }}
              onClick={handleIncrementQuantity}>
              +
            </Button>
            <Typography sx={{ flexBasis: "30%", textAlign: "center" }}>
              {counter}
            </Typography>
            <Button
              onClick={handleDecrementQuantity}
              sx={{
                backgroundColor: "#F5F5F5",
                flexBasis: "35%",
                height: "100%",
              }}>
              -
            </Button>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: "30px",
            }}>
            <GradiantButton
              name={t("buttons.update")}
              sx={{ flexBasis: "80%" }}
              onClick={() =>
                handleShow({
                  item_id:updatedItem.item._id,
                  color_id:selectedColor._id,
                  size_id:selectedSize._id,
                  count:counter,
                })
              }
            />
            <Box
              sx={{
                backgroundColor: "#F5F5F5",
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "50px",
              }}>
              <FavoriteBorderIcon sx={{ fontSize: "30px", color: "#3167EB" }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Backdrop>
  );
}

export default UpdateFromCart;
