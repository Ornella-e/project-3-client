import React from "react";
import Ranking from "../components/Ranking/Ranking";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../context/auth/useAuth";
import service from "../services/apiHandler";

export default function MyReservations() {
  const { id } = useParams();
  const [couches, setCouches] = useState([]);
  const [username, setUsername] = useState("");
  const [reservedCouch, setReservedCouch] = useState([]);
   jconst [evaluations, setEvaluations] = useState("");
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
      <h1>Details of my reservations</h1>
      {reservedCouch ? (
        <>
          <div className="couch">
            <h2>Id: {reservedCouch._id}</h2>
            <p>user: {reservedCouch.username}</p>
            <p>check in: {reservedCouch.startingDate}</p>
            <p>check out: {reservedCouch.endingDate}</p>
          </div>
        </>
      ) : (
        <p>No reservation</p>
      )}
      <div>
        <h2>Rate your stay at {reservedCouch.username}'s couch </h2>
        <Ranking />
      </div>
      <form className="FormCouch" onSubmit={handleSubmit}>
        <div className="couch-input">
          <label htmlFor="username">user: </label>
          <input
            type="text"
            className="field"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
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
