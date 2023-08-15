import { Typography } from "@mui/material";
import Navbar from "../../Navbar/Navbar";
import CheckOutForm from "./CheckOutForm";
import Footer from "../../Footer/Page/Footer";
function CheckOut() {
  return (
    <>
      <Navbar />
      <Typography
        sx={{
          fontFamily: "Lucida Bright !important",
          fontSize: "25px",
          fontWeight: "bold",
          p: 3,
          textAlign: "center",
        }}>
        Checkout
      </Typography>
      <CheckOutForm />
      <Footer />
    </>
  );
}

export default CheckOut;
