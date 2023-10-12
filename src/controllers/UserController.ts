import axios from "axios";
import { useAuthStore } from "../zustandStore/store"; // Import useState from React

export const useLogin = () => {
  const { setAuth } = useAuthStore();

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await axios.post('http://192.168.1.75:5000/signup', {
        'email': email,
        'password': password
      });

      if (response.status === 200) {
        setAuth(true);
        return "ok";
      } else {
        return "error";
      }
    } catch (error) {
      return "error";
    }
  };

  return { handleLogin }; // Return the function and any other values you want to expose
};
