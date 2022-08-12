import React from "react";
import Ranking from "../Ranking/Ranking";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../context/auth/useAuth";
import service from "../services/apiHandler";


export default function Evaluation() {
  const { id } = useParams();
  const [evaluation, setEvaluation] = useState("");
  const [grade, setGrade] = useState();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  console.log(currentUser);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();

    fd.append("username", currentUser.username);
    fd.append("grade", grade);
    fd.append("evaluation", evaluation);

    try {
      await service.put(`/couch/${id}`, fd);
      navigate("/:id");
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
      <Ranking 
      type="number"
      id="grade"
      name="grade"
      value={grade}
      onChange={(e) => setGrade(e.target.value)}
       />
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

        <button>Comment your stay</button>
      </form>
    </>
  );
}
