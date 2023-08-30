import { Box, Typography } from "@mui/material";
import logo from "../assets/images/Logo.svg";
import Lottie from "lottie-react";
import load from "../assets/images/progress-bar.json";
function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
        justifyContent: "center",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <img src={logo} alt="" width="200px" />
      <Typography sx={{ fontWeight: "bold" }}>
        Loading... Please Wait
      </Typography>
      <Lottie animationData={load} loop={true} />
    </Box>
  );
}
export default Loading;
