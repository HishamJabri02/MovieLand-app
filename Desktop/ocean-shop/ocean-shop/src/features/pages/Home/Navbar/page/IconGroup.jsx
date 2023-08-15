/* eslint-disable react/prop-types */
import { useState } from "react";
import { Badge, Box, Tooltip } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountSettings from "./AccountSettings";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NotificationList from "./NotificationList";
function IconGroup({ handleOpen }) {
  let counter = useSelector((state) => state.ShoppingCartReducer.details);
  counter = counter.reduce((acc, item) => acc + item.counter, 0);
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  const [showNotification, setShowNotification] = useState(false);

  const handleNotificationClick = () => {
    setShowNotification(true);
  };

  const handleNotificationClose = () => {
    setShowNotification(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexBasis: { xs: "24%", sm: "20%", lg: "12%" },
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <Tooltip title="My Notification">
        <NotificationsNoneOutlinedIcon
          onClick={handleNotificationClick}
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "blue",
            },
          }}
        />
      </Tooltip>
      <Tooltip title="Whishlist">
        <Link to="/favorite" style={{ color: "'black" }}>
          <FavoriteBorderOutlinedIcon
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: "blue",
              },
              display: { xs: "none", sm: "block" },
            }}
          />
        </Link>
      </Tooltip>
      <Link to="/shopping-cart" style={{ display: "flex" }}>
        <Badge badgeContent={counter} color="primary">
          <Tooltip title="My Cart">
            <ShoppingBagOutlinedIcon
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "blue",
                },
              }}
            />
          </Tooltip>
        </Badge>
      </Link>
      {token && <AccountSettings handleOpen={handleOpen} />}
      {showNotification && (
        <Box
          onClick={() => handleNotificationClose()}
          sx={{
            position: "absolute",
            pb: 2,
            top: "290px",
            transform: "translate(-73%, -50%)",
            width: "300px",
            height: "400px",
            backgroundColor: "white",
            zIndex: 999,
            boxShadow: "1px 1px 5px",
            borderRadius: "10px",
            overflowY: "scroll",
            scrollbarWidth: "none" /* Hide scrollbar for Firefox */,
            "&::-webkit-scrollbar": {
              /* Hide scrollbar for Webkit browsers */ width: "0.5em",
              height: "0.5em",
              background: "transparent",
            },
          }}>
          <NotificationList />
        </Box>
      )}
    </Box>
  );
}

export default IconGroup;
