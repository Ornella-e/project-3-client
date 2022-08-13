import React from "react";

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import useAuth from "../context/auth/useAuth";
import service from "../services/apiHandler";


export default function MyEvaluations() {
  const { id, couchId } = useParams();
  const [evaluation, setEvaluation] = useState("");
  const [grade, setGrade] = useState(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  console.log(currentUser);

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    

    const db = { grade, evaluation}
   

    try {
      await service.post(`/couch/${id}/evaluations/${couchId}`, db);
      navigate(`/${id}/evaluations/${couchId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <h2>Rate your stay </h2>
        
      </div>
      <form className="FormCouch" onSubmit={handleSubmit}>
      <div>
        {[...Array(5)].map((star, i) =>{
            const grade= i + 1;
            return<label>
                <input type="radio" name='grade' value={grade} onClick={()=> setGrade(grade)}
                />
            </label>     
        })}
        <p>The grade is: {grade}</p>
     </div>
        <div>
          <label htmlFor="evaluations">Evaluation: </label>
          <textarea
            type="text"
            id="evaluations"
            name="evaluations"
            value={evaluation}
            rows={4}
            cols={25}
            onChange={(e) => setEvaluation(e.target.value)}
          ></textarea>
        </div>

        <button>Evaluate your stay</button>
      </form>
    </>
  );
}
