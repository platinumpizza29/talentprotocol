import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { DiGithubAlt } from "react-icons/di";
import Lottie from "lottie-react";
import animationData from "../assets/job.json";
import { useLogin } from "../controllers/UserController";
import useAuthStore from "../zustandStore/store";

export default function LoginPage() {
  const navigate = useNavigate();
  const setLoading = useAuthStore((state) => state.setLoading);
  const loading = useAuthStore((state) => state.loading);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin } = useLogin();

  const handleSubmit = async () => {
    try {
      const res = await handleLogin(email, password);
      if (res === "ok") {
        setLoading(true);
        navigate("/home");
      } else if (res === "error") {
        console.log("error");
        setLoading(false);
      } else {
        console.log("error");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen grid grid-cols-1 md:grid-cols-2 p-6 m-0">
      <div
        className="hidden md:flex rounded-2xl items-center justify-center"
        style={{ width: "80%", height: "80%", objectFit: "cover" }}
      >
        {/* image to be handled later */}
        <Lottie animationData={animationData} height={"100%"} width={"100%"} />
      </div>

      <div className="h-full w-full flex items-center p-4">
        {/* login form starts here */}
        <div className="h-1/2 w-full flex flex-col justify-center items-center">
          <h1 className="font-bold">Hi welcome!</h1>
          <h3>lets get you signed in!</h3>
          <div className="form-control w-full max-w-xs">
            {/* email text field */}
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="you@example.com"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* password text field */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="8 characters long"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* other */}
            <div className="flex flex-row justify-between items-center mt-6">
              <button className="btn btn-ghost">Forgot password?</button>
              <button className="btn btn-ghost">New User?</button>
            </div>
            <button
              className="btn btn-block btn-primary mt-4"
              onClick={handleSubmit}
            >
              {loading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Login"
              )}
            </button>
            <div className="divider">OR</div>
            {/* other login options will go here */}
            <div className="flex flex-row justify-evenly items-center mt-6">
              <button className="btn btn-outline">
                <FcGoogle />
                Google
              </button>
              <button className="btn btn-outline">
                <DiGithubAlt />
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
