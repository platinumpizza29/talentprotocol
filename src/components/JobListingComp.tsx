import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import useAuthStore from "../zustandStore/store";

export default function JobListingComp() {
  const url: string = "http://3.108.5.175:5000";
  // const search = useAuthStore((state) => state.search);
  const [homePage, setHomePage] = useState([]);
  const navigate = useNavigate();
  const getJobListing = async () => {
    const userDetails = localStorage.getItem("user_details");
    const user = JSON.parse(userDetails!);
    const userEmail = user["email"];
    const response = await axios.get(`${url}/v1/candidate/${userEmail}/home`);
    if (response.status === 200) {
      setHomePage(response.data["job_openings"]);
    }
  };

  useEffect(() => {
    getJobListing();
  }, []);
  return (
    <div className="h-full w-full overflow-y-auto">
      <h1 className="m-4">Discover</h1>
      {/* <div className="h-full w-full p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> */}
      <div className="m-4">
        {homePage && homePage.length > 0 ? (
          homePage.map((item, index) => (
            <div
              className="card card-compact w-full border-2 border-base-300 bg-base-100 shadow-xl mb-4"
              key={index}
            >
              <div className="card-body">
                <h2 className="card-title">{item["org_name"]}</h2>
                <p>{item["opening_name"]}</p>

                <div className="card-actions justify-end">
                  <button
                    className="btn btn-accent"
                    onClick={() => {
                      const dialog = document.getElementById(
                        `${index}`
                      ) as HTMLDialogElement;
                      dialog?.showModal();
                    }}
                  >
                    View Details
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      navigate("/test", {
                        state: { item: JSON.stringify(item) },
                      })
                    }
                  >
                    Assessment
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="h-full w-full text-gray-500 flex justify-center items-center ">
            <span className="loading loading-spinner loading-md"></span>
          </div>
        )}
      </div>

      {homePage && homePage.length > 0 ? (
        homePage.map((item, index) => (
          <dialog
            id={`${index}`}
            className="modal modal-bottom sm:modal-middle"
            key={index}
          >
            <div className="modal-box">
              <div className="flex flex-row justify-between items-center">
                <h3 className="font-bold text-2xl">{item["org_name"]}</h3>
                <h3>{item["job_posted_at"]}</h3>
              </div>
              <span className="text-base-400">{item["org_id"]}</span>
              <ul className="py-4">
                <li className="text-xl font-bold">Requiments:</li>
                <p>{item["jd"]}</p>
              </ul>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        ))
      ) : (
        <div className="text-center text-gray-500"></div>
      )}
    </div>
  );
}
