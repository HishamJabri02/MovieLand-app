import { Navigate, Outlet, useLocation } from "react-router-dom";
import { memo, useEffect, useState } from "react";

const PrivateRoute = () => {
  const location = useLocation();
  const [token, setToken] = useState(
    sessionStorage.getItem("token") || localStorage.getItem("token")
  );
  const isGuest = sessionStorage.getItem("guest")
  useEffect(() => {
    setToken(sessionStorage.getItem("token") || localStorage.getItem("token"));
  }, [location]);
  return token || isGuest ? <Outlet /> : <Navigate to="/login" replace />;
};
export default memo(PrivateRoute);
