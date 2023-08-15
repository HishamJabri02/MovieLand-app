/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
const GridContainer = ({ children,sx }) => {
  return (
    <Grid
      container
      sx={{ minHeight: "100dvh", overflow: "hidden", position: "relative",...sx }}>
      {children}
    </Grid>
  );
};

export default GridContainer;
