import TableComp from "./TableComp";

export default function DashboardComp() {
  return (
    <div className="h-full w-full font-my-font overflow-x-hidden">
      {/* \navbar starts here */}
      {/* stat cards start here */}
      <h1 className="m-4">Dashboard</h1>
      <div className="w-full max-h-full flex flex-row justify-evenly flex-wrap">
        <div className="card w-72 bg-base-100 shadow-xl border-2 m-2">
          <div className="card-body">
            <p>We are using cookies for no reason.</p>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-xl border-2 m-2">
          <div className="card-body">
            <p>We are using cookies for no reason.</p>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-xl border-2 m-2">
          <div className="card-body">
            <p>We are using cookies for no reason.</p>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-xl border-2 m-2">
          <div className="card-body">
            <p>We are using cookies for no reason.</p>
          </div>
        </div>
      </div>
      {/* graph div starts here */}
      <div className="w-full mt-20 grid grid-cols-1 md:grid-cols-2">
        <div className="h-96 p-8">
          <div className="card w-full h-full bg-base-100 shadow-xl border-2 border-primary-focus">
            <div className="card-body">
              <h2 className="card-title">Chart Goes here</h2>
              {/* <BarChart /> */}
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="card w-full h-full bg-base-100 shadow-xl border-2 border-primary-focus">
            <div className="card-body">
              <h2 className="card-title">My Tasks</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
      </div>
      {/* table comp div */}
      <div className="">
        <TableComp />
      </div>
    </div>
  );
}
