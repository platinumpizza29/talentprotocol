import { BiMenuAltLeft } from "react-icons/bi";
import CurrentOpeningCards from "../../components/AdminComp/cardscomp";
import AdminTableComp from "../../components/AdminComp/tablecomp";
import useAuthStore from "../../zustandStore/store";

export default function AdminDash() {
  const logout = useAuthStore((state) => state.adminLogout());
  return (
    <div className="h-screen w-screen bg-base-100 font-my-font overflow-y-auto">
      {/* drawer starts here */}
      <div className="drawer lg:drawer-open bg-base-100">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}

          {/* navbar goes here */}
          <div className="h-full w-full">
            <div className="navbar bg-base-100 w-full flex flex-row justify-between shadow-sm">
              <div className="">
                <label
                  htmlFor="my-drawer-2"
                  className="btn btn-ghost drawer-button lg:hidden"
                >
                  <BiMenuAltLeft className="text-2xl" />
                </label>

                <a className="btn btn-ghost normal-case text-3xl">Admin</a>
              </div>
              {/* search input */}
              <div className="">
                <input
                  type="text"
                  placeholder="Search"
                  className="input w-full max-w-xs"
                />
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="user.png" alt="profile pic" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a onClick={() => logout}>Logout</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* card comp */}
            <div className="mt-10 w-full">
              <CurrentOpeningCards />
            </div>

            {/* Table comp starts here */}
            <div className="mt-10">
              <AdminTableComp />
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu menu-md p-4 w-80 min-h-full bg-base-100 text-base-content shadow-sm">
            {/* Sidebar content here */}
            <h2 className="text-3xl font-bold">Talent Protocol</h2>
            <div className="divider"></div>
            <li className="mt-10">
              <a>Dashboard</a>
            </li>
            <li>
              <a>Schedule</a>
            </li>
            <li>
              <a>Create Opening</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
