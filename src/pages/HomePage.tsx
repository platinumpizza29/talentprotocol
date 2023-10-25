import { BiMenuAltLeft, BiCaretRight, BiFilterAlt } from "react-icons/bi";
import useAuthStore from "../zustandStore/store";
import JobListingComp from "../components/JobListingComp";
import DashboardComp from "../components/DashboardComp";

export default function HomePage() {
  const logout = useAuthStore((state) => state.logout);
  const currentPage = useAuthStore((state) => state.currentPage);
  const setCurrentPage = useAuthStore((state) => state.setCurrentPage);

  const MyComp = () => {
    if (currentPage === 0) {
      return <DashboardComp />;
    } else {
      return <JobListingComp />;
    }
  };

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
            <div className="flex flex-row justify-end items-center w-full">
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
          <MyComp />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu bg-base-100 h-full w-72 md:w-80 p-6">
            <a className="btn btn-ghost normal-case text-2xl font-my-font-bold">
              Talent Protocol
            </a>
            <div className="divider"></div>
            <li>
              <a
                className="flex flex-row justify-between items-center"
                onClick={() => setCurrentPage(0)}
              >
                DashBoard <BiCaretRight className="text-lg" />
              </a>
            </li>
            <li>
              <a
                className="flex flex-row justify-between items-center"
                onClick={() => setCurrentPage(1)}
              >
                Job Listing <BiCaretRight className="text-lg" />
              </a>
            </li>
            <li>
              <a className="flex flex-row justify-between items-center">
                Filters <BiFilterAlt className="text-lg" />
              </a>
              <ul>
                <li>
                  <input
                    type="text"
                    placeholder="Filter"
                    className="input input-bordered w-full max-w-xs"
                  />
                </li>
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
          </ul>
        </div>
      </div>
    </div>
  );
}
