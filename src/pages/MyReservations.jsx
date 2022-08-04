import React from "react";
import Ranking from "../components/Ranking/Ranking";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../context/auth/useAuth";
import service from "../services/apiHandler";

export default function MyReservations(props) {
  const { id } = useParams();
  const [evaluations, setEvaluations] = useState("");
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  console.log(currentUser);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();

    fd.append("evaluations", evaluations);

    try {
      await service.put(`/couch/${id}`, fd);
      navigate("/reservations");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <h1>Details of my reservations</h1>
        <p> Couch: {props._id}</p>
        <p>Location: {props.location}</p>
        <p> Start-Date: {props.startingDate}</p>
        <p> End-Date: {props.endingDate}</p>
      </div>
      <div>
        <h2>Rate your stay at {props.username}'s couch </h2>
        <Ranking />
      </div>
      <form className="FormCouch" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="evaluations">Evaluation: </label>
          <textarea
            type="text"
            id="evaluations"
            name="evaluations"
            value={evaluations}
            rows={4}
            cols={25}
            onChange={(e) => setEvaluations(e.target.value)}
          ></textarea>
        </div>

        <button>Comment your stay</button>
      </form>
    </>
  );
}
