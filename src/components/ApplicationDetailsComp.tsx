import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function ApplicationDetails() {
  const location = useLocation();
  const itemData = location.state && JSON.parse(location.state.data);

  if (!itemData) {
    // Handle the case where data is not available
    return <div>Data not available.</div>;
  }

  return (
    <div className="h-screen w-screen bg-base-200 font-my-font overflow-y-auto">
      {/* Render other properties from itemData as needed */}
      <motion.div
        className="h-full w-full p-10"
        transition={{ delay: 0.1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="w-full flex flex-row justify-between items-center">
          <h1>AI Overview</h1>
          <span className="font-bold text-2xl">
            Rating:{itemData.Application.evaluation.rating}
          </span>
        </div>
        <div className="">
          <div className="h-full w-full mt-10 p-8">
            <span className="font-bold text-2xl">Code Analysis</span>
            <div className="divider"></div>
            <div className="">
              {itemData.Application.evaluation.code_analysis}
            </div>
          </div>
        </div>
        <div className="w-full mt-1 p-8">
          <span className="font-bold text-2xl">Technical Analysis</span>
          <div className="divider"></div>
          <div className="">
            {itemData.Application.evaluation.evaluation_summary}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

{
  /* <div className="m-4 md:mx-12 lg:mx-24 xl:mx-48 p-8">
        <div className="w-full h-40 flex justify-between items-center p-8">
          <span className="text-4xl">Application Overview</span>
          <div className="flex justify-evenly items-center">
            <span className="font-bold text-2xl">Rating:</span>
            <span className="font-bold text-2xl">
              {itemData.Application.evaluation.rating}
            </span>
          </div>
        </div> */
}

{
  /* grid starts here */
}
//   <div className="h-full w-full mt-10">
//     <span className="font-bold text-2xl">Code Analysis</span>
//     <div className="divider"></div>
//     <div className="">
//       {itemData.Application.evaluation.code_analysis}
//     </div>
//   </div>
//   <div className="w-full mt-10">
//     <span className="font-bold text-2xl">Technical Analysis</span>
//     <div className="divider"></div>
//     <div className="">
//       {itemData.Application.evaluation.evaluation_summary}
//     </div>
//   </div>
// </div>
