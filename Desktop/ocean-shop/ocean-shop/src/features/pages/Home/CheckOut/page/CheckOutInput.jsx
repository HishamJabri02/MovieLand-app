/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function CheckOutInput({ title, action }) {
  const details = useSelector((state) => state.ShoppingCartReducer.details);
  const [value, setValue] = useState(0);
  useEffect(() => {
    switch (action) {
      case "items":
        setValue(details.reduce((acc, item) => acc + item.counter, 0));
        break;
      case "subTotal":
        setValue(
          details
            .reduce((acc, item) => acc + item.selectedSize.price, 0)
            .toFixed(2)
        );
        break;
      case "discount":
        setValue(
          details
            .reduce(
              (acc, item) =>
                item.selectedSize.price_after_discount
                  ? acc +
                    item.selectedSize.price -
                    item.selectedSize.price_after_discount
                  : acc,
              0
            )
            .toFixed(2)
        );
        break;
      case "total":
        setValue(
          details.reduce(
            (acc, item) =>
              item.selectedSize.price_after_discount
                ? acc + item.selectedSize.price_after_discount * item.counter
                : acc + item.selectedSize.price * item.counter,
            0
          )
        );
        break;
      default:
        setValue(0);
        break;
    }
  }, [details, action]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      {title && <Typography>{title}</Typography>}
      <Typography sx={{ fontSize: { xs: "12px", sm: "1rem" } }}>
        {value} {action === "items" ? "Items" : "KWD"}
      </Typography>
    </Box>
  );
}

export default CheckOutInput;
