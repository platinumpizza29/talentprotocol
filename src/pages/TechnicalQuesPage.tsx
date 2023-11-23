/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, ReactNode, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../zustandStore/store";
import { useTestController } from "../controllers/AssessmentController";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../assets/done.json";

export default function TechnicalQuesPage() {
  const location = useLocation();
  const { data } = location.state || {};
  const { handleTestSubmit } = useTestController();

  const doneRef = useRef<LottieRefCurrentProps>(null);
  const code = useAuthStore((state) => state.code);
  const navigate = useNavigate();
  const [codeAnalysisQues, setCodeAnalysisQues] = useState([""]);
  const [techQues, setTechQues] = useState([""]);
  const [assignmentId, setAssignmentId] = useState("");
  const [techAnswers, setTechAnswers] = useState([""]);
  const [isOpen, setIsOpen] = useState(false);
  const [codeAnalysisAnswers, setCodeAnalysisAnswers] = useState([""]);
  const modalElement = document.getElementById(
    "my_modal_1"
  ) as HTMLDialogElement;

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
    const data1 = localStorage.getItem("user_details");
    const decoded = JSON.parse(data1!);
    const email = decoded["email"];
    const res = await handleTestSubmit(
      email,
      assignmentId,
      code,
      codeAnalysisAnswers,
      techAnswers
    );
    if (res === "ok") {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const data2 = JSON.parse(data);
    // const data2 = data;

    setCodeAnalysisQues(data2["assignment"]["code_analysis_questions"]);
    setTechQues(data2["assignment"]["technical_questions"]);
    setAssignmentId(data2._id);
  }, [data]);

  return (
    <div className="h-screen w-screen bg-base-200 font-my-font">
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
        <h2 className="text-2xl my-8">Code Analysis Questions</h2>
        {codeAnalysisQues && codeAnalysisQues.length > 0 ? (
          codeAnalysisQues.map((item, index) => (
            <div key={index} className="flex flex-col m-10">
              <span className="text-xl my-4">{item}</span>
              <textarea
                className="textarea textarea-primary"
                placeholder="Answer"
                onChange={(e) => handleInputChange(e, index)}
              ></textarea>
            </div>
          ))
        ) : (
          <p>Loading code analysis questions...</p>
        )}
        <h2 className="text-2xl my-8">Technical Questions</h2>
        {techQues && techQues.length > 0 ? (
          techQues.map((item, index) => (
            <div key={index} className="flex flex-col m-10">
              <span className="text-xl my-4">{item}</span>
              <textarea
                className="textarea textarea-primary"
                placeholder="Answer"
                onChange={(e) => handleInputChangeTech(e, index)}
              ></textarea>
            </div>
          ))
        ) : (
          <p>Loading technical questions...</p>
        )}
      </div>

      {isOpen && (modalElement.showModal() as ReactNode)}
      <dialog id="my_modal_1" className="modal">
        <div className="bg-transparent">
          <p className="py-4">
            {isOpen === true ? (
              <Lottie
                animationData={animationData}
                lottieRef={doneRef}
                loop={false}
                onComplete={() => {
                  console.log("animation completed");

                  navigate("/home");
                }}
              />
            ) : (
              ""
            )}
          </p>
        </div>
      </dialog>
    </div>
  );
}
