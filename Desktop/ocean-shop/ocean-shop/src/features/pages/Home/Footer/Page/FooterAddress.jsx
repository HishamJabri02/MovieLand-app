import { Box, Typography } from "@mui/material";
import Logo from "../../../../../assets/images/Logo.svg";
import "../../../../../assets/font/font.css";
function FooterAddress() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", alignItems: "flex-end", gap: "15px", mb: 2 }}>
        <img src={Logo} width="50px" />
        <Typography
          sx={{ fontFamily: "Lucida Bright !important", fontSize: "22px" }}>
          Ocean Market
        </Typography>
      </Box>
      <Typography sx={{ textAlign: "start" }}>
        Get The Best Online Shopping Experience With Ocean Market. We Sell
        Products Of All Categories. Easy And Fast Delivery. Best Offers.
      </Typography>
    </Box>
  );
}
export default FooterAddress;
