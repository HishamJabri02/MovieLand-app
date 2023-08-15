/* eslint-disable react/prop-types */
import { Stack } from "@mui/material";
import TextFieldAuth from "../../../../../../components/Auth/TextFieldAuth";
import GradiantButton from "../../../../../../core/GradiantButton";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "../../validations/forgetPassword";
import { forgetPasswordAsync } from "../../state/forgetPasswordAsync";
import { addPhoneNumber } from "../../state/forgetPasswordSlice";
import PhoneNumberAuth from "../../../../../../components/Auth/PhoneNumberAuth";
import { useTranslation } from "react-i18next";
const ForgetPasswordForm = ({ setOpen }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  const handleClick = () => {
    setOpen(true);
  };
  const onSubmit = async (data) => {
    let phone
    const firstSpaceIndex = data.phoneNumber.indexOf(" ");
    if(data.phoneNumber[firstSpaceIndex + 1]==="0"){
       phone=data.phoneNumber.replace('0','')
       phone=phone.replaceAll(' ', '')
    }else{
   phone=data.phoneNumber.replaceAll(' ', '')
    }
    const response = await dispatch(forgetPasswordAsync({phoneNumber:phone}));
    if (response.payload) {
      dispatch(addPhoneNumber({phoneNumber:phone}));
      navigate("/verification");
    } else {
      handleClick();
    }
  };
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={6}>
      <PhoneNumberAuth
        name="phoneNumber"
        label={t("auth.labels.PhoneNumber")}
        control={control}
        text={errors.phoneNumber?.message}  
        />
        <GradiantButton name={t("buttons.Register")} type="submit" />
        <Link
          to="/login"
          style={{
            textAlign: "center",
            textDecoration: "none",
            color: "blue",
          }}>
         {t("auth.links.back")}
        </Link>
      </Stack>
    </form>
  );
};

export default ForgetPasswordForm;
