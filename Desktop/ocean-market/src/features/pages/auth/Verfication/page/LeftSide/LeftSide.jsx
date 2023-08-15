/* eslint-disable react/no-unescaped-entities */
import { Box } from "@mui/material";
import GridItem from "../../../../../../components/Auth/GridItem";
import { useState } from "react";
import { useSelector } from "react-redux";
import CustomSnackbar from "../../../../../../core/CustomSnackbar";
import useRedirect from "../../../hooks/useRedirect";
import AuthHeader from "../../../constants/AuthHeader";
import VerificationForm from "./VerificationForm";
import Otp from "./Otp";
import { useTranslation } from "react-i18next";
const LeftSide = () => {
  useRedirect();
  const error = useSelector((state) => state.VerificationReducer.message);
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [otp, setOtp] = useState("");
  const { t } = useTranslation();
  return (
    <>
      <GridItem
        xs={12}
        sm={8}
        md={6}
        lg={5}
        sx={{ justifyContent: "space-evenly", minHeight: "100dvh" }}>
        <Box sx={{ mb: 2, textAlign: { xs: "center", sm: "start" } }}>
          <AuthHeader
             textOne={t("auth.header.Verification.title")}
             textTwo={t("auth.header.Verification.subTitle")}
          />
        </Box>
        <Otp otp={otp} setOtp={setOtp} errorMessage={errorMessage} />
        <VerificationForm
          otp={otp}
          setErrorMessage={setErrorMessage}
          setOpen={setOpen}
        />
        <CustomSnackbar
          open={open}
          setOpen={setOpen}
          type="error"
          message={error}
        />
      </GridItem>
    </>
  );
};
export default LeftSide;
