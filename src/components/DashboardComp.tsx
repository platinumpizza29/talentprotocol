import TableComp from "./TableComp";
import BarChartComp from "./LineChartComp";
import StatComp from "./StatComp";

export default function DashboardComp() {
  return (
    <div className="h-full w-full font-my-font">
      {/* \navbar starts here */}
      {/* stat cards start here */}
      <h1 className="m-4">Dashboard</h1>
      <div className="w-full max-h-full flex flex-row justify-evenly flex-wrap">
        <StatComp />
      </div>
      {/* graph div starts here */}
      <div className="w-full mt-20 grid grid-cols-1 md:grid-cols-2">
        <div className="h-96 p-8">
          <div className="card w-full h-full bg-base-100 shadow-xl border-2 border-primary-focus">
            <div className="card-body">
              <h2 className="card-title">Chart Goes here</h2>
              <BarChartComp />
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="card w-full h-full bg-base-100 shadow-xl border-2 border-primary-focus">
            <div className="card-body">
              <h2 className="card-title">My Tasks</h2>
              <ul className="menu bg-base-200 w-full h-full rounded-box">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* table comp div */}
      <div className="mt-10 ">
        <TableComp />
      </div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content mt-10">
        <aside>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
}
