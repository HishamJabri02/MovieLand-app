import { Box, Divider, Grid, Typography } from "@mui/material";
import ShoppingCartList from "./ShoppingCartList";
import ShoppingCartInput from "./ShoppingCartInput";
import GradiantButton from "../../../../../core/GradiantButton";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function ShoppingCartItems({details}) {
  const {t , i18n}=useTranslation()
  const language = i18n.language
  return (
    <>
      <Grid
        container
        spacing={2}
        gap="20px"
        sx={{ justifyContent: "space-between", alignItems: "flex-start",'& > .MuiGrid-item': { paddingLeft: 0 },pl:{xs:"30px"},pr:{xs:"14px"},
        direction:language==="ar"?"rtl":"ltr"}}
        px={{ sm: 4, md: 6, lg: 10 }}
        >
    <Grid item xs={12} lg={7} md={7} >
    <ShoppingCartList details={details} />
    </Grid>
        <Grid
          item
          md={4}
          lg={3}
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            border: "1px solid #B5B5B5",
            position: "sticky",
            top: "0",
            width: { xs: "100%" },
            textAlign: "center",
          }}>
          <Typography sx={{ mb: 4, fontSize: "18px",fontWeight:"bold"}}>{t("home.product.summary")}</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              px: 2,
            }}>
            <ShoppingCartInput title={t("home.product.items")} value={details?.quantity} action="items" details={details}/>
            <ShoppingCartInput title={t("home.product.subTotal")} value={details?.total_price?.toFixed(2)} details={details} />
            <ShoppingCartInput title={t("home.product.discount")} value={details?.discount?.toFixed(2) || 0} details={details} />
            <Divider sx={{ borderStyle: "dashed" }} />
            <ShoppingCartInput title={t("home.product.total")} value={details?.total_price_after_discount?.toFixed(2) ||details?.total_price?.toFixed(2) } details={details}/>
            <Link to="/checkout" style={{textDecoration:"none"}}>
              <GradiantButton name={t("buttons.checkout")} />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
export default ShoppingCartItems;
