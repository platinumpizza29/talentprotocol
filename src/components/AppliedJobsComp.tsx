import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AppliedJobs() {
  const status: Record<number, string> = {
    0: "In Progress",
    1: "Closed",
    2: "Under AI Evaluation",
    3: "AI Evaluation Ready",
    4: "Accepted",
  };

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleAppliedJobs = async () => {
    try {
      const data = localStorage.getItem("user_details");
      const userData = JSON.parse(data!);
      const email = userData?.email;
      const url = `http://172.31.24.87:5000/v1/candidate/${email}/applied`;
      const response = await axios.get(url);

      setJobs(response.data["applied"]);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleAppliedJobs();
  }, []);

  if (loading) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );
  }

  return (
    <div className="h-full w-full mx-4 md:mx-12 lg:24 font-my-font">
      <h1>Applied Jobs</h1>
      {jobs.length === 0 ? (
        <div className="h-full w-full flex justify-center items-center">
          <span>No applied jobs found.</span>
        </div>
      ) : (
        <div className="h-96 w-full p-4">
          {jobs.map((item, index) => (
            <div
              className="card w-full bg-base-100 border-2 border-base-300 mt-10"
              key={index}
            >
              <div className="card-body">
                <div className="card-actions flex flex-row justify-between">
                  <div className="">
                    <p className="text-xl font-bold">
                      {item["Opening"]["opening_name"]}
                    </p>
                  </div>
                  {status[item["Application"]["status"]]}
                </div>
                <p>{item["Opening"]["_id"]}</p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      navigate(`/home/${item["Opening"]["_id"]}`, {
                        state: {
                          data: JSON.stringify(item),
                        },
                      })
                    }
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
