import axios from "axios";
import  useAuthStore  from "../zustandStore/store"; // Import useState from React


export const useLogin = () => {
  const { login } = useAuthStore();

  const handleLogin = async (email: string, password: string) => {
    const url:string = "http://192.168.1.75:5000";
    try {
      const response = await axios.post(`${url}/login`, {
        'email': email,
        'password': password
      });

      if (response.status === 200) {
        login(response.data['token']);
        return "ok";
      } else {
        return "error";
      }
    } catch (error) {
      return "server error";
    }
  };

  const handleRegistration = async (full_name: string, email:string, password:string, age:string) =>{
    const url = "http://192.168.1.75:5000";
    try {
      const response = await axios.post(`${url}/signup`, {
        "full_name": full_name,
        "email": email,
        "password":password,
        "age": age
      });
      if (response.status === 200) {
        return "ok";
      } else {
        return "error";
      }
    } catch (error) {
      return "Server Error";
    }
  }

  return { handleLogin, handleRegistration }; // Return the function and any other values you want to expose
};
