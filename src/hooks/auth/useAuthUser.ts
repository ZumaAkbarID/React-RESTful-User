import Cookies from "js-cookie";

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

export const useAuthUser = () => {
  const user = Cookies.get("user");

  return user ? (JSON.parse(user) as User) : null;
};
