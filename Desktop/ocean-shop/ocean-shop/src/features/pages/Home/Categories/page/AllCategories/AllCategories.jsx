import { useEffect } from "react";
import { categoriesAsync } from "../../state/categoriesAsync";
import { useDispatch, useSelector } from "react-redux";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import HomeContainer from "../../../../../../components/Home/HomeContainer";
import "./AllCategories.css";
import Navbar from "../../../Navbar/Navbar";
import { Link } from "react-router-dom";
import { uploadImage } from "../../../../../../core/uploadImage";
import Footer from "../../../Footer/Page/Footer";
import GradiantCirculeLoading from "../../../../../../core/GradiantCirculeLoading";
const AllCategories = () => {
  const dispatch = useDispatch();
  let categories = useSelector((state) => state.categoriesReducer.categories);
  useEffect(() => {
    dispatch(categoriesAsync());
  }, [dispatch]);

  let sizeImages = [
    {
      row: 1,
      col: 1,
      size: "1/1",
    },
    {
      row: 1,
      col: 2,
      size: "16/9",
    },
    {
      row: 2,
      col: 1,
      size: "9/16",
    },
    {
      row: 2,
      col: 2,
      smRow: 1,
      smCol: 1,
      size: "1/1",
    },
    {
      row: 1,
      col: 2,
      mdRow: 1,
      mdCol: 1,
      size: "16/9",
      mdSize: "1/1",
    },
    {
      row: 1,
      col: 1,
      mdRow: 1,
      mdCol: 2,
      smRow: 2,
      smCol: 2,
      size: "1/1",
      mdSize: "16/9",
    },
    {
      row: 1,
      col: 2,
      mdRow: 1,
      mdCol: 3,
    },
    {
      row: 1,
      col: 2,
      mdRow: 1,
      mdCol: 3,
    },
  ];
  return (
    <>
      <Navbar />
      <HomeContainer sx={{ justifyContent: "center" }}>
        {categories && categories.length > 0 ? (
          <ImageList
            sx={{
              my: "40px",
              height: {
                xl: "75vh",
                lg: "70vh",
                md: "80vh",
                sm: "65vh",
                xs: "67vh",
              },
              justifyContent: "center",
              gridTemplateColumns: {
                xs: "repeat(4 , max-content)!important",
                sm: "repeat(6, max-content )!important",
                lg: "repeat(8, max-content) !important",
              },
            }}
            variant="quilted"
            gap={10}>
            {categories.map((item, index) => {
              let sizeImageIndex = index % sizeImages.length;
              let sizeImage = sizeImages[sizeImageIndex];
              return (
                <ImageListItem
                  sx={{
                    width: "100%",
                    overflow: "hidden",
                    aspectRatio: {
                      xs: `${sizeImage.size}`,
                      sm: `${
                        sizeImage.mdSize ? sizeImage.mdSize : sizeImage.size
                      }`,
                      lg: `${sizeImage.size}`,
                    },
                    height: "100% !important",
                    borderRadius: 2,
                    gridColumnEnd: {
                      xs: `span ${
                        sizeImage.smCol ? sizeImage.smCol : sizeImage.col
                      } !important`,
                      sm: `span ${
                        sizeImage.mdCol ? sizeImage.mdCol : sizeImage.col
                      } !important`,
                      lg: `span ${sizeImage.col} !important`,
                    },
                    gridRowEnd: {
                      xs: `span ${
                        sizeImage.smRow ? sizeImage.smRow : sizeImage.row
                      } !important`,
                      sm: `span ${
                        sizeImage.mdRow ? sizeImage.mdRow : sizeImage.row
                      } !important`,
                      lg: `span ${sizeImage.row} !important`,
                    },
                  }}
                  key={index}>
                  <Link to={`/subCategories/:${item._id}`}>
                    <div className="image-wrapper">
                      <img
                        className="image"
                        src={uploadImage(item.photo_url)}
                        alt={item.name}
                        loading="lazy"
                      />
                      <div className="overlay" />
                      <ImageListItemBar
                        title={item.name}
                        sx={{
                          height: "100%",
                          textAlign: "center",
                          backgroundColor: "transparent",
                          "& .css-1lizpae-MuiImageListItemBar-titleWrap": {
                            padding: "0",
                          },
                          ".css-dasnyc-MuiImageListItemBar-title": {
                            fontSize: { xs: "10px", sm: "1rem" },
                          },
                        }}
                      />
                    </div>
                  </Link>
                </ImageListItem>
              );
            })}
          </ImageList>
        ) : (
          <GradiantCirculeLoading/>
        )}
      </HomeContainer>
      <Footer />
    </>
  );
};
export default AllCategories;
