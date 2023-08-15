import { Box, Typography } from "@mui/material";
import privacy from "../../../../../assets/images/Privacy-policy.png";
import { useTranslation } from "react-i18next";
function PrivacyPolicyHeader() {
  const {t}=useTranslation()
  return (
    <Box sx={{ margin: "20px 0" }}>
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "24px",
            marginBottom: "10px ",
            mt: 2,
          }}>
          {t("privacy.name")}
        </Typography>
        <Typography
          sx={{ marginBottom: "15px", textAlign: "center", width: "60%" }}>
          {t("privacy.title")}
        </Typography>
        <img src={privacy} style={{ width: "160px", margin: "10px 0" }} />
      </Box>
    </Box>
  );
}
export default PrivacyPolicyHeader;
