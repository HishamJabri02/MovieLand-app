/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import "./SendOtp.css";
import OTPInput from "react-otp-input";
import GradiantButton from "../../../../../../core/GradiantButton";
import CloseIcon from "@mui/icons-material/Close";
const SendOtp = ({ accountSubmit, otp, setOtp, confirm, error, onClose }) => {
  return (
    <div className="otp-container">
      <div className="overlay"></div>
      <div className="container">
        <Box
          sx={{
            position: "absolute",
            width: { xs: "95%", sm: "60%", md: "46%", lg: "40%" },
            height: "60%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: { xs: 0, md: 4 },
            justifyContent: "space-evenly",
            zIndex: 2,
          }}>
          <Box
            sx={{
              width: "100%",
              padding: 2,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}>
            <CloseIcon
              sx={{ alignSelf: "flex-end", cursor: "pointer" }}
              onClick={onClose}
            />
            <Typography
              variant="h6"
              fontSize="20px"
              fontWeight="bold"
              textAlign="center">
              Enter Verification Code
            </Typography>
            <Typography
              variant="caption"
              textAlign="center"
              fontSize="12px"
              color="gray">
              {confirm}
            </Typography>
          </Box>
          <form noValidate onSubmit={accountSubmit} className="otp-form">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={5}
              inputStyle={{
                width: "4em",
                border: "none",
                padding: "10px",
                outline: "none",
                borderBottom: "2px solid blue",
              }}
              containerStyle={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              renderInput={(props) => <input {...props} />}
            />
            <Typography
              variant="caption"
              sx={{
                color: "red",
                display: "block",
                mt: 2,
                textAlign: "center",
              }}>
              {error}
            </Typography>
            <GradiantButton name="Send Otp" type="submit" />
          </form>
        </Box>
      </div>
    </div>
  );
};

export default SendOtp;
