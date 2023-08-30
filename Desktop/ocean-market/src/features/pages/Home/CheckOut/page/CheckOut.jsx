import { Box, Typography } from "@mui/material";
import Navbar from "../../Navbar/Navbar";
import CheckOutForm from "./CheckOutForm";
import Footer from "../../Footer/Page/Footer";
import sad from "../../../../../assets/images/Inside.svg";
import GradiantButton from "../../../../../core/GradiantButton";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function CheckOut() {
  const {t}=useTranslation()
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
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
        {t("generall.check")}
      </Typography>
      {token ? (
        <CheckOutForm />
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "10px",
            width: { lg: "40%", md: "50%", sm: "70%", xs: "100%" },
            margin: "auto",
            px: 4,
            height: "60vh",
          }}>
          <img src={sad} alt="" style={{ width: "100px" }} />
          <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
            You Are Not Signed in
          </Typography>
          <Typography sx={{ textAlign: "center",color:"gray" }}>
            Please Login Or Create An Account To Add Your Products To Your Favorite
          </Typography>
          <Link to="/login" style={{ width: "100%",textDecoration:"none" }}>
            <GradiantButton name="Login" />
          </Link>
        </Box>
      )}
      <Footer />
    </>
  );
}

export default CheckOut;
