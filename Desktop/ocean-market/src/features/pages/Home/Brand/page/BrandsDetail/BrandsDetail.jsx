import { Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";
import HeaderBrand from "./HeaderBrand";
import Product from "../../../../../../components/Home/Product";
import HomeContainer from "../../../../../../components/Home/HomeContainer";
import { useEffect, useState } from "react";
import { getProductsApi } from "../../api/getProductsApi";
import Footer from "../../../Footer/Page/Footer";
import { useTranslation } from "react-i18next";
import { brandsAsync } from "../../state/brandsAsync";
function BrandsDetail() {
  useEffect(() => {
    dispatch(brandsAsync());
  }, []);
  const { id } = useParams();
  const cleanId = id.substring(1);
  let brand = useSelector((state) => state.brandsReducer.brands);
  brand =
    brand.length !== 0 ? brand.filter((bran) => bran._id === cleanId) : "";
  const [products, setProducts] = useState([]);
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.brandsReducer.loading);
  const language = i18n.language;
  return loading ? (
    "Loading"
  ) : (
    <Box>
      <Navbar />
      <Box>
        <HeaderBrand
          brandImage={brand[0]?.imageCover}
          brandLogo={brand[0]?.imageLogo}
          information={brand[0]?.info}
          brandName={brand[0]?.name}
        />
        <HomeContainer>
          <Grid
            container
            spacing={2}
            sx={{
              mt: 4,
              marginLeft: { xs: "10px", sm: "0" },
              marginRight: { xs: "18px", sm: "0" },
            }}>
            {products.length !== 0
              ? products.map((product) => (
                  <Grid
                    key={product._id}
                    item
                    lg={2.4}
                    xs={6}
                    sm={4}
                    md={3}
                    sx={{ height: { xs: "250px", sm: "320px", md: "450px" } }}>
                    <Link
                      to={`/product-detail/:${product._id}`}
                      style={{ textDecoration: "none" }}>
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
                        code={
                          language === "ar" ? product.code_ar : product.code_en
                        }
                      />
                    </Link>
                  </Grid>
                ))
              : ""}
          </Grid>
        </HomeContainer>
      </Box>
      <Footer />
    </Box>
  );
}
export default BrandsDetail;
