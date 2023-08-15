import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const useRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      navigate("/", { replace: true });
    }
  }, [location, navigate]);
  return null;
};
export default useRedirect;
