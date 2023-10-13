import { FcGoogle } from "react-icons/fc";
import { DiGithubAlt } from "react-icons/di";
import { useLogin } from "../controllers/UserController";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { handleRegistration } = useLogin();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async () => {
    const res = await handleRegistration(fullName, email, password, age);
    if (res === "ok") {
      navigate("/login");
    } else if (res === "error") {
      <div className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Error! Invalid Credentials</span>
      </div>;
    } else {
      <div className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Server Error! Please try again in some time</span>
      </div>;
    }
  };

  return (
    // register page main div
    <div className="h-screen w-screen grid grid-cols-1 md:grid-cols-2 p-6">
      <div className="hidden md:block bg-red-50 rounded-xl">
        {/* image to handled later */}1
      </div>
      <div className="">
        <div className="h-full w-full flex items-center p-4">
          {/* login form starts here */}
          <div className="h-1/2 w-full flex flex-col justify-center items-center">
            <h1 className="font-bold">Hi welcome!</h1>
            <h3>lets get you signed in!</h3>
            <div className="form-control w-full max-w-xs">
              {/* email text field */}
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setFullName(e.target.value)}
              />
              <label className="label">
                <span className="label-text">Age</span>
              </label>
              <input
                type="text"
                placeholder="24"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setAge(e.target.value)}
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                  type="password"
                  placeholder="8 characters long"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* other */}
              <div className="flex flex-row justify-end items-center mt-6">
                <button className="btn btn-ghost">Already a User?</button>
              </div>
              <button
                className="btn btn-block btn-primary mt-4"
                onClick={handleSubmit}
              >
                Register
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
    </div>
  );
}
