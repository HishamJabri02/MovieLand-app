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
import PhoneNumberAuth from "../../../../../../components/Auth/PhoneNumberAuth";
import { useTranslation } from 'react-i18next';
function LoginForm({ setOpen, setExit }) {
  const { t } = useTranslation();
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
    let phone
    const firstSpaceIndex = data.phoneNumber.indexOf(" ");
    if(data.phoneNumber[firstSpaceIndex + 1]==="0"){
       phone=data.phoneNumber.replace('0','')
       phone=phone.replaceAll(' ', '')
    }else{
   phone=data.phoneNumber.replaceAll(' ', '')
    }
    
    const information = {
      phoneNumber:phone ,
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
        <PhoneNumberAuth
        name="phoneNumber"
        label={t("auth.labels.PhoneNumber")}
        control={control}
        text={errors.phoneNumber?.message}  
        />
        <TextFieldAuth
          name="password"
          label={t("auth.labels.Password")}
          control={control}
          text={errors.password?.message}
          icon={true}
          type="password"
        />
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <CheckboxFields
            name="Remember"
            control={control}
            label={t("auth.generall.remember")}
          />
          <Link
            to="/forget-password"
            style={{
              lineHeight: "42px",
              color: "blue",
              textDecoration: "none",
            }}>
            {t("auth.links.forgetPassword")}
          </Link>
        </Stack>
        <GradiantButton name={t("buttons.Login")} type="submit" />
      </Stack>
    </form>
  );
}

export default LoginForm;
