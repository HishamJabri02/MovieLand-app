/* eslint-disable react/no-unknown-property */
import { Box } from "@mui/material";
import GridItem from "../../../../../../components/Auth/GridItem";
import { useState } from "react";
import { verifyAccount } from "../../api/verifyAccount";
import { registerAsync } from "../../state/registerAsync";
import { useDispatch, useSelector } from "react-redux";
import SendOtp from "../../page/SendOtp/SendOtp";
import useRedirect from "../../../hooks/useRedirect";
import AuthHeader from "../../../constants/AuthHeader";
import AuthFooter from "../../../constants/AuthFooter";
import GradiantCirculeLoading from "../../../../../../core/GradiantCirculeLoading";
import StorageToken from "../../../helpers/StorageToken";
import CustomSnackbar from "../../../../../../core/CustomSnackbar";
import RegisterForm from "./registerForm";
import { useNavigate } from "react-router-dom";
const LeftSide = () => {
  const handleClose = () => {
    setStep(1);
  };
  const handleClick = () => {
    setOpen(true);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const otpLoading = useSelector((state) => state.sendOtpReducer.loading);
  const message = useSelector((state) => state.sendOtpReducer.status);
  const otpError = useSelector((state) => state.sendOtpReducer.error);
  const registerLoading = useSelector((state) => state.registerReducer.loading);
  const registerError = useSelector((state) => state.registerReducer.error);
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [open, setOpen] = useState(false);
  useRedirect();
  const accountSubmit = async (e) => {
    e.preventDefault();
    if (otp.length === 5) {
      const response = await verifyAccount({
        phoneNumber: data.phoneNumber,
        code: parseInt(otp),
      });
      if (response.success) {
        setStep(1);
        let infor = {
          name: data.fullName,
          password: data.password,
          phoneNumber: data.phoneNumber,
          email: data.email,
          firebaseToken: "hello",
        };
        const result = await dispatch(registerAsync(infor));
        if (result.payload) {
          StorageToken(result.payload.data.token);
          navigate("/", { replace: true });
        } else {
          handleClick();
        }
      } else {
        setError(response.message);
      }
    } else {
      setError("Please complete your Otp");
    }
  };
  return (
    <>
      {otpLoading && <GradiantCirculeLoading />}
      {registerLoading && <GradiantCirculeLoading />}
      {step === 2 && (
        <SendOtp
          accountSubmit={accountSubmit}
          otp={otp}
          setOtp={setOtp}
          confirm={message}
          error={error}
          onClose={handleClose}
        />
      )}
      <GridItem
        sx={{ justifyContent: "space-evenly" }}
        xs={12}
        sm={8}
        md={6}
        lg={5}>
        <Box sx={{ mb: 4 }}>
          <AuthHeader
            textOne="Create An Account"
            textTwo=" Register Now To Get Started An Account"
          />
        </Box>
        <RegisterForm
          setData={setData}
          setStep={setStep}
          handleClick={handleClick}
        />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <AuthFooter
            textLink="Already Have An Account ?"
            link="Login"
            url="/login"
          />
        </Box>
        <CustomSnackbar
          open={open}
          setOpen={setOpen}
          type="error"
          message={otpError ? otpError : registerError}
        />
      </GridItem>
    </>
  );
};

export default LeftSide;
