import Navbar from "../../Navbar/Navbar";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartItems from "./ShoppingCartItems";
import EmptyFeature from "../../../../../core/EmptyFeature";
import Empty from "../../../../../assets/images/Empty.svg";
import Footer from "../../Footer/Page/Footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { ShoppingCartAsync } from "../state/ShoppingCartAsync";
import GradiantCirculeLoading from "../../../../../core/GradiantCirculeLoading";
function ShoppingCart() {
  const { t } = useTranslation();
  const loading = useSelector((state) => state.ShoppingCartReducer.loading);
  const details = useSelector((state) => state.ShoppingCartReducer.details);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ShoppingCartAsync());
  }, []);
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
          gap: { xs: 5, sm: 10 },
        }}>
        <Typography
          sx={{
            fontFamily: "Lucida Bright !important",
            fontSize: "25px",
            fontWeight: "bold",
          }}>
          {t("home.titles.cart")}
        </Typography>
        {loading ? (
          <Box sx={{ position: "relative", height: "400px" }}>
            <GradiantCirculeLoading />
          </Box>
        ) : details && details.items && details.items.length === 0 ? (
          <EmptyFeature
            img={Empty}
            problem={t("home.errors.cart.title")}
            explain={t("home.errors.cart.subTitle")}
            linkName={t("buttons.go")}
            to="/all-products"
          />
        ) : (
          <ShoppingCartItems details={details} />
        )}
        <Footer />
      </Box>
    </>
  );
}
export default ShoppingCart;
