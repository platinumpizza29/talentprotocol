import { ChangeEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useAuthStore from "../zustandStore/store";
import { useTestController } from "../controllers/AssessmentController";

export default function TechnicalQuesPage() {
  const location = useLocation();
  const data = location.state || {};
  const { handleTestSubmit } = useTestController();

  const code = useAuthStore((state) => state.code);
  const [codeAnalysisQues, setCodeAnalysisQues] = useState([]);
  const [techQues, setTechQues] = useState([]);
  const [openingId, setOpeningId] = useState("");
  const [assignmentId, setAssignmentId] = useState("");
  const [techAnswers, setTechAnswers] = useState(
    Array(techQues.length).fill("")
  );
  const [codeAnalysisAnswers, setCodeAnalysisAnswers] = useState(
    Array(codeAnalysisQues.length).fill("")
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (
    e: ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const updatedValues = [...codeAnalysisAnswers];
    updatedValues[index] = e.target.value;
    console.log(updatedValues);

    setCodeAnalysisAnswers(updatedValues);
  };

  const handleInputChangeTech = (
    e: ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const updatedValues = [...techAnswers];
    updatedValues[index] = e.target.value;
    setTechAnswers(updatedValues);
  };

  const handleSubmitAnswers = async () => {
    const data = localStorage.getItem("user_details");
    const decoded = JSON.parse(data!);
    const email = decoded["email"];
    const res = handleTestSubmit(
      email,
      openingId,
      assignmentId,
      code,
      codeAnalysisAnswers,
      techAnswers
    );
    console.log(res);
  };

  useEffect(() => {
    setCodeAnalysisQues(data.data["assignment"]["code_analysis_questions"]);
    setTechQues(data.data["assignment"]["technical_questions"]);
    setAssignmentId(data.data["assignment"]["_id"]);
    setOpeningId(data.data["assignment"]["opening_id"]);
  }, [data.data]);

  return (
    <div className="h-screen w-screen">
      <div className="navbar">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">
            Technical Questions
          </a>
        </div>
        <div className="navbar-end">
          <a
            className="btn btn-accent btn-outline"
            onClick={handleSubmitAnswers}
          >
            Submit
          </a>
        </div>
      </div>
      <div className="mx-4 md:mx-12 lg:mx-24 xl:mx-48">
        <h1>Code Analysis Questions</h1>
        {codeAnalysisQues.map((item, index) => (
          <div key={index} className="flex flex-col m-10">
            <span className="text-xl">{item}</span>
            <textarea
              className="textarea textarea-primary"
              placeholder="Answer"
              onChange={(e) => handleInputChange(e, index)}
            ></textarea>
          </div>
        ))}
        <h1>Technical Questions</h1>
        {techQues.map((item, index) => (
          <div className="flex flex-col m-10">
            <p>{item}</p>
            <textarea
              className="textarea textarea-primary"
              placeholder="Answer"
              onChange={(e) => handleInputChangeTech(e, index)}
            ></textarea>
          </div>
        ))}
      </div>
    </div>
  );
}
