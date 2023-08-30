import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../../../../core/uploadImage";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import GradiantCirculeLoading from "../../../../../core/GradiantCirculeLoading";
import { useTranslation } from "react-i18next";

function CheckOutItems({details}) {
  const loading = useSelector((state) => state.ShoppingCartReducer.loading);
  const {t,i18n}=useTranslation()
  const language=i18n.language
  return (
    <>
    {
      loading ? 
  <GradiantCirculeLoading/>
      :     
    <Box
      sx={{
        maxHeight: "348px",
        overflowY: "scroll",
        scrollbar: { visibility: "hidden" },
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}>
      
      {details && details.items && details.items.length!==0 &&
      details.items.map((item, index) => (
        <Box key={index} sx={{ display: "flex", mb: 2 }}>
          <Box
            sx={{
              height: { xs: "60px", sm: "100px" },
              aspectRatio: "1/1",
              marginRight: "16px",
            }}>
            <img
              src={uploadImage(
                item.color?.images[0] || item?.product_id?.image_cover
              )}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                mr: 1,
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "18px" },
                color: "#2B2B2B",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "pre",
              }}>
              {language==="ar" ? item.product_id.name_ar :item.product_name}
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Box sx={{ display: "flex", gap: 1 }}>
                <span style={{ fontSize: "12px" }}>{t("generall.color")}</span>
                <span
                  style={{
                    width: "15px",
                    height: "15px",
                    backgroundColor: item.color.color_hex,
                    borderRadius: "100%",
                    border: "1px solid #B5B5B5",
                  }}></span>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <span style={{ fontSize: "12px" }}>{t("generall.size")}</span>
                <span style={{ fontSize: "12px" }}>
                {item.size.name}
                </span>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <span style={{ fontSize: "12px" }}>{t("generall.counter")}</span>
                <span style={{ fontSize: "12px" }}>{details.quantity}</span>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
              {
                <Typography
                  sx={{
                    fontSize: { xs: "12px", sm: "18px" },
                    color: "blue",
                  }}>
                    {item.size.price_after_discount
                    ? item.size.price_after_discount.toFixed(2)
                    : item.size.price.toFixed(2)}{" "}
                  {language==="ar"? details.code_ar: details.code_en}
                </Typography>
              }
              {item.size.price_after_discount && (
                <Typography
                  sx={{
                    fontSize: { xs: "10px", sm: "14px" },
                    color: "#969696",
                    textDecoration: "line-through",
                  }}>
                  {item.size.price.toFixed(2)} {language==="ar"? details.code_ar: details.code_en}
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
   
  }
      </>
  );
}

export default CheckOutItems;
