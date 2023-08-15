import { Box, Typography } from "@mui/material";
import terms from "../../../../../assets/images/TermsandCondition.png";
import { useTranslation } from "react-i18next";

function TermsAndConditionHeader() {
  const {t}=useTranslation()
  return (
    <Box sx={{ margin: "20px 0" }}>
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "24px", marginBottom: "10px " }}>
          {t("terms.name")}
        </Typography>
        <Typography sx={{ marginBottom: "15px " }}>
        {t("terms.title")}
        </Typography>
        <img src={terms} style={{ width: "15%", margin: "10px 0" }} />
      </Box>
    </Box>
  );
}
export default TermsAndConditionHeader;
