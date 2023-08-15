import { useSelector } from "react-redux";
import GridContainer from "../../../../../components/Auth/GridContainer";
import GradiantCirculeLoading from "../../../../../core/GradiantCirculeLoading";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
const ForgetPassword = () => {
  const loading = useSelector((state) => state.forgetPasswordReducer.loading);

  return (
    <GridContainer>
      {loading && <GradiantCirculeLoading />}
      <LeftSide />
      <RightSide />
    </GridContainer>
  );
};

export default ForgetPassword;
