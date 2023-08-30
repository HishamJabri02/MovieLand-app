/* eslint-disable react/prop-types */
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import HomeContainer from "../../../../../../components/Home/HomeContainer";
import { useEffect, useState } from "react";
import { subCategoriesProducts } from "../../api/subCategoriesProducts";
import Product from "../../../../../../components/Home/Product";
import GradiantCirculeLoading from "../../../../../../core/GradiantCirculeLoading";
import NotFound from "../../../../../../core/NotFound";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function SubCategoriesItems({ categories }) {
  const { i18n } = useTranslation();
  const language = i18n.language;
  const [activeItemId, setActiveItemId] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchProducts = async (id) => {
    const items = await subCategoriesProducts(id);
    setProducts(items.data);
    setLoading(false);
  };
  const handleItemClick = async (id) => {
    setActiveItemId(id);
    setProducts([]);
    setLoading(true);
    const items = await subCategoriesProducts(id);
    setProducts(items.data);
    setLoading(false);
  };
  useEffect(() => {
    if (categories && categories.length > 0) {
      setActiveItemId(categories[0]._id);
      fetchProducts(categories[0]._id);
    }
  }, [categories]);
  return (
    <HomeContainer>
      <List
        sx={{
          position: "relative",
          display: "flex",
          mt: 4,
          height: { xs: "5vh", sm: "6vh" },
          p: 0,
          px: { xs: 1, md: 0 },
          overflowX: "scroll",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {categories.map((item) => (
          <ListItem
            disablePadding
            sx={{
              mr: 2,
              border: "2px solid",
              borderImage:
                activeItemId === item._id
                  ? "linear-gradient(to left, #4BE1EC 0%, #9931D6 50%, #DC136E 100%) 1"
                  : "none",
              borderColor:
                activeItemId === item._id ? "transparent" : "lightgrey",
              display: "flex",
              width: "100%",
              height: "100%",
            }}
            key={item._id}
            onClick={() => handleItemClick(item._id)}
          >
            <ListItemButton sx={{ p: 0, height: "100%" }}>
              <ListItemText
                primary={language === "ar" ? item.name_ar : item.name}
                sx={{
                  ".css-10hburv-MuiTypography-root": {
                    fontSize: { xs: "13px", sm: "1rem" },
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    px: "10px",
                  },
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  px: "10px",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Grid
        container
        spacing={2}
        sx={{
          mt: 4,
          marginLeft: { xs: "10px", sm: "0" },
          marginRight: { xs: "18px", sm: "0" },
          justifyContent: products.length === 0 ? "center" : "",
        }}
      >
        {loading ? (
          <Box sx={{ height: "200px", position: "relative" }}>
            <GradiantCirculeLoading />
          </Box>
        ) : products.length !== 0 ? (
          products.map((product) => (
            <Grid
              key={product._id}
              item
              lg={2.4}
              xs={6}
              sm={4}
              md={3}
              sx={{ height: { xs: "250px", sm: "320px", md: "450px" } }}
            >
              <Link
                to={`/product-detail/:${product._id}`}
                style={{ textDecoration: "none" }}
              >
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
                  code={language === "ar" ? product.code_ar : product.code_en}
                />
              </Link>
            </Grid>
          ))
        ) : (
          <NotFound
            reason="No Results Found"
            explain="No Data, Please Try Again Later "
          />
        )}
      </Grid>
    </HomeContainer>
  );
}

export default SubCategoriesItems;
