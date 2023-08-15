import { Box, Typography } from "@mui/material";
import Logo from "../../../../../assets/images/Logo.svg";
import "../../../../../assets/font/font.css";
import { useTranslation } from "react-i18next";
function FooterAddress() {
  const {t}=useTranslation()
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", alignItems: "flex-end", gap: "15px", mb: 2 }}>
        <img src={Logo} width="30px" />
        <Typography
          sx={{ fontFamily: "Lucida Bright !important", fontSize: {xs:"18px",sm:"22px" },fontWeight:"bold"}}>
          Ocean Market
        </Typography>
      </Box>
      <Typography sx={{ textAlign: "start",fontSize:{xs:"12px",sm:"16px"} }}>
        {t("footer.title")}
      </Typography>
    </Box>
  );
}
export default FooterAddress;
