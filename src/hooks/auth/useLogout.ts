import Cookies from "js-cookie";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";

export const useLogout = (): (() => void) => {
  const authContext = useContext(AuthContext);

  const { setIsAuthenticated } = authContext!;

  const navigate = useNavigate();

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return logout;
};
