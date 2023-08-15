import { useParams } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import GradiantCirculeLoading from "../../../../../../core/GradiantCirculeLoading";
import { getProductDetailsAsync } from "../../state/getProductDetailsAsync";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Button, Grid, Rating, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import GradiantButton from "../../../../../../core/GradiantButton";
import { clearProductDetails } from "../../state/getProductDetailsSlice";
import { addToBag } from "../../../ShoppingCart/state/ShoppingCartSlice";
import { uploadImage } from "../../../../../../core/uploadImage";
import Footer from "../../../Footer/Page/Footer";
import CustomSnackbar from "../../../../../../core/CustomSnackbar";
function ProductsDetails() {
  const { id } = useParams();
  const cleanId = id.substring(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetailsAsync(cleanId));
    return () => {
      dispatch(clearProductDetails());
    };
  }, [dispatch, cleanId]);
  const loading = useSelector(
    (state) => state.getProductDetailsReducer.loading
  );
  const details = useSelector(
    (state) => state.getProductDetailsReducer.productDetails
  );
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    setSelectedImage(details.special?.color?.images[0] || details.image_cover);
    setSelectedColor(details.special?.color);
    setSelectedSize(details.special?.size);
    setSelectedPrice(details.special?.size);
  }, [details]);
  function handleImageClick(imageUrl) {
    setSelectedImage(imageUrl);
  }
  function handleIncrementQuantity() {
    if (selectedSize.quantity <= quantity) {
      handleOpen();
      return;
    } else {
      setQuantity(quantity + 1);
    }
  }
  const handleOpen = () => {
    setOpen(true);
  };
  function handleDecrementQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <Box>
      <Navbar />
      {loading && (
        <Box sx={{ height: "200px", position: "relative" }}>
          <GradiantCirculeLoading />
        </Box>
      )}
      {details && details.colors && (
        <Box
          sx={{
            width: { sm: "80%", md: "auto", lg: "80%" },
            margin: { sm: "auto", md: "0", lg: "auto" },
            pt: { xs: 0, md: 4 },
            display: "flex",
            pl: { xs: 0, md: 4, lg: 0 },
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", sm: "unset" },
            gap: { xs: "20px", md: "0px" },
          }}>
          <Box
            sx={{
              flexBasis: { md: "15%", lg: "20%", xl: "15%" },
              order: { xs: "1", md: "0" },
            }}>
            <Stack
              sx={{
                gap: 2,
                mr: { md: 2, lg: 4 },
                flexDirection: { xs: "row", md: "column" },
              }}>
              {selectedColor && selectedColor && selectedColor.images ? (
                selectedColor.images.map((img, index) => (
                  <Box
                    key={index}
                    sx={{
                      borderRadius: "10px",
                      border: "1px solid lightgray",
                      aspectRatio: { xs: "0", md: "1/1" },
                      flexBasis: "20%",
                    }}>
                    <img
                      src={uploadImage(img)}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                        aspectRatio: "1/1",
                      }}
                      onClick={() => handleImageClick(img)}
                    />
                  </Box>
                ))
              ) : (
                <Box
                  sx={{
                    borderRadius: "10px",
                    border: "1px solid lightgray",
                    aspectRatio: { xs: "0", md: "1/1" },
                    flexBasis: "20%",
                  }}>
                  <img
                    src={uploadImage(selectedImage)}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                      aspectRatio: "1/1",
                    }}
                  />
                </Box>
              )}
            </Stack>
          </Box>
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
            <Typography
              sx={{
                position: "absolute",
                width: { xs: "40px", sm: "55px" },
                height: { xs: "30px", sm: "40px" },
                lineHeight: { xs: "30px", sm: "40px" },
                textAlign: "center",
                backgroundColor: `${details.isNew ? "#1492E6" : "#DB3022"}`,
                borderRadius: { xs: "15px", sm: "10px" },
                display: `${
                  !details.isNew && details.special.discount_ratio === null
                    ? "none"
                    : "block"
                }`,
                color: "#fff",
                top: "15px",
                left: "15px",
                fontSize: { xs: "12px", sm: "1rem" },
              }}>
              {details.isNew
                ? "New"
                : "-" + Math.floor(details.special.discount_ratio) + "%"}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              order: { xs: "2", md: "0" },
              px: 2,
            }}>
            <Box
              sx={{
                justifyContent: { xs: "space-between", md: "unset" },
                display: "flex",
                gap: { xs: 0, md: 16 },
                alignItems: "center",
                mt: { md: 0, lg: 4 },
                mb: 1,
              }}>
              <Typography variant="h6">{details.name}</Typography>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{
                  color:
                    !details.isActive ||
                    details.special.size?.price === null ||
                    details.special.quantity <= 0
                      ? "#DB0000"
                      : "#095EF9",
                }}>
                {!details.isActive ||
                details.special.size?.price === null ||
                details.special.quantity <= 0
                  ? "(Unavailble)"
                  : "(Availble)"}
              </Typography>
            </Box>
            <Rating
              name="read-only"
              value={details.rating}
              readOnly
              sx={{ fontSize: "2rem", mb: 1 }}
            />
            <Typography
              variant="subtitle1"
              fontSize="1rem"
              fontFamily="poppins"
              sx={{ color: "#707070", mb: 1 }}>
              {details.materials.map((type, index) => (
                <span key={index}> {type} /</span>
              ))}
            </Typography>
            <Typography
              variant="subtitle1"
              fontSize="1rem"
              fontFamily="poppins"
              sx={{ color: "#969696", mb: 1 }}>
              {details.info}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "30px",
                alignItems: "flex-end",
                mb: 1,
              }}>
              {selectedPrice?.price && (
                <Typography
                  variant="body2"
                  sx={{ color: "#095EF9", fontSize: "22px" }}>
                  {selectedPrice.price_after_discount
                    ? selectedPrice.price_after_discount
                    : selectedPrice.price}{" "}
                  kwd
                </Typography>
              )}
              {selectedPrice?.price_after_discount && (
                <Typography
                  variant="subtitle2"
                  sx={{
                    textDecoration: "line-through",
                    color: "gray",
                    fontSize: "1.1rem",
                  }}>
                  {selectedPrice.price} kwd
                </Typography>
              )}
            </Box>

            <Box sx={{ mb: 1 }}>
              {details && details.colors && details.colors.length !== 0 && (
                <>
                  <Typography sx={{ mb: 1 }}>Color</Typography>
                  <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                    {details.colors.map((color, index) => (
                      <Typography
                        key={index}
                        sx={{
                          backgroundColor: color.color_hex,
                          width: "30px",
                          height: "30px",
                          borderRadius: "100%",
                          border:
                            selectedColor?._id === color?._id
                              ? "2px solid blue"
                              : "1px solid lightgray",
                        }}
                        onClick={() => {
                          setSelectedColor(color);
                          setSelectedImage(
                            color?.images[0] || details.image_cover
                          );
                          setSelectedPrice(color?.sizes[0]);
                          setSelectedSize(color?.sizes[0]);
                          setQuantity(1);
                        }}></Typography>
                    ))}
                  </Box>
                </>
              )}
              {details && details.colors && details.colors.length !== 0 && (
                <>
                  <Typography sx={{ mb: 1 }}>Size</Typography>
                  <Grid
                    container
                    sx={{
                      display: "flex",
                      gap: 2,
                      mb: 2,
                    }}>
                    {details.colors
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
                              setSelectedPrice(size);
                              setQuantity(1);
                            }}>
                            {size.name}
                          </Grid>
                        ))
                      )}
                  </Grid>
                </>
              )}
            </Box>
            <Typography sx={{ mb: 2 }}>Quantity</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid lightgrey",
                width: { xs: "70%", lg: "45%" },
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
                {quantity}
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
                width: { xs: "100%", md: "70%" },
                display: "flex",
                gap: "30px",
              }}>
              <GradiantButton
                disabled={
                  !details.isActive ||
                  details.special.size?.price === null ||
                  details.special.quantity <= 0
                    ? true
                    : false
                }
                name="Add To Bag"
                sx={{ flexBasis: "80%" }}
                onClick={() =>
                  dispatch(
                    addToBag({
                      details,
                      selectedColor,
                      selectedSize,
                      selectedPrice,
                      quantity,
                    })
                  )
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
                <FavoriteBorderIcon
                  sx={{ fontSize: "30px", color: "#3167EB" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      <CustomSnackbar
        open={open}
        type="error"
        message="There is enough quantity in the warehouse"
        setOpen={setOpen}
      />
      <Footer />
    </Box>
  );
}
export default ProductsDetails;
