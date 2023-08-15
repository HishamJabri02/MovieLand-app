/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Product from "../../../../../../components/Home/Product";
import { Box, Grid } from "@mui/material";
import HomeContainer from "../../../../../../components/Home/HomeContainer";
import { allProductsApi } from "../../api/allProductsApi";
import GradiantCirculeLoading from "../../../../../../core/GradiantCirculeLoading";
import { Link } from "react-router-dom";
import Footer from "../../../Footer/Page/Footer";
import { useTranslation } from "react-i18next";
function ProductsList({ type }) {
  const { t,i18n } = useTranslation();
  const language =i18n.language
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setProducts([]);
        setLoading(true);
        const newProducts = await allProductsApi(type, 1);
        setProducts(newProducts.data.products);
        setPage(2);
        setHasMore(newProducts.data.products.length > 0);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [type]);

  const fetchMoreData = async () => {
    try {
      const newProducts = await allProductsApi(type, page);
      setProducts((prevProducts) => [
        ...prevProducts,
        ...newProducts.data.products,
      ]);
      setPage(page + 1);
      setHasMore(newProducts.data.products.length > 0);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
    {
loading &&
      <Box sx={{ height: "200px", position: "relative", width: "100%" }}>
          <GradiantCirculeLoading />
        </Box>
    }
      <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<Footer />}>
        <HomeContainer sx={{px:{xs:0,md:4}}}>
          <Grid
            container
            spacing={2}
            sx={{
              mt: 4,
              marginLeft:{xs:"1px",sm:"0"},
              marginRight: { xs: "18px", sm: "0" },
            }}>
            {products.map((product) => (
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
                    name_ar={product.name_ar}
                    code={language==="ar" ? product.code_ar : product.code_en }
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </HomeContainer>
        {error && <Box>{error}</Box>}
      </InfiniteScroll>
    </>
  );
}
export default ProductsList;
