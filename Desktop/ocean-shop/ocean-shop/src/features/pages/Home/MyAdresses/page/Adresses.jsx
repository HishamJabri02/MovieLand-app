import { Box, Typography } from "@mui/material";
import Navbar from "../../Navbar/Navbar";
import "../../../../../assets/font/font.css";
import location from "../../../../../assets/images/location.png";
import EmptyFeature from "../../../../../core/EmptyFeature";
import { useDispatch } from "react-redux";
import { getAllCitiesAsync } from "../state/getAllCitiesAsync";
import { useEffect, useState } from "react";
import AdressesForm from "./AdressesForm";
function Adresses() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCitiesAsync());
  }, []);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleColse = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Navbar />
      <Typography
        sx={{
          fontFamily: "Lucida Bright !important",
          fontSize: "25px",
          fontWeight: "bold",
          textAlign: "center",
          p: 4,
        }}>
        MY Adresses
      </Typography>
      <EmptyFeature
        img={location}
        problem="No Address Add Yet"
        explain="Tap 'Add Address' Button Below To Add Your First 
          Shipping Address And Start Shopping"
        to="/adresses"
        linkName="Add New Address"
        handleOpen={handleOpen}
      />
      <AdressesForm open={open} handleClose={handleColse} />
    </Box>
  );
}

export default Adresses;
