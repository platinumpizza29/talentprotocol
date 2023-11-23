import { ChangeEvent, useEffect, useState } from "react";
import { RiAddFill, RiDeleteBin7Line } from "react-icons/ri";

export default function CreateOpeningPage() {
  const [orgName, setOrgName] = useState("");
  const [techQuestions, setTechQuestions] = useState([""]);
  const [analysisQuestions, setAnalysisQuestions] = useState([""]);
  const [range, setRange] = useState(0);

  const handleAddAnalysisQuestion = () => {
    setAnalysisQuestions([...analysisQuestions, ""]); // Add a new empty input when the button is pressed
  };

  const handleAnalysisQuestionChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const updatedQuestions = [...analysisQuestions];
    updatedQuestions[index] = event.target.value;
    setAnalysisQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setTechQuestions([...techQuestions, ""]); // Add a new empty input when the button is pressed
  };

  const handleDeleteQuestion = (index: number, isTechQuestion: boolean) => {
    if (isTechQuestion) {
      const updatedQuestions = [...techQuestions];
      updatedQuestions.splice(index, 1);
      setTechQuestions(updatedQuestions);
    } else {
      const updatedQuestions = [...analysisQuestions];
      updatedQuestions.splice(index, 1);
      setAnalysisQuestions(updatedQuestions);
    }
  };

  const handleQuestionChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const updatedQuestions = [...techQuestions];
    updatedQuestions[index] = event.target.value;
    setTechQuestions(updatedQuestions);
  };

  useEffect(() => {
    const data = localStorage.getItem("org_details");
    const parsedData = JSON.parse(data!);
    const orgName = parsedData["org_name"];
    setOrgName(orgName);
  }, []);

  return (
    <div className="h-screen w-screen font-my-font bg-base-200 p-8 overflow-y-scroll">
      <div className="h-full w-full">
        <h2 className="text-3xl">Create Opening</h2>
        {/* form starts here */}
        <div className="w-full border-2 rounded-xl p-8 bg-white mt-10 flex flex-col justify-center items-center">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl">Organisation</span>
            </label>
            <input
              type="text"
              placeholder={orgName}
              className="input input-bordered w-full max-w-xs"
              disabled
            />
            <label className="label">
              <span className="label-text text-xl">Position Name</span>
            </label>
            <input
              type="text"
              placeholder="Software Developer"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text text-xl">Job Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Job Description"
            ></textarea>
            <label className="label">
              <span className="label-text text-xl">Problem Statement</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Job Description"
            ></textarea>
            {/* slider */}
            <div className="my-10">
              <label htmlFor="">
                <h2 className="label-text text-xl">Cut-Off Score</h2>
              </label>
              <input
                type="range"
                min={0}
                max="100"
                value={range}
                onChange={(event) => setRange(parseInt(event.target.value))}
                className="range range-sm range-primary"
                step="25"
              />
              <div className="w-full flex justify-between text-xs px-2">
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <label htmlFor="">
                <h2 className="label-text text-xl">Technical Questions</h2>
              </label>
              <button className="btn btn-ghost" onClick={handleAddQuestion}>
                <RiAddFill className="text-2xl" />
              </button>
            </div>
            <div className="max-w-full">
              {techQuestions.map((item, index) => (
                <div className="w-full flex flex-row justify-between items-center ">
                  <input
                    type="text"
                    placeholder="Tech Question"
                    className="input input-bordered w-full max-w-xs"
                    value={item}
                    onChange={(e) => handleQuestionChange(index, e)}
                  />
                  <button className="btn btn-ghost m-2">
                    <RiDeleteBin7Line
                      className="text-error"
                      onClick={() => handleDeleteQuestion(index, true)}
                    />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex flex-row justify-between items-center">
              <label htmlFor="">
                <h2 className="label-text text-xl">Code Analysis Questions</h2>
              </label>
              <button
                className="btn btn-ghost"
                onClick={handleAddAnalysisQuestion}
              >
                <RiAddFill className="text-2xl" />
              </button>
            </div>
            <div className="">
              {analysisQuestions.map((item, index) => (
                <div className="w-full flex flex-row justify-between items-center ">
                  <input
                    type="text"
                    placeholder="Code Analysis Questions"
                    className="input input-bordered w-full max-w-xs"
                    value={item}
                    onChange={(e) => handleAnalysisQuestionChange(index, e)}
                  />
                  <button
                    className="btn btn-ghost m-2"
                    onClick={() => handleDeleteQuestion(index, false)}
                  >
                    <RiDeleteBin7Line className="text-error" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
