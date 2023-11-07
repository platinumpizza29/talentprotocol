import axios from "axios";

export const useTestController = () => {
  const url = process.env.REACT_APP_API_URL;
  const handleTestSubmit = async (
    email: string,
    assignmentId: string,
    code: string,
    code_analysis_answers: string[],
    technical_answers: string[]
  ) => {
    const test = {
      answers: {
        code: code,
        code_analysis_answers: code_analysis_answers,
        technical_answers: technical_answers,
      },
    };

    console.log(test);
    console.log(`${url}/v1/candidate/${email}/${assignmentId}/submit`);

    const response = await axios.post(
      `${url}/v1/candidate/${email}/${assignmentId}/submit`,
      {
        answers: {
          code: code,
          code_analysis_answers: code_analysis_answers,
          technical_answers: technical_answers,
        },
      }
    );
    console.log(response.data);

    if (response.status === 200) {
      return "ok";
    } else {
      return "error";
    }
  };

  return { handleTestSubmit };
};
