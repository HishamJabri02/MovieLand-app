import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";
import HeaderBrand from "./HeaderBrand";
import Product from "../../../../../../components/Home/Product";
import HomeContainer from "../../../../../../components/Home/HomeContainer";
import { useEffect, useState } from "react";
import { getProductsApi } from "../../api/getProductsApi";
import Footer from "../../../Footer/Page/Footer";
function BrandsDetail() {
  const { id } = useParams();
  const cleanId = id.substring(1);
  const brand = useSelector((state) =>
    state.brandsReducer.brands.filter((brand) => brand._id === cleanId)
  );
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await getProductsApi(cleanId);
        setProducts(products);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [cleanId]);
  return (
    <Box>
      <Navbar />
      <Box>
        <HeaderBrand
          brandImage={brand[0].imageCover}
          brandLogo={brand[0].imageLogo}
          information={brand[0].info}
          brandName={brand[0].name}
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
                    />
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
