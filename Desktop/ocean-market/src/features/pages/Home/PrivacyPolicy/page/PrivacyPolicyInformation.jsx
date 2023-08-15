/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import arrayinfo from "../data/PrivacyPolicyDetails";
import { useTranslation } from "react-i18next";
function PrivacyPolicyInformation() {
  const {t,i18n}=useTranslation()
  const language = i18n.language;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        direction:language==="ar"?"rtl":"ltr"
      }}>
      {arrayinfo.map((item) => (
        <Box key={item.id} sx={{ width: "70%", marginBottom: "10px" }}>
          <h5 style={{ marginBottom: "10px" }}>
            {item.id}. {t(`privacy.conditions.${item.number}.${item.title}`)}
          </h5>
          <Typography
            sx={{ marginBottom: "10px", lineHeight: "1.8", fontWeight: "400" }}>
            {t(`privacy.conditions.${item.number}.${item.subTitle}`)}
          </Typography>
        </Box>
      ))}
      <Box sx={{ width: { xs: "100%", sm: "60%" }, textAlign: "center",px:2 }}>
        {t("privacy.finally")}
      </Box>
    </div>
  );
}
export default PrivacyPolicyInformation;
