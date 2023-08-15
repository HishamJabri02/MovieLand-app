/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function CheckOutInput({ title, value, action }) {
  const details = useSelector((state) => state.ShoppingCartReducer.details);
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      {title && <Typography>{title}</Typography>}
      <Typography
        sx={{
          fontSize: { xs: "12px", sm: "1rem" },
          color: title === "Discount" ? "red" : "black",
        }}>
        {title === "Discount" ? "-" + value : value}{" "}
        {action === "items"
          ? t("home.product.item")
          : language === "ar"
          ? details.code_ar
          : details.code_en}
      </Typography>
    </Box>
  );
}

export default CheckOutInput;
