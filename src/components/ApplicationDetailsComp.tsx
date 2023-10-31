import { useLocation } from "react-router-dom";

export default function ApplicationDetails() {
  const location = useLocation();
  const itemData = location.state && JSON.parse(location.state.data);

  if (!itemData) {
    // Handle the case where data is not available
    return <div>Data not available.</div>;
  }

  return (
    <div className="h-screen w-screen">
      {/* Render other properties from itemData as needed */}
      <div className="p-8">
        <div className="w-full h-40 flex justify-between items-center border-2 border-primary rounded-2xl shadow-lg p-8">
          <span className="text-4xl">Application Overview</span>
          <div className="flex justify-evenly items-center">
            <span className="font-bold text-2xl">Rating:</span>
            <span className="font-bold text-2xl">
              {itemData.Application.evaluation.rating}/10
            </span>
          </div>
        </div>
        {/* grid starts here */}
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center mt-10">
          <div className="">
            <h1>Code Analysis</h1>
          </div>
          <div className="mockup-browser bg-primary border">
            <div className="mockup-browser-toolbar">
              <div className="input">Code Analysis</div>
            </div>
            <div className="flex justify-center px-4 py-16 bg-primary text-base-300">
              {itemData.Application.evaluation.code_analysis}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center mt-10">
          <div className="">
            <h1>Evaluation Summary</h1>
          </div>
          <div className="mockup-browser bg-primary border">
            <div className="mockup-browser-toolbar">
              <div className="input">Evaluation Summary</div>
            </div>
            <div className="flex flex-col-reverse justify-center px-4 py-16 bg-primary text-base-300 md:flex-row">
              {itemData.Application.evaluation.evaluation_summary}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
