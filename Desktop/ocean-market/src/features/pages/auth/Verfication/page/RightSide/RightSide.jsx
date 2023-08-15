import { Grid } from "@mui/material";
import verificationPhoto from "../../../../../../assets/images/Verification.png";
const RightSide = () => {
  return (
    <Grid
      item
      sm={0}
      md={6}
      lg={7}
      sx={{ height: "99.5vh", display: { xs: "none", md: "flex" } }}>
      <img
        src={verificationPhoto}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Grid>
  );
};
export default RightSide;
