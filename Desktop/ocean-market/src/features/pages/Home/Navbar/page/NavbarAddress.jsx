import { Box, Typography } from "@mui/material";
import Logo from "../../../../../assets/images/Logo.svg";
import "../../../../../assets/font/font.css";
const NavbarAddress = () => {
  return (
    <Box
      sx={{
        mr:1,
        alignItems: "center",
        gap: 2,
        display: "flex",
        flexBasis: { xs: "56%", sm: "31%", md: "21%", lg: "17%" },
      }}>
      <img src={Logo} alt="" width="25px" />
      <Typography
        variant="h6"
        sx={{
          mt: 1.2,
          fontSize: { xs: "14px", sm: "1.25rem" },
          fontWeight: { xs: "300", sm: "bold" },
          fontFamily: "Lucida Bright !important",
        }}>
        Ocean Market
      </Typography>
    </Box>
  );
};

export default NavbarAddress;
