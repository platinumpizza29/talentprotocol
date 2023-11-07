import axios from "axios";
import useAuthStore from "../zustandStore/store";

export const useAdminController = () => {
  const api = process.env.REACT_APP_API_URL;
  const url = `${api}/v1/org/login`;
  const { login, setUser } = useAuthStore();
  const handleAdminLogin = async (email: string) => {
    const response = await axios.post(url, { email: email, password: "" });
    if (response.status === 200) {
      login(response.data["token"]);
      await localStorage.setItem(
        "org_details",
        JSON.stringify(response.data["org_details"])
      );
      setUser(response.data["org_details"]);
      return "ok";
    } else {
      return "bad";
    }
  };

  const handleAdminRegistration = async (email: string) => {
    const response = await axios.post(url, { email: email });
    if (response.status === 200) {
      await localStorage.setItem(
        "org_details",
        JSON.stringify(response.data["org_details"])
      );
      return "ok";
    } else {
      return "bad";
    }
  };

  return { handleAdminLogin, handleAdminRegistration };
};
