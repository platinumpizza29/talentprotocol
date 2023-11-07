import axios from "axios";
import { useEffect, useState } from "react";

export default function TableComp() {
  const status: Record<number, string> = {
    0: "In Progress",
    1: "Closed",
    2: "Under AI Evaluation",
    3: "AI Evaluation Ready",
    4: "Accepted",
  };

  const progress: Record<number, number> = {
    0: 25,
    1: 100,
    2: 50,
    3: 75,
    4: 100,
  };

  const [data, setData] = useState([]);

  const handleUserAppliedJobs = async (email: string) => {
    const api = process.env.REACT_APP_API_URL;
    const url = `${api}/v1/candidate/${email}/applied`;
    const response = await axios.get(url);
    if (response.status === 200) {
      setData(response.data["applied"]);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("user_details");
    const user = JSON.parse(data!);
    const email = user["email"];
    handleUserAppliedJobs(email);
  }, []);

  return (
    <div className="overflow-x-scroll h-full w-full">
      <table className="table-lg table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Position</th>
            <th>Status</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data && data.length > 0 ? (
            data.map((item, index) => {
              // Check if the required properties exist in the item object
              if (
                item &&
                item["Opening"] &&
                item["Opening"]["org_name"] &&
                item["Opening"]["opening_name"] &&
                item["Application"] &&
                item["Application"]["status"] !== undefined &&
                status[item["Application"]["status"]] !== undefined &&
                progress[item["Application"]["status"]] !== undefined
              ) {
                return (
                  <tr key={index}>
                    <td>{item["Opening"]["org_name"]}</td>
                    <td>{item["Opening"]["opening_name"]}</td>
                    <td>{status[item["Application"]["status"]]}</td>
                    <td>
                      <progress
                        className="progress progress-secondary w-56"
                        value={progress[item["Application"]["status"]]}
                        max="100"
                      ></progress>
                    </td>
                  </tr>
                );
              } else {
                // Handle the case where the required properties are missing or undefined
                return (
                  <tr key={index}>
                    <td>Invalid data for row {index}</td>
                  </tr>
                );
              }
            })
          ) : (
            <tr>
              <td>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
