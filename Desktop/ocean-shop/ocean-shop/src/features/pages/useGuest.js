import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const useGuest = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // ToDo try to customize this process
  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
      console.log("hello")
    const isGuest =
      new URLSearchParams(location.search).get("guest") === "true";
    if (token && isGuest) {
      navigate("/", { replace: true });
    }
  }, [location, navigate]);

  return null;
};
export default useGuest;
