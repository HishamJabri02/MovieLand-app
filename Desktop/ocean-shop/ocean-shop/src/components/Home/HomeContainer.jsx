/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
const HomeContainer = ({ children, sx }) => {
  return (
    <Grid container sx={{ px: { lg: 4, xs: 2 }, ...sx }}>
      {children}
    </Grid>
  );
};
export default HomeContainer;
