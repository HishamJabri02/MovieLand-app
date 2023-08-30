import CheckOutInput from "./CheckOutInput";
import { Box, Divider, Grid, Typography } from "@mui/material";
import CheckOutItems from "./CheckOutItems";
import GradiantButton from "../../../../../core/GradiantButton";

function CheckOutOrder() {
  return (
    <Grid
      lg={4}
      sx={{
        borderRadius: "6px",
        position: "sticky",
        top: 0,
        mb: 2,
      }}>
      <Box sx={{ border: "1px solid #B5B5B5", p: 2 }}>
        <Typography sx={{ fontSize: "18px", fontWeight: "bold", py: 2 }}>
         {t("checkout.summary")}
        </Typography>
        <CheckOutItems />
        <Box
          sx={{ display: "flex", gap: "10px", flexDirection: "column", mb: 2 }}>
          <CheckOutInput title="Total Items" action="items" />
          <CheckOutInput title="Subtotal" action="subTotal" />
          <CheckOutInput title="Discount" action="discount" />
          <Divider sx={{ borderStyle: "dashed" }} />
          <CheckOutInput title="Total Amount" action="total" />
        </Box>
        <GradiantButton name="Buy now" />
      </Box>
    </Grid>
  );
}

export default CheckOutOrder;
