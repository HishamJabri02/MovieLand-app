/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../../assets/font/font.css";
function HeaderFeature({ title, explain, link, linkName, sx, sxBox }) {
  return (
    <Box
      sx={{
        width: "100%",
        gap: 2,
        display: "flex",
        flexDirection: "column",
        mt: 4,
        mb: 3,
        alignItems: "center",
        ...sxBox,
      }}>
      <Typography
        sx={{
          fontFamily: "Lucida Bright !important",
          fontSize: { xs: "20px", sm: "24px" },
          fontWeight: "bold",
          textAlign: "center",
        }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          position: "relative",
          flexDirection: { xs: "column", sm: "unset" },
        }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography sx={{ textAlign: "center" }}>{explain}</Typography>
        </Box>
        <Link
          to={link}
          style={{
            textDecoration: "none",
            textAlign: "center",
            position: window.innerWidth > 600 ? "absolute" : "unset",
            ...sx,
          }}>
          {linkName}
        </Link>
      </Box>
    </Box>
  );
}
export default HeaderFeature;
