import { PiSuitcaseLight } from "react-icons/pi";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function AllOpenings() {
  const location = useLocation();
  const data: [] = location.state ? JSON.parse(location.state.data) : [];

  return (
    <div className="h-screen w-screen bg-base-100 overflow-y-auto">
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost normal-case text-xl">All Openings</a>
      </div>
      <div className="mx-4 md:mx-12 lg:mx-24 xl:48">
        {data.length === 0 ? (
          <div className="">button</div>
        ) : (
          <div className="w-full p-4 gap-4 grid grid-cols-1 place-items-center md:grid-cols-3">
            {data.map((item, index) => (
              <motion.div
                className="card h-52 w-full bg-base-100 border-2 m-2"
                key={index}
                transition={{ delay: 0.1 * index }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="card-body">
                  <div className="w-12 h-12 flex justify-center items-center bg-purple-400 rounded-xl">
                    <PiSuitcaseLight className="text-3xl text-primary" />
                  </div>
                  <h2 className="card-title">{item["opening_name"]}</h2>
                  <p>{item["org_name"]}</p>
                  <div className="flex w-full">
                    <p className="text-xl font-bold">200</p>
                    <p>Applicants</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
