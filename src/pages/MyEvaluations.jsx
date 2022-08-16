import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../context/auth/useAuth";
import service from "../services/apiHandler";

export default function MyEvaluations() {
  const { reservationId, couchId } = useParams();
  const [evaluation, setEvaluation] = useState("");
  const [grade, setGrade] = useState(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  console.log(currentUser);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const db = { grade, evaluation };

    try {
      await service.post(`/couch/${reservationId}/evaluations/${couchId}`, db);
      navigate(`/${reservationId}/evaluations/${couchId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="FormCouch">
        <h2>Rate your stay </h2>
      </div>
      <form className="FormCouch" onSubmit={handleSubmit}>
        <div className="Input-Ranking">
          {[...Array(5)].map((star, i) => {
            const grade = i + 1;
            return (
              <label>
                <input
                  type="radio"
                  id="grade"
                  name="grade"
                  value={grade}
                  onClick={(e) => setGrade(e.target.value)}
                />
              </label>
            );
          })}
          <p>The grade is: {grade}</p>
        </div>
        <div className="Input-Ranking">
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

        <button >Evaluate your stay</button>
      </form>
    </>
  );
}
