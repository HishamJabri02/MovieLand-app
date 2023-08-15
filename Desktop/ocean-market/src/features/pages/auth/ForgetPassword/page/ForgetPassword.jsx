import { useSelector } from "react-redux";
import GridContainer from "../../../../../components/Auth/GridContainer";
import GradiantCirculeLoading from "../../../../../core/GradiantCirculeLoading";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
const ForgetPassword = () => {
  const loading = useSelector((state) => state.forgetPasswordReducer.loading);
  const language=localStorage.getItem("i18nextLng")
  return (
    <GridContainer sx={{direction:language==="ar" ? "rtl" : "ltr"}} >
      {loading && <GradiantCirculeLoading />}
      <LeftSide />
      <RightSide />
    </GridContainer>
  );
};

export default ForgetPassword;
