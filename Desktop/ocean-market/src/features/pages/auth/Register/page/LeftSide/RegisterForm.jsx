/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { Stack } from "@mui/material";
import TextFieldAuth from "../../../../../../components/Auth/TextFieldAuth";
import CheckboxFields from "../../../../../../components/Auth/CheckboxFields";
import GradiantButton from "../../../../../../core/GradiantButton";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "../../validations/register";
import { useForm } from "react-hook-form";
import { sendOtpAsync } from "../../state/sendOtpAsync";
import { useDispatch } from "react-redux";
import PhoneNumberAuth from "../../../../../../components/Auth/PhoneNumberAuth";
import { useTranslation } from "react-i18next";
const RegisterForm = ({ setData, setStep, handleClick }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      privacy: true,
    },
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = async (data) => {
    let phone
    const firstSpaceIndex = data.phoneNumber.indexOf(" ");
    if(data.phoneNumber[firstSpaceIndex + 1]==="0"){
       phone=data.phoneNumber.replace('0','')
       phone=phone.replaceAll(' ', '')
    }else{
   phone=data.phoneNumber.replaceAll(' ', '')
    }
    let information = { phoneNumber: phone };
    const response = await dispatch(sendOtpAsync(information));
    if (response.payload) {
      setData(data);
      setStep(2);
      reset();
    } else {
      handleClick();
    }
  };
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2.3} mb={2}>
        <TextFieldAuth
          name="fullName"
          label={t("auth.labels.FullName")}
          control={control}
          text={errors.fullName?.message}
        />
        <PhoneNumberAuth
        name="phoneNumber"
        label={t("auth.labels.PhoneNumber")}
        control={control}
        text={errors.phoneNumber?.message}  
        />
        <TextFieldAuth
          name="email"
          label={t("auth.labels.Email")}
          control={control}
          type="email"
        />
        <TextFieldAuth
          name="password"
          label={t("auth.labels.Password")}
          control={control}
          text={errors.password?.message}
          icon={true}
          type="password"
        />
        <TextFieldAuth
          name="confirmPassword"
          label={t("auth.labels.ConfirmPassword")}
          control={control}
          text={errors.confirmPassword?.message}
          icon={true}
          type="password"
        />
        <CheckboxFields
          label={t("auth.generall.condition")}
          name="privacy"
          control={control}
        />
        <GradiantButton name={t("buttons.Register")} type="submit" />
      </Stack>
    </form>
  );
};

export default RegisterForm;
