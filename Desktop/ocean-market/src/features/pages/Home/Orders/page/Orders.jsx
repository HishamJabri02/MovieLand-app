import { Box, Typography } from "@mui/material";
import EmptyFeature from "../../../../../core/EmptyFeature";
import notFound from "../../../../../assets/images/error.svg";
import Navbar from "../../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMyOrdersAsync } from "../state/getMyOrdersAsync";
import OrdersTable from "./OrdersTable";
function Orders() {
  const details = useSelector((state) => state.getMyOrdersReducer.details);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyOrdersAsync());
  }, []);
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
      </Box>
      {details.length === 0 && !details ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 4,
            gap: 10,
          }}>
          <EmptyFeature
            img={notFound}
            problem="No Order Yet"
            explain="You Have No Order Now !"
            linkName="Go To Shopping"
            to="/all-categories"
          />
        </Box>
      ) : (
        <Box>
          <OrdersTable details={details} />
        </Box>
      )}
    </>
  );
}

export default Orders;
