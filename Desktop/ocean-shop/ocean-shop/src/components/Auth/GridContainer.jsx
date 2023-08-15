/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
const GridContainer = ({ children }) => {
  return (
    <Grid
      container
      sx={{ minHeight: "100dvh", overflow: "hidden", position: "relative" }}>
      {children}
    </Grid>
  );
};

export default GridContainer;
