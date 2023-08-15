import { useTranslation } from "react-i18next";
import GridContainer from "../../../../components/Auth/GridContainer";
import LeftSide from "./page/LeftSide/LeftSide";
import RightSide from "./page/RightSide/RightSide";
const Register = () => {
  const language=localStorage.getItem("i18nextLng")
  return (
    <GridContainer sx={{direction:language==="ar" ? "rtl" : "ltr"}}>
      <LeftSide />
      <RightSide />
    </GridContainer>
  );
};
export default Register;
