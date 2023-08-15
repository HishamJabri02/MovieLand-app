/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Box, Link, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import OTPInput from "react-otp-input";
import useResendVerificationCode from "../../hooks/useResendVerificationCode";

const Otp = ({ otp, setOtp, errorMessage }) => {
  const phoneNumber = useSelector(
    (state) => state.forgetPasswordReducer.phoneNumber
  );
  const { disableResend, handleResendClick } = useResendVerificationCode(
    phoneNumber,
    30000
  );
  return (
    <Box>
      <Typography variant="caption" sx={{ color: "blue" }}>
        Enter Verification Code{" "}
      </Typography>
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
        sx={{ color: "red", display: "block", mt: 2, textAlign: "center" }}>
        {errorMessage}
      </Typography>
      <Typography variant="subtitle2" sx={{ textAlign: "center", mt: 4 }}>
        If You Didn't Receive A Code!{" "}
        <Link
          style={{
            textDecoration: disableResend ? "line-through" : "none",
            color: disableResend ? "gray" : "blue",
            cursor: disableResend ? "not-allowed" : "pointer",
          }}
          onClick={!disableResend ? handleResendClick : undefined}>
          Resend
        </Link>
      </Typography>
    </Box>
  );
};

export default Otp;
