/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import DropDown from "./DropDown";
import HomeContainer from "../../../../../../components/Home/HomeContainer";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useTranslation } from "react-i18next";
function AllProductsHeader({ age, handleChange }) {
  const {i18n,t } = useTranslation();
  const language = i18n.language; 
  const type= age==="New_Arrival"?"new":age==="Top_Rated"?"top":age==="Offers"?"offers":age==="Price_ASC"?"price-highest":"price-lowest"
  return (
    <HomeContainer>
      <Box
        sx={{
          mt: 2,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: "10px", sm: "0px" },
          alignItems: "center",
          direction:language==="ar"?"rtl":"ltr"
        }}>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography sx={{ color: "gray", fontSize: "18px" }}>{t("home.titles.Home")}</Typography>
          {language ==="ar"
          ?          
          <ArrowBackIosNewIcon fontSize="meduim" />:
        <ArrowForwardIosIcon fontSize="meduim" /> 
          }
          <Typography sx={{ fontSize: "18px" }}>{t(`home.titles.${type}`)}</Typography>
        </Box>
        <DropDown age={age} handleChange={handleChange} />
      </Box>
    </HomeContainer>
  );
}

export default AllProductsHeader;
