import { Box, Divider, Grid, Typography } from "@mui/material";
import ShoppingCartList from "./ShoppingCartList";
import ShoppingCartInput from "./ShoppingCartInput";
import GradiantButton from "../../../../../core/GradiantButton";
import { Link } from "react-router-dom";
function ShoppingCartItems() {
  return (
    <>
      <Grid
        container
        spacing={2}
        gap="20px"
        sx={{ justifyContent: "space-between", alignItems: "flex-start",'& > .MuiGrid-item': { paddingLeft: 0 },pl:{xs:"30px"},pr:{xs:"14px"}, }}
        px={{ sm: 4, md: 6, lg: 10 }}
        >
    <Grid item xs={12} 
  lg={7} 
  md={7} 
>
  <ShoppingCartList />
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
          <Typography sx={{ mb: 4, fontSize: "18px" }}>SUMMARY</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              px: 2,
            }}>
            <ShoppingCartInput title="Total Items" action="items" />
            <ShoppingCartInput title="Subtotal" action="subTotal" />
            <ShoppingCartInput title="Discount" action="discount" />
            <Divider sx={{ borderStyle: "dashed" }} />
            <ShoppingCartInput title="Total Amount" action="total" />
            <Link to="/checkout">
              <GradiantButton name="Checkout" />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
export default ShoppingCartItems;
