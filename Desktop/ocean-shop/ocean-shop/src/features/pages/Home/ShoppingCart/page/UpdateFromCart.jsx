/* eslint-disable react/prop-types */
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Button, Grid, Rating, Stack, Typography } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import GradiantButton from "../../../../../core/GradiantButton";
import { useDispatch } from "react-redux";
import { updateProduct } from "../state/ShoppingCartSlice";
import { uploadImage } from "../../../../../core/uploadImage";
function UpdateFromCart({ handleOpen, updatedItem, setMessage }) {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(
    updatedItem.selectedColor?.images[0] || updatedItem.image_cover
  );
  const [selectedColor, setSelectedColor] = useState(updatedItem.selectedColor);
  const [selectedSize, setSelectedSize] = useState(updatedItem.selectedSize);
  const [counter, setCounter] = useState(updatedItem.counter);
  const handleShow = (item) => {
    dispatch(updateProduct(item));
    handleOpen();
    setMessage(true);
  };
  function handleImageClick(imageUrl) {
    setSelectedImage(imageUrl);
  }
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
    <Box
      sx={{
        position: "absolute",
        top: "85px",
        backgroundColor: "#fff",
        height: "auto",
        zIndex: "3",
      }}>
      <Box
        sx={{
          width: { sm: "80%", md: "auto" },
          margin: { sm: "auto", md: "0" },
          pt: { xs: 0, md: 4 },
          display: "flex",
          pl: { xs: 0, md: 4 },
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", sm: "unset" },
          gap: { xs: "20px", md: "0px" },
        }}>
        <Box
          sx={{
            flexBasis: { md: "30%", lg: "20%", xl: "15%" },
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
                !updatedItem.isNew && updatedItem.discountRatio === null
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
              : "-" + Math.floor(updatedItem.discountRatio) + "%"}
          </Typography>
        </Box>
        <Box
          sx={{
            maxHeight: "80vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            order: { xs: "2", md: "0" },
            px: 2,
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
            <Typography variant="h6">{updatedItem.name}</Typography>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{
                color: updatedItem.isActive ? "#095EF9" : "#DB0000",
              }}>
              {updatedItem.isActive ? "(Availble)" : "(Unavailble)"}
            </Typography>
            <CloseIcon
              sx={{
                position: "absolute",
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
            {updatedItem.materials.map((type, index) => (
              <span key={index}> {type} /</span>
            ))}
          </Typography>
          <Typography
            variant="subtitle1"
            fontSize="1rem"
            fontFamily="poppins"
            sx={{ color: "#969696", mb: 1 }}>
            {updatedItem.info}
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
                  ? selectedSize.price_after_discount
                  : selectedSize.price}{" "}
                kwd
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
                {selectedSize.price} kwd
              </Typography>
            )}
          </Box>
          <Box sx={{ mb: 1 }}>
            {updatedItem &&
              updatedItem.colors &&
              updatedItem.colors.length !== 0 && (
                <>
                  <Typography sx={{ mb: 1 }}>Color</Typography>
                  <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                    {updatedItem.colors.map((color, index) => (
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
                            color?.images[0] || updatedItem.image_cover
                          );
                          setSelectedSize(color?.sizes[0]);
                          setCounter(1);
                        }}></Typography>
                    ))}
                  </Box>
                </>
              )}
            {updatedItem &&
              updatedItem.colors &&
              updatedItem.colors.length !== 0 && (
                <>
                  <Typography sx={{ mb: 1 }}>Size</Typography>
                  <Grid
                    container
                    sx={{
                      display: "flex",
                      gap: 2,
                      mb: 2,
                    }}>
                    {updatedItem.colors
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
          <Typography sx={{ mb: 2 }}>Quantity</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid lightgrey",
              width: { xs: "70%", lg: "33%" },
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
              width: { xs: "100%", md: "70%" },
              display: "flex",
              gap: "30px",
            }}>
            <GradiantButton
              name="Update Details"
              sx={{ flexBasis: "80%" }}
              onClick={() =>
                handleShow({
                  ...updatedItem,
                  selectedColor,
                  selectedSize,
                  counter,
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
    </Box>
  );
}

export default UpdateFromCart;
