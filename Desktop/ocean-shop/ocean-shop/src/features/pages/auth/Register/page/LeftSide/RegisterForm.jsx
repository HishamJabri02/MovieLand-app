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
const RegisterForm = ({ setData, setStep, handleClick }) => {
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
    let information = { phoneNumber: data.phoneNumber };
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
          label="Full Name"
          control={control}
          text={errors.fullName?.message}
        />
        <TextFieldAuth
          name="phoneNumber"
          label="Phone Number"
          control={control}
          text={errors.phoneNumber?.message}
        />
        <TextFieldAuth
          name="email"
          label="Email"
          control={control}
          type="email"
        />
        <TextFieldAuth
          name="password"
          label="Password"
          control={control}
          text={errors.password?.message}
          icon={true}
          type="password"
        />
        <TextFieldAuth
          name="confirmPassword"
          label="Confirm Password"
          control={control}
          text={errors.confirmPassword?.message}
          icon={true}
          type="password"
        />
        <CheckboxFields
          label="I Have Read And Agree To The Terms Of Service "
          name="privacy"
          control={control}
        />
        <GradiantButton name="Register" type="submit" />
      </Stack>
    </form>
  );
};

export default RegisterForm;
