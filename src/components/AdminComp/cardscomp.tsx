import axios from "axios";
import { useEffect, useState } from "react";
import { PiSuitcaseLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function CurrentOpeningCards() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const handleCurrentOpenings = async () => {
    const url = "http://localhost:5000/v1/org/TalentProtocol/openings";
    const response = await axios.get(url);
    if (response.status === 200) {
      setData(response.data["openings"]);
    } else {
      console.log("error while fetching current opening");
    }
  };

  useEffect(() => {
    handleCurrentOpenings();
  }, []);

  return (
    <div className="max-h-max w-full flex flex-col justify-evenly md:flex-row">
      {data.length === 0 ? (
        <div className="">button</div>
      ) : (
        <div className="w-full">
          <div className="flex justify-between mx-4">
            <h2 className="text-2xl mb-4">Current Openings</h2>
            <button
              className="btn btn-link"
              onClick={() =>
                navigate("/v1/org/all_openings", {
                  state: { data: JSON.stringify(data) },
                })
              }
            >
              SEE ALL
            </button>
          </div>
          <div className="w-full p-4 gap-4 grid grid-cols-1 place-items-center md:grid-cols-3">
            {data.slice(0, 3).map((item, index) => (
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
        </div>
      )}
    </div>
  );
}
