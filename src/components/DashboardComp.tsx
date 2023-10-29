import TableComp from "./TableComp";
import StatComp from "./StatComp";
import CalenderView from "./CalenderView";
import animationData from "../assets/welcome.json";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function DashboardComp() {
  const [name, setName] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("user_details");
    const decodedUser = JSON.parse(data!);
    setName(decodedUser["full_name"]);
  }, []);

  return (
    <div className="h-full w-full font-my-font p-4">
      {/* \navbar starts here */}
      {/* stat cards start here */}
      <div className="w-full max-h-full flex flex-col bg-purple-500 flex-wrap p-4 rounded-xl justify-evenly items-center md:flex-row">
        <div className="h-60 w-60">
          <Lottie animationData={animationData} />
        </div>
        <div className="">
          <h1 className="m-4 text-base-300">Hello {name},</h1>
          <StatComp />
        </div>
      </div>
      {/* table comp div */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="mt-10 ">
          <TableComp />
        </div>
        <div className="h-96 w-full overflow-auto p-4">
          <CalenderView />
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content mt-10">
        <aside>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
}
