/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./AboutUsDetails.css";
import AboutUsInformation from "../data/AboutUsInformation";
import img from "../../../../../assets/images/thanks.png";
import "../../../../../assets/font/font.css";
function AboutUsDetails() {
  return (
    <Box
      sx={{
        marginTop: "25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}>
      {AboutUsInformation.map((item) => (
        <Box
          key={item.id}
          sx={{
            width:"80%",
            display: "flex",
            alignItems: "center",
          flexDirection:{xs:"column-reverse", md:item.imageIsLeft ? "row-reverse" : "row"},
            position: "relative",
            pb:{xs:4,md:0}
          }}>
          <Box
            sx={{
              background: "#fff",
              borderRadius: "2px",
              boxShadow: "0px 0px 10px #EEE",
              textAlign: "center",
              padding: {md:0,lg:4},
              width: {xs:"100%",md:"40%"},
            }}
            className={item.imageIsLeft ? "text left" : "text right"}>
            <Typography
              sx={{
                fontFamily: "Lucida Bright !important",
                fontWeight: "bold",
                pt: "10px",
                fontSize: {xs:"16px",md:"20px"},
              }}>
              {item.head}
            </Typography>
            <Typography
              sx={{ lineHeight: "1.8", padding: "10px", fontSize: {xs:"12px",md:"14px"} }}>
              {item.explain}
            </Typography>
          </Box>
          <Box sx={{flexBasis:{md:"65%",lg:"100%"}}} >
            <Box className="photo" sx={{ width: "100%" }}>
              <img
                src={item.image}
                style={{ width: "100%",objectFit:"cover" }}
              />
              <Box className={item.imageIsLeft ? "shape left" : "shape right"}>
                <img src={item.shape} />
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
      <img src={img} width="180px" />
      <Typography sx={{ textAlign: "center", width: "60%", lineHeight: "1.8" }}>
        " We Would Like To Thank All Users Who Use The E-Store Application And
        Support Us In Achieving Our Goals. We Truly Appreciate Your Trust In Us
        And Promise To Provide High-Quality Service And Excellent Products For
        Online Shopping."
      </Typography>
    </Box>
  );
}
export default AboutUsDetails;
