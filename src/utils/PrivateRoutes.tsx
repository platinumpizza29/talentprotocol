import { Outlet, Navigate } from "react-router-dom";
import { useAuthStore } from "../zustandStore/store";

const PrivateRoutes = () => {
  const { isAuth } = useAuthStore();
  return isAuth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoutes;
