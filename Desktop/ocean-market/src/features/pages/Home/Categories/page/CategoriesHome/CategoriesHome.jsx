import { useEffect } from "react";
import { categoriesAsync } from "../../state/categoriesAsync";
import { useDispatch, useSelector } from "react-redux";
import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import HomeContainer from "../../../../../../components/Home/HomeContainer";
import "./CategoriesHome.css";
import { Link } from "react-router-dom";
import HeaderFeature from "../../../../../../components/Home/HeaderFeature";
import { uploadImage } from "../../../../../../core/uploadImage";
import GradiantCirculeLoading from "../../../../../../core/GradiantCirculeLoading";
import { useTranslation } from "react-i18next";
const CategoriesHome = () => {
  const {i18n,t } = useTranslation();
  const language = i18n.language;
  const dispatch = useDispatch();
  let categories = useSelector((state) => state.categoriesReducer.categories);
  if (categories.length > 0) {
    categories = categories.slice(0, 8);
  }
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
      size: "16/9",
    },
    {
      row: 1,
      col: 2,
      mdRow: 1,
      mdCol: 3,
      size: "16/9",
    },
  ];
  return (
    <HomeContainer sx={{ justifyContent: "center" }}>
      <HeaderFeature
        title={t("home.titles.categories")}
        explain={t("home.subTitle.categories")}
        link="/all-categories"
        linkName={t("home.links.all")}
        sx={{
          left: language === "ar" ? "40px" : "unset",
          right: language === "ar" ? "unset" : "40px",
        }}
      />
      {categories && categories.length > 0 ? (
        <ImageList
          sx={{
            mb: 2,
            height: { xl: "365px", lg: "290px", md: "50vh", xs: "285px" },
            overflow: "hidden",
            justifyContent: "center",
            gridTemplateColumns: {
              xs: "repeat(4 , max-content)!important",
              sm: "repeat(6, max-content )!important",
              lg: "repeat(8, max-content) !important",
            },
          }}
          variant="quilted"
          gap={10}>
          {categories.map((item, index) => (
            <ImageListItem
              sx={{
                width: "100%",
                overflow: "hidden",
                aspectRatio: {
                  xs: `${sizeImages[index].size}`,
                  sm: `${
                    sizeImages[index].mdSize
                      ? sizeImages[index].mdSize
                      : sizeImages[index].size
                  }`,
                  lg: `${sizeImages[index].size}`,
                },
                height: "100% !important",
                borderRadius: 2,
                gridColumn: {
                  xs: `span ${
                    sizeImages[index].smCol
                      ? sizeImages[index].smCol
                      : sizeImages[index].col
                  } !important`,
                  sm: `span ${
                    sizeImages[index].mdCol
                      ? sizeImages[index].mdCol
                      : sizeImages[index].col
                  } !important`,
                  lg: `span ${sizeImages[index].col} !important`,
                },
                gridRow: {
                  xs: `span ${
                    sizeImages[index].smRow
                      ? sizeImages[index].smRow
                      : sizeImages[index].row
                  } !important`,
                  sm: `span ${
                    sizeImages[index].mdRow
                      ? sizeImages[index].mdRow
                      : sizeImages[index].row
                  } !important`,
                  lg: `span ${sizeImages[index].row} !important`,
                },
              }}
              key={index}>
              <Link
                to={`/subCategories/:${item._id}`}
                style={{ textDecoration: "none" }}>
                <div className="image-wrapper">
                  <img
                    className="image"
                    src={uploadImage(item.photo_url)}
                    alt={item.name}
                  />
                  <div className="overlay" />
                  <ImageListItemBar
                    title={language === "ar" ? item.name_ar : item.name}
                    sx={{
                      height: "100%",
                      textAlign: "center",
                      backgroundColor: "transparent",
                      "& .css-1lizpae-MuiImageListItemBar-titleWrap": {
                        padding: "0",
                      },
                      ".css-dasnyc-MuiImageListItemBar-title": {
                        fontSize: { xs: "10px", sm: "1rem" },
                        fontWeight: "600",
                      },
                      ".css-1no2hqi": {
                        padding: "0",
                      },
                    }}
                  />
                </div>
              </Link>
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <Box sx={{ height: "200px", position: "relative", width: "100%" }}>
          <GradiantCirculeLoading />
        </Box>
      )}
    </HomeContainer>
  );
};
export default CategoriesHome;