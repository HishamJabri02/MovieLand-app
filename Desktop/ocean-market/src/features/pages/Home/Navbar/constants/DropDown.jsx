import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CheckIcon from "@mui/icons-material/Check";
import EnglishIcon from "../../../../../assets/images/English.svg";
import ArabicIcon from "../../../../../assets/images/Arabic.svg";
import { useTranslation } from "react-i18next";
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 140,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
    },
  },
}));

export default function DropDown() {
  const { i18n } = useTranslation();
  let langauge= i18n.language
  langauge=langauge==="ar"?"ar":"en"
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [language, setLanguage] = React.useState(langauge); // default language is English
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
    handleClose();
  };

  return (
    <>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
        sx={{ color:"#fff", gap: "5px",height:"100%",pl:10}}
        endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}>
        {language === "en" ? "En" : "Ar"}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
        <MenuItem
          onClick={() => handleLanguageChange("en")}
          sx={{ gap: "10px" }}
          disableRipple>
          <img src={EnglishIcon} alt="" />
          English
          {language === "en" ? <CheckIcon /> : ""}
        </MenuItem>
        <MenuItem
          onClick={() => handleLanguageChange("ar")}
          sx={{ gap: "10px" }}
          disableRipple>
          <img src={ArabicIcon} alt="" />
          Arabic
          {language === "ar" ? <CheckIcon /> : ""}
        </MenuItem>
      </StyledMenu>
    </>
  );
}
