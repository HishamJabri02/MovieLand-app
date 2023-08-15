/* eslint-disable react/prop-types */
import {
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import profile from "../../../../../assets/images/Profile.svg";
import ProfileInformation from "./ProfileInformation";
import { Link, useNavigate } from "react-router-dom";
import { Logoutuser } from "../../../auth/Login/api/Logoutuser";

function AccountSettings({ handleOpen }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  const LogoutProfile = async () => {
    try {
      await Logoutuser();
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      navigate("/login", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}>
            <img src={profile} alt="" width="40px" height="40px" />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            width: "240px",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
        <ProfileInformation />
        <MenuItem
          onClick={() => {
            handleClose();
            handleOpen();
          }}
          sx={{
            ":hover": {
              color: "blue",
              background: "transparent",
            },
          }}>
          Personal Information
        </MenuItem>
        <Link to="/orders" style={{ textDecoration: "none", color: "black" }}>
          <MenuItem
            onClick={handleClose}
            sx={{
              ":hover": {
                color: "blue",
                background: "transparent",
              },
            }}>
            My Orders{" "}
          </MenuItem>
        </Link>
        <Link to="/adresses" style={{ textDecoration: "none", color: "black" }}>
          <MenuItem
            onClick={handleClose}
            sx={{
              ":hover": {
                color: "blue",
                background: "transparent",
              },
            }}>
            My Addresses
          </MenuItem>
        </Link>
        <Divider />
        <MenuItem
          sx={{ color: "red" }}
          onClick={() => {
            handleClose();
            LogoutProfile();
          }}>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default AccountSettings;
