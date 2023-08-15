/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
const GridItem = ({ sx, children, ...props }) => {
  return (
    <Grid
      item
      sx={{
        padding: "3% 5%",
        margin: "0",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        ...sx,
      }}
      {...props}>
      {children}
    </Grid>
  );
};

export default GridItem;
