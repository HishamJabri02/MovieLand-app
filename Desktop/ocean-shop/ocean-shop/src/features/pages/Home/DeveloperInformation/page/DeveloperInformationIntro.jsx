import { Box, Typography } from "@mui/material";
function DeveloperInformationIntro() {
  return (
    <Box sx={{ margin: "20px 0" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          margin: "10px",
          padding: "10px",
          textAlign: "center",
        }}>
        <Typography
          sx={{ fontWeight: "bold", fontsize: "20px", marginBottom: "10px" }}>
          What We Do For You:
        </Typography>
        <Typography sx={{ lineHieght: "1.8", color: "#777" }}>
          Launched From Kuwait, Producing The Best Specialized Software In The
          Middle East, Taking The Advantage Of Frequent Following Up To The
          World Latest Technology,
          <br />
          Thanks To Confidence Given By Our Customers Since 2001Custom Solutions
          Development, Native Mobile Apps Development For IOS And Android <br />
          Platforms, Access Control Systems, Installation E-Commerce
          <br />
          Systems Design, Development And Implementation.
        </Typography>
      </Box>
    </Box>
  );
}

export default DeveloperInformationIntro;
