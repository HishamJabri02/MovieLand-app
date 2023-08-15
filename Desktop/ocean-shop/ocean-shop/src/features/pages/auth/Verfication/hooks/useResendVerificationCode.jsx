import { useEffect, useState } from "react";
import { forgetPasswordAsync } from "../../ForgetPassword/state/forgetPasswordAsync";
import { useDispatch } from "react-redux";

function useResendVerificationCode(phoneNumber, resendDelay = 30000) {
  const [disableResend, setDisableResend] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [disableTime, setDisableTime] = useState(resendDelay);
  const dispatch = useDispatch();

  const handleResendClick = async () => {
    setDisableResend(true);
    const response = await dispatch(
      forgetPasswordAsync({ phoneNumber: phoneNumber.phoneNumber })
    );
    console.log(response);
    if (response.payload) {
      setLastClickTime(Date.now());
      setDisableTime(disableTime * 2);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - lastClickTime;
      if (elapsedTime >= disableTime) {
        clearInterval(interval);
        setDisableResend(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [lastClickTime, disableTime]);

  return { disableResend, handleResendClick };
}
export default useResendVerificationCode;
