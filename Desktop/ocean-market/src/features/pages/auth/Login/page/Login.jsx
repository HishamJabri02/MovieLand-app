import { useEffect } from "react";
import GridContainer from "../../../../../components/Auth/GridContainer";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import { useTranslation } from 'react-i18next';
const Login = () => {
  const { i18n } = useTranslation();
  const language = i18n.language;
  return (
    <GridContainer sx={{direction:language==="ar" ? "rtl" : "ltr"}} >
      <LeftSide />
      <RightSide />
    </GridContainer>
  );
};
export default Login;
