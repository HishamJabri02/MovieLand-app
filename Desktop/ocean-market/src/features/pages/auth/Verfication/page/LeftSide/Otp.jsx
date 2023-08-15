/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Box, Link, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import OTPInput from "react-otp-input";
import useResendVerificationCode from "../../hooks/useResendVerificationCode";
import { useTranslation } from "react-i18next";

const Otp = ({ otp, setOtp, errorMessage }) => {
  const { t } = useTranslation();
  const phoneNumber = useSelector(
    (state) => state.forgetPasswordReducer.phoneNumber
  );
  const { disableResend, handleResendClick } = useResendVerificationCode(
    phoneNumber,
    30000
  );
  return (
    <Box>
      <Typography variant="caption" sx={{ color: "blue",display:"block",mb:1}}>
        {t("auth.labels.Otp")}
      </Typography>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={5}
        inputStyle={{
          width: "4em",
          padding: "10px",
          border: "1px solid blue",
          borderRadius:"10px"
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
      <Typography variant="subtitle2" sx={{ mt: 4,display:"flex",justifyContent:"center",gap:"4px" }}>
        {t("auth.generall.code")}
        <Link
          style={{
            textDecoration: "none",
            color: disableResend ? "gray" : "blue",
            cursor: disableResend ? "not-allowed" : "pointer",
          }}
          onClick={!disableResend ? handleResendClick : undefined}>
        {t("auth.generall.resend")}
        </Link>
      </Typography>
    </Box>
  );
};

export default Otp;
