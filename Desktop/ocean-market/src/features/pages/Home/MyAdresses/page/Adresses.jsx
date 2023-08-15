import { Box, Grid, Typography } from "@mui/material";
import Navbar from "../../Navbar/Navbar";
import "../../../../../assets/font/font.css";
import location from "../../../../../assets/images/location.png";
import EmptyFeature from "../../../../../core/EmptyFeature";
import { useDispatch } from "react-redux";
import { getAllCitiesAsync } from "../state/getAllCitiesAsync";
import { useEffect, useState } from "react";
import * as React from 'react';
import maplibregl from "maplibre-gl"
import "maplibre-gl/dist/maplibre-gl.css"
import { Controller } from "react-hook-form";
import Map from "./Map";
import SelectField from "./SelectField";
function Adresses() {
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
        to="/add-adresses"
        linkName="Add New Address"
      />
    </Box>
  );
}

export default Adresses;
