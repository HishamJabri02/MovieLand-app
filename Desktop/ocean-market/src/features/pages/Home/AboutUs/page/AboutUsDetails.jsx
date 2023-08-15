/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./AboutUsDetails.css";
import AboutUsInformation from "../data/AboutUsInformation";
import img from "../../../../../assets/images/thanks.png";
import "../../../../../assets/font/font.css";
import { useTranslation } from "react-i18next";
function AboutUsDetails() {
  const {t}=useTranslation()
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
              {t(`about.conditions.${item.number}.${item.title}`)}
            </Typography>
            <Typography
              sx={{ lineHeight: "1.8", padding: "10px", fontSize: {xs:"12px",md:"14px"} }}>
              {t(`about.conditions.${item.number}.${item.subTitle}`)}
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
        "{t("about.finally")}"
      </Typography>
    </Box>
  );
}
export default AboutUsDetails;
