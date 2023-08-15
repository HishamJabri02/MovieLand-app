/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from "react-redux";
import GridItem from "../../../../../../components/Auth/GridItem";
import { useState } from "react";
import GradiantCirculeLoading from "../../../../../../core/GradiantCirculeLoading";
import BlockAccount from "../BlockAccount/BlockAccount";
import CustomSnackbar from "../../../../../../core/CustomSnackbar";
import LoginForm from "./LoginForm";
import useRedirect from "../../../hooks/useRedirect";
import AuthHeader from "../../../constants/AuthHeader";
import AuthFooter from "../../../constants/AuthFooter";
import { Box } from "@mui/material";
const LeftSide = () => {
  // To ensure whether the user has a token or not
  useRedirect();
  const [open, setOpen] = useState(false);
  const [exit, setExit] = useState(true);
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  return (
    <>
      {!exit && <BlockAccount setExit={setExit} />}
      {loading && <GradiantCirculeLoading />}
      <GridItem
        sx={{
          justifyContent: "space-evenly",
          minHeight: "100dvh",
        }}
        xs={12}
        sm={8}
        md={6}
        lg={5}>
        <Box sx={{ mb: 4 }}>
          <AuthHeader
            textOne="Log Into Your Account"
            textTwo="Welcome Back, Please Enter Your Details."
          />
        </Box>
        <LoginForm setExit={setExit} setOpen={setOpen} />
        <AuthFooter
          textLink="Don't Have An Account ?"
          link="Register"
          url="/register"
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
