import { Box, Typography } from "@mui/material";
function AboutUsHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        pt: 4,
      }}>
      <Typography
        sx={{ fontWeight: "bold", fontSize: "24px", marginBottom: "10px " }}>
        About Us
      </Typography>
      <Typography sx={{ marginBottom: "15px ",textAlign:"center" }}>
        Premium Quality And Reasonable Prices
      </Typography>
    </Box>
  );
}
export default AboutUsHeader;
