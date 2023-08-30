/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import error from "../assets/images/error.svg";
function NotFound({ reason, explain }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
        gap: "10px",
        height: "400px",
      }}
    >
      <img src={error} alt="" width="80px" />
      <Typography>{reason}</Typography>
      <Typography sx={{ color: "lightgray", fontSize: "14px" }}>
        {explain}
      </Typography>
    </Box>
  );
}
export default NotFound;
