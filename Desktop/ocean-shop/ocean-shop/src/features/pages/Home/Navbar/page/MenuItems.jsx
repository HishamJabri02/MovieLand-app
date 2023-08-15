import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import menu from "../../../../../assets/images/menu.svg";
import { Divider, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ProfileInformation from "./ProfileInformation";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import NavbarItems from "./NavbarItems";
import AccordionLanguage from "./AccordionLanguage";
import SettingsItem from "./SettingsItem";
import { Logoutuser } from "../../../auth/Login/api/Logoutuser";
const token = localStorage.getItem("token") || sessionStorage.getItem("token");
export default function MenuItems() {
  const navigate = useNavigate();
  const LogoutProfile = async () => {
    try {
      await Logoutuser();
      localStorage.removeItem("token"); 
      localStorage.removeItem("ver"); 
      navigate("/",true); // Redirect to the login page
    } catch (error) {
      console.log(error);
    }
  };
  const [hasToken, setHasToken] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    setHasToken(Boolean(token));
  }, [token]);
  const [state, setState] = useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };
  const sideBar = (anchor) => (
    <Box sx={{ width: 250 }} role="presentation">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          alignItems: "center",
        }}>
        <CloseIcon
          onClick={toggleDrawer(anchor, false)}
          sx={{ alignSelf: "end", cursor: "pointer" }}
        />
        <ProfileInformation />
        {hasToken ? 
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Link
            style={{
              textDecoration: "none",
              color: "blue",
              fontSize: "13px",
            }}
          >
            Personal Information
          </Link>
        </Box>
     :
           <Link
           style={{ textDecoration: "none", color: "blue", fontSize: "13px" }}
           to="/login">
            Login /Signup
          </Link>
            } 
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          pl: 2,
          height: 260,
          pt: 2,
          gap: 2,
        }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
          Shop with Us
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: "column", flexBasis: "85%" }}>
          <NavbarItems menu={true} />
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          pl: 2,
          minHeight: 230,
          pt: 2,
          gap: 2,
        }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
          Settings
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexBasis: "85%",
            gap: 2,
          }}>
          <SettingsItem />
          <AccordionLanguage />
          {hasToken &&

            <Link
            onClick={LogoutProfile}
            style={{
              textDecoration: "none",
              color: "red",
              fontSize: "13px",
              paddingBottom:"12px",
            }}
            >
            LogOut
          </Link>
          }
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          pl: 2,
          height: 100,
          pt: 2,
          gap: 2,
        }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
          Enjoy On The App
        </Typography>
        <Link
          to="https://play.google.com/store/apps/details?id=com.oceansoft.oceanecommercemarketapplication"
          style={{
            textDecoration: "none",
            fontSize: "14px",
          }}>
          Download The App
        </Link>
      </Box>
    </Box>
  );
  return (
    <Box
      sx={{
        flexBasis: { xs: "9%", sm: "2%", md: "4%", lg: "0%" },
        p: 0,
        pr: "10px",
      }}>
      <IconButton
        onClick={toggleDrawer("left", true)}
        sx={{ display: { xs: "block", lg: "none" } }}>
        <img src={menu} alt="" />
      </IconButton>
      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        >
        {sideBar("left")}
      </Drawer>
    </Box>
  );
}
