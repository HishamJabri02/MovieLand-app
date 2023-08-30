/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
  InputBase,
} from "@mui/material";
import HomeContainer from "../../../../components/Home/HomeContainer";
import NavbarAddress from "./page/NavbarAddress";
import NavbarItems from "./page/NavbarItems";
import IconGroup from "./page/IconGroup";
import MenuItems from "./page/MenuItems";
import PersonalInformation from "../PersonalInformation/page/PersonalInformation";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SearchIcon from "@mui/icons-material/Search";
import { CloseCircle } from "iconsax-react";
import DropDown from "./constants/DropDown";
import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-router-dom";
const Navbar = () => {
  const token = localStorage.getItem("token");
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const langauge = localStorage.getItem("i18nextLng");
  const [age, setAge] = useState("");
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(true);
  };
  const handleLeave = () => {
    setIsHovered(false);
  };
  const clearSearch = () => {
    setValue("");
  };
  return (
    <>
      <Box
        sx={{
          height: "30px",
          backgroundColor: "black",
          alignItems: "center",
          display: { xs: "none", md: "flex" },
        }}
      >
        <DropDown />
        <CallIcon sx={{ color: "#fff", ml: 4, height: "15px" }} />
        <Typography sx={{ color: "#fff", fontSize: "12px" }}>
          +96596666207
        </Typography>
        {token ? (
          ""
        ) : (
          <>
            <Link
              to="/login"
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              Login
            </Link>
            <Link
              to="/register"
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              ٌRegister
            </Link>
          </>
        )}
      </Box>
      <HomeContainer
        sx={{
          width: "100%",
          height: "80px",
          display: "flex",
          alignItems: "center",
          boxShadow: "0px 0px 6px 0px gray",
          direction: langauge === "ar" ? "rtl" : "ltr",
        }}
      >
        <MenuItems />
        <NavbarAddress />
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 5,
            flexBasis: "44%",
            height: "100%",
          }}
        >
          <NavbarItems menu={false} />
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: { xs: "center", md: "flex-end" },
            flexBasis: { xs: "0%", sm: "31%", md: "49%", lg: "23%" },
            alignItems: "center",
            gap: 1,
            mr: { sm: 2, lg: 2 },
          }}
        >
          <Box
            onClick={window.innerWidth < 900 ? handleHover : ""}
            onMouseEnter={window.innerWidth < 900 ? "" : handleHover}
            onMouseLeave={window.innerWidth < 900 ? "" : handleLeave}
            sx={{
              display: "flex",
              position: "relative",
              flexBasis: {
                xs: "100%",
                sm: "100%",
                md: isHovered ? "100%" : "70%",
              },
              transition: ".3s",
              backgroundColor: "#F5F5F5",
              height: "40px",
              alignItems: "center",
              borderRadius: "15px",
              direction: langauge === "ar" ? "rtl" : "ltr",
            }}
          >
            <SearchIcon sx={{ mx: "10px" }} />
            <InputBase
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search"
              sx={{
                width: "100%",
                height: "40px",
              }}
            />
            {isHovered && (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CloseCircle
                  size="20"
                  color="lightgray"
                  variant="Broken"
                  onClick={clearSearch}
                  style={{ cursor: "pointer" }}
                />
                <FormControl
                  sx={{
                    width: "120px",
                    m: 1,
                    height: "40px",
                    direction: "ltr",
                    "& .css-1eixkdi-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root":
                      {
                        width: "120px",
                      },
                    "& .css-1x5jdmq": {
                      padding: "0px !important",
                    },
                    "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                      {
                        padding: "0px !important",
                      },
                    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
                      {
                        padding: "0px !important",
                      },
                  }}
                >
                  <Select
                    sx={{
                      height: "100%",
                      backgroundImage:
                        "linear-gradient(to left, #4BE1EC 0%, #9931D6 50%, #DC136E 100%)",
                      backgroundClip: "text",
                      color: "transparent",
                      "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                        padding: "0px !important",
                        border: "0px !important",
                      },
                    }}
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <Typography>Products</Typography>
                    </MenuItem>
                    <MenuItem value={20}>Categories</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            )}
          </Box>
        </Box>
        <IconGroup handleOpen={handleOpen} />
      </HomeContainer>
      <PersonalInformation
        open={open}
        handleClose={handleClose}
        setOpen={setOpen}
      />
    </>
  );
};
export default Navbar;
