/* eslint-disable react/prop-types */
import { Stack } from "@mui/material";
import TextFieldAuth from "../../../../../../components/Auth/TextFieldAuth";
import GradiantButton from "../../../../../../core/GradiantButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "../../validations/verfication";
import { useDispatch, useSelector } from "react-redux";
import { VerificationAsync } from "../../state/VerificationAsync";
import { useNavigate } from "react-router-dom";
import StorageToken from "../../../helpers/StorageToken";
const VerificationForm = ({ otp, setErrorMessage, setOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(true);
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  const onSubmit = async (data) => {
    if (otp.length < 5) {
      setErrorMessage("Please complete your Otp");
      return;
    }
    let information = {
      phoneNumber: phoneNumber.phoneNumber,
      code: parseInt(otp),
      newPassword: data.password,
      firebaseToken: "hello",
    };
    const response = await dispatch(VerificationAsync(information));
    if (response.payload) {
      StorageToken(response.payload.data.token);
      navigate("/");
    } else {
      handleClick();
    }
  };
  let phoneNumber = useSelector(
    (state) => state.forgetPasswordReducer.phoneNumber
  );
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
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
          label="ConfirmPassword"
          control={control}
          text={errors.confirmPassword?.message}
          icon={true}
          type="password"
        />
        <GradiantButton name="Submit" type="submit" />
      </Stack>
    </form>
  );
};

export default VerificationForm;