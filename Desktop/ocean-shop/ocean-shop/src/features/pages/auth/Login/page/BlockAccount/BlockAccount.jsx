/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import lock from "../../../../../../assets/images/lock.jpg";
import GradiantButton from "../../../../../../core/GradiantButton";
import "./BlockAccount.css";
const BlockAccount = () => {
  return (
    <div className="block-container">
      <div className="overlay"></div>
      <div className="container">
        <Box
          sx={{
            position: "absolute",
            width: { xs: "90%", sm: "60%", md: "37%" },
            height: "60%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: { xs: 2, md: 4 },
            justifyContent: "space-around",
          }}>
          <img src={lock} alt="" className="lock" />
          <Typography
            variant="h6"
            fontSize="20px"
            fontWeight="bold"
            textAlign="center"
            sx={{ mb: 4 }}>
            Your Account is Blocked
          </Typography>
          <Typography variant="body2" textAlign="center" sx={{ mb: 2 }}>
            Your Account has been locked.Contact Support To Reactivate Your
            Account
          </Typography>
          <GradiantButton name="Open Support" />
        </Box>
      </div>
    </div>
  );
};

export default BlockAccount;
