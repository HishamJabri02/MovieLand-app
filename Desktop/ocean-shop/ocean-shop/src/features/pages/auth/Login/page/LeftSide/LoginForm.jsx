/* eslint-disable react/prop-types */
import GradiantButton from "../../../../../../core/GradiantButton";
import { Stack } from "@mui/material";
import TextFieldAuth from "../../../../../../components/Auth/TextFieldAuth";
import CheckboxFields from "../../../../../../components/Auth/CheckboxFields";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "../../validations/login";
import { useDispatch } from "react-redux";
import { loginAsync } from "../../state/loginAsync";
import checkStatus from "../../helpers/chekStatus";
import getTokenAndStorage from "../../helpers/getTokenAndStorage";
function LoginForm({ setOpen, setExit }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Remember: true,
    },
    resolver: yupResolver(validationSchema),
  });
  const handleClick = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const information = {
      phoneNumber: data.phoneNumber,
      password: data.password,
      firebaseToken: "hello",
    };
    const response = await dispatch(loginAsync(information));
    if (!response.payload) {
      handleClick();
      return;
    }
    const check = await checkStatus(response.payload.data.token);
    if (check.data.status === "total_ban") {
      setExit(false);
      return;
    }
    const token = response.payload.data.token;
    getTokenAndStorage(data.Remember, token);
    navigate("/", { replace: true });
  };
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <TextFieldAuth
          name="phoneNumber"
          label="Phone Number"
          control={control}
          text={errors.phoneNumber?.message}
        />
        <TextFieldAuth
          name="password"
          label="Password"
          control={control}
          text={errors.password?.message}
          icon={true}
          type="password"
        />
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <CheckboxFields
            name="Remember"
            control={control}
            label="Remember me"
          />
          <Link
            to="/forget-password"
            style={{
              lineHeight: "42px",
              color: "black",
              textDecoration: "none",
            }}>
            Forget Password ?
          </Link>
        </Stack>
        <GradiantButton name="Login" type="submit" />
      </Stack>
    </form>
  );
}

export default LoginForm;
