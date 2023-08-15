/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import "../assets/font/font.css";
import GradiantButton from "../core/GradiantButton";
import { Link } from "react-router-dom";
function EmptyFeature({ img, problem, explain, linkName, to,handleOpen }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        alignItems: "center",
      }}>
      <img src={img} width="90px" />
      <Typography sx={{ fontSize: "1.2rem" }}>{problem}</Typography>
      <Typography
        sx={{
          width: "100%",
          color: "gray",
          fontSize: "14px",
          textAlign: "center",
        }}>
        {explain}
      </Typography>
      <Link >
        <GradiantButton name={linkName} sx={{ width: 220 }} onClick={handleOpen} />
      </Link>
    </Box>
  );
}

export default EmptyFeature;
