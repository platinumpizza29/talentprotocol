import { FcGoogle } from "react-icons/fc";
import { DiGithubAlt } from "react-icons/di";
// import { useState } from "react";

export default function RegisterPage() {
  // const [fname, setFname] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleRegister = async () => {
  //   console.log(fname, email, password);
  // };

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
                //  onChange={(e) => setFname(e.target.value)}
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full max-w-xs"
                // onChange={(e) => setEmail(e.target.value)}
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
                  //  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* other */}
              <div className="flex flex-row justify-end items-center mt-6">
                <button className="btn btn-ghost">Already a User?</button>
              </div>
              <button
                className="btn btn-block btn-primary mt-4"
                //  onClick={handleRegister}
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
