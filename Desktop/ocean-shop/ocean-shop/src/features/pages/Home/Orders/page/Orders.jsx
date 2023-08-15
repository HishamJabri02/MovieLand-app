import { Box, Typography } from "@mui/material";
import EmptyFeature from "../../../../../core/EmptyFeature";
import notFound from "../../../../../assets/images/error.svg";
import Navbar from "../../Navbar/Navbar";
function Orders() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
          gap: 10,
        }}>
        <Typography
          sx={{
            fontFamily: "Lucida Bright !important",
            fontSize: "25px",
            fontWeight: "bold",
          }}>
          My Orders
        </Typography>
        <EmptyFeature
          img={notFound}
          problem="No Order Yet"
          explain="You Have No Order Now !"
          linkName="Go To Shopping"
          to="/all-categories"
        />
      </Box>
    </>
  );
}

export default Orders;
