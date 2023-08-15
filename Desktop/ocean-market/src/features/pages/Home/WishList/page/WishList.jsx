import { Grid, Typography } from "@mui/material";
import favoritesImg from "../../../../../assets/images/favorites.svg";
import EmptyFeature from "../../../../../core/EmptyFeature";
import "../../../../../assets/font/font.css";
import Navbar from "../../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../../../../components/Home/Product";
import HomeContainer from "../../../../../components/Home/HomeContainer";
import GradiantCirculeLoading from "../../../../../core/GradiantCirculeLoading";
import { useEffect } from "react";
import { getAllFavoritesAsync } from "../state/getAllFavoritesAsync";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
function WishList() {
  const {t , i18n}=useTranslation()
  const language = i18n.language;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllFavoritesAsync());
  }, []);
  const favorites = useSelector((state) => state.getAllFavoritesReducer.likes);
  const loading = useSelector((state) => state.getAllFavoritesReducer.loading);
  return (
    <>
      <Navbar />
      <Typography
        sx={{
          mt: 4,
          textAlign: "center",
          fontFamily: "Lucida Bright !important",
          fontSize: "22px",
          fontWeight: "bold",
          mb: 2,
        }}>
        {t("home.titles.favorite")}
      </Typography>
      {loading ? (
        <GradiantCirculeLoading />
      ) : favorites.length == 0 ? (
        <EmptyFeature
          img={favoritesImg}
          problem={t("home.errors.fav.title")}
          explain={t("home.errors.fav.subTitle")}
          to="/all-products"
          linkName={t("buttons.shop")}
        />
      ) : (
        <HomeContainer>
          <Grid
            container
            spacing={2}
            sx={{
              mt: 4,
              marginLeft: { xs: "10px", sm: "0" },
              marginRight: { xs: "18px", sm: "0" },
            }}>
            {favorites.map((product) => (
              <Grid
                key={product.id}
                item
                lg={2.4}
                xs={6}
                sm={4}
                md={3}
                sx={{ height: { xs: "250px", sm: "320px", md: "450px" } }}>
                <Link
                to={`/product-detail/:${product._id}`}
                style={{
                  textDecoration: "none",
                  width: "100%",
                  height: "100%",
                }}>
                <Product
                  id={product._id}
                  name={product.name}
                  imageCover={product.image_cover}
                  rating={product.rating}
                  isNew={product.isNew}
                  isLike={product.isLiked}
                  listColors={product.colors}
                  isActive={product.isActive}
                  special={product.special}
                  fav={true}
                  name_ar={product.name_ar}
                  code={language==="ar" ? product.code_ar : product.code_en }
                  />
                  </Link>
              </Grid>
            ))}
          </Grid>
        </HomeContainer>
      )}
    </>
  );
}

export default WishList;
