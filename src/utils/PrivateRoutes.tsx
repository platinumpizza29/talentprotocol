import { Outlet, Navigate } from "react-router-dom";
import useAuthStore from "../zustandStore/store";

const PrivateRoutes = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  return isAuth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoutes;
