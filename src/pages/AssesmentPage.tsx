import { Editor } from "@monaco-editor/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../zustandStore/store";

export default function AssessmentPage() {
  const location = useLocation();
  const { item } = location.state || {};
  const navigate = useNavigate();
  const [problem, setProblem] = useState("");
  const [code, setCode] = useState("");
  const [data, setData] = useState({});
  const codeStore = useAuthStore((state) => state.setCode);

  const handleAssessment = async () => {
    try {
      const decode = JSON.parse(item);
      const opening_id = decode["_id"];
      const org_name = decode["org_name"];
      const response = await axios.get(
        `http://192.168.1.75:5000/v1/org/${org_name}/openings/${opening_id}/assignment`
      );
      if (response.status === 200) {
        setProblem(response.data["assignment"]["assignment_name"]);
        setData(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleEditorChange(value: any, event: any) {
    setCode(value);
    console.log(value);

    codeStore(code);
    console.log(event);
  }

  useEffect(() => {
    handleAssessment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [problem]);

  return (
    <div className="h-screen w-screen bg-base-100 font-my-font">
      {/* drawer starts from here */}
      <div className="navbar">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">Assessment</a>
        </div>
        <div className="navbar-end">
          <a
            className="btn btn-accent btn-outline"
            onClick={() => navigate("/techques", { state: { data: data } })}
          >
            Next
          </a>
        </div>
      </div>
      {/* code editor div will come here */}
      <div className="">
        {problem === "" ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 w-1/3 p-4 bg-red-50">
              <span>Problem Statement</span>
              {problem}
            </div>
            <div className="col-span-1 w-2/3">
              <Editor
                defaultLanguage="javascript"
                defaultValue={`// ${problem}`}
                // width={"90vw"}
                onChange={handleEditorChange}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
