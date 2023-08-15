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
import { useTranslation } from "react-i18next";
import appStore from "../../../../../assets/images/AppStore.svg"
import googlePlay from "../../../../../assets/images/GooglePlay.svg"
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
  const {t}=useTranslation()
  const language =localStorage.getItem("i18nextLng")
  const dir=language==="ar"?"right":"left"
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
    <Box sx={{ width: 250,direction:"rtl" }} role="presentation">
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
            {t("navbar.drawer.title.log")}
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
          gap: 2,mr:1
        }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
          {t("navbar.drawer.title.shop")}
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
          gap: 2,mr:1
        }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
        {t("navbar.drawer.title.settings")}
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
            {t("auth.generall.logout")}
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
          gap: 2,mr:1
        }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
        {t("navbar.drawer.title.app")}
        </Typography>
        <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}>
                <Link
                  href="https://apps.apple.com/kw/app/ocean-market/id6450056202"
                  sx={{
                    display: "flex",
                    gap: "10px",
                    my: 0.5,
                    textDecoration: "none",
                    color: "black",
                    fontSize:{xs:"14px",sm:"16px"}
                  }}>
                  <img src={appStore} width="120px" />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.oceansoft.oceanecommercemarketapplication"
                  sx={{
                    display: "flex",
                    gap: "10px",
                    my: 0.5,
                    textDecoration: "none",
                    color: "black",
                    fontSize:{xs:"14px",sm:"16px"}
                  }}>
                  <img src={googlePlay} width="120px" />
                </Link>
          </Box>
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
        onClick={toggleDrawer(dir, true)}
        sx={{ display: { xs: "block", lg: "none" } }}>
        <img src={menu} alt="" />
      </IconButton>
      <Drawer
        anchor={dir}
        open={state[dir]}
        onClose={toggleDrawer(dir, false)}
        >
        {sideBar(dir)}
      </Drawer>
    </Box>
  );
}
