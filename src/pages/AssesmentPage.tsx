import { Editor } from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../zustandStore/store";

export default function AssessmentPage() {
  const location = useLocation();
  const { item } = location.state || {};
  const navigate = useNavigate();
  const [problem, setProblem] = useState("");
  const [lang, setLang] = useState("");
  const codeStore = useAuthStore((state) => state.setCode);

  const handleAssessment = async () => {
    try {
      const decode = JSON.parse(item);
      setProblem(decode["assignment"]["code_problem_statement"]);
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleEditorChange(value: any, event: any) {
    codeStore(value);
    console.log(value);
    console.log(event);
  }

  function handleSetLang(value: string) {
    setLang(value);
  }

  useEffect(() => {
    handleAssessment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [problem]);

  return (
    <div className="h-screen w-screen bg-base-100 font-my-font overflow-y-auto">
      {/* drawer starts from here */}
      <div className="navbar">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">Assessment</a>
        </div>
        <div className="navbar-end">
          <a
            className="btn btn-accent btn-outline"
            onClick={() => navigate("/techques", { state: { data: item } })}
          >
            Next
          </a>
        </div>
      </div>
      {/* code editor div will come here */}
      {problem === "" ? (
        <div className="h-full w-full flex justify-center items-center">
          <span className="loading loading-spinner loading-md"></span>
        </div>
      ) : (
        <div className="flex flex-col w-full h-full md:flex-row grid-cols-2">
          <div className="col-span-1 p-4 border-2 md:w-1/3">
            <div className="dropdown dropdown-end mt-8 flex flex-row justify-between items-center">
              <p className="font-bold">Problem Statement</p>
              <button tabIndex={0} className="btn m-1">
                Language
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li onClick={() => handleSetLang("javascript")}>
                  <a>JavaScript</a>
                </li>
                <li onClick={() => handleSetLang("go")}>
                  <a>Go</a>
                </li>
                <li onClick={() => handleSetLang("python")}>
                  <a>Python</a>
                </li>
              </ul>
            </div>

            <ol className="mt-10">
              <li>{problem}</li>
            </ol>
          </div>
          <div className=" h-full col-span-1 md:w-2/3">
            <Editor
              defaultLanguage={lang === "" ? "javascript" : lang}
              onChange={handleEditorChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}
