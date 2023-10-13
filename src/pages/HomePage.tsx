import axios from "axios";
import { useEffect, useState } from "react";
import { BiMenuAltLeft, BiCaretRight, BiFilterAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../zustandStore/store";

export default function HomePage() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);
  const [homePage, setHomePage] = useState([]);

  const getHomePage = async () => {
    const userDetails = localStorage.getItem("user_details");
    const user = JSON.parse(userDetails!);
    const userEmail = user["email"];
    const response = await axios.get(
      `http://192.168.1.75:5000/v1/candidate/${userEmail}/home`
    );
    if (response.status === 200) {
      setHomePage(response.data["job_openings"]);
    }
  };

  useEffect(() => {
    getHomePage();
  }, [homePage]);

  return (
    <div className="h-screen w-screen bg-base-100 overflow-y-auto font-my-font">
      {/* navbar starts from here */}
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col justify-center items-center">
          {/* Page content here */}
          <div className="navbar">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-ghost drawer-button lg:hidden"
            >
              <BiMenuAltLeft className="text-2xl" />
            </label>
            {/* header and navigation */}
            <div className="flex flex-row justify-between items-center w-full">
              <a className="btn btn-ghost normal-case text-2xl font-my-font-bold">
                Talent Protocol
              </a>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="user.png" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">Profile</a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a onClick={logout}>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* cards comp begins here */}
          <div className="h-full w-full p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {homePage.map((item, index) => (
              <div
                className="card card-compact max-w-96 h-96 m-4 bg-base-100 shadow-xl md:w-full"
                key={index}
              >
                <figure>
                  <img src="nike.jpeg" alt="Shoes" />
                </figure>
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
            ))}
          </div>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          {homePage.map((item, index) => (
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
          ))}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-100 h-full w-72 md:w-80 p-6">
            <li className="">
              <a className="flex flex-row justify-between items-center">
                Applied Jobs <BiCaretRight className="text-lg" />
              </a>
            </li>
            <li>
              <a className="flex flex-row justify-between items-center">
                Saved Jobs <BiCaretRight className="text-lg" />
              </a>
            </li>
            <li>
              <a className="flex flex-row justify-between items-center">
                Filters <BiFilterAlt className="text-lg" />
              </a>
              <ul>
                <li>
                  <a>Software Developer</a>
                </li>
                <li>
                  <a>Front End Developer</a>
                </li>
                <li>
                  <a>Back End Developer</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
