import { useSelector } from "react-redux";
import GridContainer from "../../../../components/Auth/GridContainer";
import LeftSide from "./page/LeftSide/LeftSide";
import GradiantCirculeLoading from "../../../../core/GradiantCirculeLoading";
import useRedirect from "../hooks/useRedirect";
import RightSide from "./page/RightSide/RightSide";
const VerificationCode = () => {
  useRedirect();
  const loading = useSelector((state) => state.VerificationReducer.loading);
  const language = localStorage.getItem("i18nextLng")
  return (
    <GridContainer sx={{direction:language==="ar" ? "rtl" : "ltr"}}>
      {loading && <GradiantCirculeLoading />}
      <LeftSide />
      <RightSide />
    </GridContainer>
  );
};

export default VerificationCode;
