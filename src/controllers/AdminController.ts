import axios from "axios";

export const AdminController = () => {
  const url = "http://3.108.5.175:5000/v1/org/login";

  const handleAdminLogin = async (email: string) => {
    const response = await axios.post(url, { email: email, password: "" });
    if (response.status === 200) {
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
