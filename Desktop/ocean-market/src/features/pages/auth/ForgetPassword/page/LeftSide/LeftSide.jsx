import { useSelector } from "react-redux";
import GridItem from "../../../../../../components/Auth/GridItem";
import CustomSnackbar from "../../../../../../core/CustomSnackbar";
import { useState } from "react";
import ForgetPasswordForm from "./ForgetPasswordForm";
import AuthHeader from "../../../constants/AuthHeader";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
const LeftSide = () => {
  const [open, setOpen] = useState(false);
  const error = useSelector((state) => state.forgetPasswordReducer.status);
  const { t } = useTranslation();
  return (
    <>
      <GridItem sx={{ minHeight: "100dvh" }} xs={12} sm={8} md={6} lg={5}>
        <Box sx={{ mb: 10, mt: 6 }}>
          <AuthHeader
            textOne={t("auth.header.ForgetPassword.title")}
            textTwo={t("auth.header.ForgetPassword.subTitle")}
          />
        </Box>
        <ForgetPasswordForm setOpen={setOpen} />
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
