import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
function AboutUsHeader() {
  const {t}=useTranslation()
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        pt: 4,
      }}>
      <Typography
        sx={{ fontWeight: "bold", fontSize: "24px", marginBottom: "10px " }}>
        {t("about.name")}
      </Typography>
      <Typography sx={{ marginBottom: "15px ",textAlign:"center" }}>
      {t("about.title")}
      </Typography>
    </Box>
  );
}
export default AboutUsHeader;
