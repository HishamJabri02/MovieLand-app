import { useTranslation } from "react-i18next";
import developer from "../../../../../assets/images/developer.png";
import { Box, Typography } from "@mui/material";
function DeveloperInformationHeader() {
  const {t}=useTranslation()
  return (
    <Box sx={{ mt: "40px", mb: "20px" }}>
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "24px", marginBottom: "10px " }}>
         {t("developer.name")}
        </Typography>
        <Typography sx={{ marginBottom: "15px " }}>
         {t("developer.title")}
        </Typography>
        <img src={developer} style={{ width:window.innerWidth < 600 ? "45%":"15%" , margin: "10px 0" }} />
      </Box>
    </Box>
  );
}
export default DeveloperInformationHeader;
