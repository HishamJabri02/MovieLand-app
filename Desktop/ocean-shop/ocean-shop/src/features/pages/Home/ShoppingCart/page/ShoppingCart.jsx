import Navbar from "../../Navbar/Navbar";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ShoppingCartItems from "./ShoppingCartItems";
import EmptyFeature from "../../../../../core/EmptyFeature";
import Empty from "../../../../../assets/images/Empty.svg";
import Footer from "../../Footer/Page/Footer";
function ShoppingCart() {
  const details = useSelector((state) => state.ShoppingCartReducer.details);
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
          gap: {xs:5,sm:10},
        }}>
        <Typography
          sx={{
            fontFamily: "Lucida Bright !important",
            fontSize: "25px",
            fontWeight: "bold",
          }}>
          My Shopping Cart
        </Typography>
        {details && details.length === 0 ? (
          <EmptyFeature
            img={Empty}
            problem="Your Cart Is Empty"
            explain="Looks Like You Have Not Added Anything To Your Cart
Go A Head & Explore Top Categories"
            linkName="Go To Shopping"
            to="/all-categories"
          />
        ) : (
          <ShoppingCartItems />
        )}
      </Box>
      <Footer />
    </>
  );
}
export default ShoppingCart;
