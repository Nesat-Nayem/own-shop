import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import SignInForm from "../Authentication/SignInForm";
// import Signin from "../pages/Signin";

const useAuth = () => {
  const user = useSelector((state) => state.user.user);

  return user && user.token;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <SignInForm />;
};

export default ProtectedRoutes;