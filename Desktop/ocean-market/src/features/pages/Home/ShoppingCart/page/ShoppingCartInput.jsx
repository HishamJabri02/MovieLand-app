/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
function ShoppingCartInput({ title, value,action,details }) {
const {t,i18n}=useTranslation()
const langauge=i18n.language
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <Typography>{title}</Typography>
      <Typography>
        {value} {action === "items" ? t("home.product.item") : langauge==="ar"? details.code_ar : details.code_en}
      </Typography>
    </Box>
  );
}
export default ShoppingCartInput;
