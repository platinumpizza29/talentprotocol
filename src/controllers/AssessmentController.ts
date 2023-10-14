import axios from "axios"
import { useNavigate } from "react-router-dom";

export const useTestController = ()=>{
    const navigate=useNavigate()
    const handleTestSubmit = async (email:string, openingId:string, assignmentId:string, code:string, code_analysis_answers:string[],technical_answers:string[] )=>{
        const json1 = {
            "code": code,
            "code_analysis_answers": code_analysis_answers,
            "technical_answers":technical_answers
        }
        console.log(json1);
        
        const response = await axios.post(`http://192.168.1.75:5000/v1/candidate/${email}/${openingId}/${assignmentId}/submit`, {
            "answers":{
                "code": code,
                "code_analysis_answers": code_analysis_answers,
                "technical_answers":technical_answers
            }
        });
        if (response.status === 200) {
            navigate("/home")
            console.log(response.data);
        }
    }

    return {handleTestSubmit}
}