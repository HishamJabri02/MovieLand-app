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
const ForgetPasswordForm = ({ setOpen }) => {
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
    const response = await dispatch(forgetPasswordAsync(data));
    if (response.payload) {
      dispatch(addPhoneNumber(data));
      navigate("/verification");
    } else {
      handleClick();
    }
  };
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={6}>
        <TextFieldAuth
          name="phoneNumber"
          label="Phone Number"
          control={control}
          text={errors.phoneNumber?.message}
        />
        <GradiantButton name="Submit" type="submit" />
        <Link
          to="/login"
          style={{
            textAlign: "center",
            textDecoration: "none",
            color: "black",
          }}>
          Back To Login
        </Link>
      </Stack>
    </form>
  );
};

export default ForgetPasswordForm;
