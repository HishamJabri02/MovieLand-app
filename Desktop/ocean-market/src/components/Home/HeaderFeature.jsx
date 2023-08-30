/* eslint-disable react/prop-types */
import { Box, Typography, Link } from "@mui/material";
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
      }}
    >
      <Typography
        sx={{
          fontFamily: "Lucida Bright !important",
          fontSize: { xs: "20px", sm: "24px" },
          fontWeight: "bold",
          textAlign: "center",
          backgroundImage:
            "linear-gradient(to left, #4BE1EC 0%, #9931D6 50%, #DC136E 100%)",
          backgroundClip: "text",
          textFillColor: "transparent",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          position: "relative",
          flexDirection: { xs: "column", sm: "unset" },
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography sx={{ textAlign: "center" }}>{explain}</Typography>
        </Box>
        <Link
          href={link}
          sx={{
            textDecoration: "none",
            textAlign: "center",
            position: { xs: "unset", sm: "absolute" },
            ...sx,
          }}
        >
          {linkName}
        </Link>
      </Box>
    </Box>
  );
}
export default HeaderFeature;
