import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
function DeveloperInformationIntro() {
  const {t}=useTranslation()
  return (
    <Box sx={{ margin: "20px 0" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          margin: "10px",
          padding: "10px",
          textAlign: "center",
        }}>
        <Typography
          sx={{ fontWeight: "bold", fontsize: "20px", marginBottom: "10px" }}>
          {t("developer.question")}
        </Typography>
        <Typography sx={{ lineHieght: "1.8", color: "#777",width:{lg:"60%",md:"70%",xs:"100%"} }}>
        {t("developer.explain")}
        </Typography>
      </Box>
    </Box>
  );
}

export default DeveloperInformationIntro;
