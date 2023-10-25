import axios from "axios"

export const useTestController = () => {
  const handleTestSubmit = async (url:string | undefined ,email: string, openingId: string, assignmentId: string, code: string, code_analysis_answers: string[], technical_answers: string[]) => {
    const response = await axios.post(`${url}/v1/candidate/${email}/${openingId}/${assignmentId}/submit`, {
      "answers": {
        "code": code,
        "code_analysis_answers": code_analysis_answers,
        "technical_answers": technical_answers
      }
    });
    if (response.status === 200) {
      return "ok";
    } else {
      return "error"
    }
  }

  return { handleTestSubmit }
}
