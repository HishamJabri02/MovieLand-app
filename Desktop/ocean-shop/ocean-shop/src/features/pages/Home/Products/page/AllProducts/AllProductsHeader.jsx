/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import DropDown from "./DropDown";
import HomeContainer from "../../../../../../components/Home/HomeContainer";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function AllProductsHeader({ age, handleChange }) {
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
        }}>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography sx={{ color: "gray", fontSize: "18px" }}>Home</Typography>
          <ArrowForwardIosIcon fontSize="meduim" />
          <Typography sx={{ fontSize: "18px" }}>{age}</Typography>
        </Box>
        <DropDown age={age} handleChange={handleChange} />
      </Box>
    </HomeContainer>
  );
}

export default AllProductsHeader;
