import CodeEditorComp from "../components/CodeEditorComp";
import TechnicalQuestionComp from "../components/TechnicalQuesComp";
import { useState } from "react";

export default function AssessmentPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-screen bg-base-100 font-my-font">
      {/* drawer starts from here */}
      <div className="navbar">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">Assessment</a>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost rounded-btn">
            Select Language
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-accent" onClick={() => setCount(count + 1)}>
            Submit
          </a>
        </div>
      </div>
      {/* code editor div will come here */}
      <div className="h-full mx-4 md:mx-12 lg:mx-24 xl:48">
        {count == 0 ? <CodeEditorComp /> : <TechnicalQuestionComp />}
      </div>
    </div>
  );
}
