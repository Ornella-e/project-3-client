import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../context/auth/useAuth";
import axios from "axios";
import service from "../services/apiHandler";
import Evaluation from "../components/Evaluations/Evaluation";
import EditCouch from "./EditCouch";

export default function DetailsCouch() {
  const [couch, setCouch] = useState(null);
  const [owner, setOwner] = useState(false);
  const { id } = useParams();
  const [evaluations, setEvaluations] = useState([]);
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const { currentUser } = useAuth();
  
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/couch/${id}`)
      .then(({ data }) => {
        
        setCouch(data);
        setOwner(currentUser._id === data?.owner?._id);
        setEvaluations(data.evaluations);
      })
      .catch((e) => console.log(e));
  }, [id]);

  const displayEvaluations = () => {
    return evaluations.map((evaluation) => {
      
      return <Evaluation key={evaluation._id} {...evaluation} />;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      startingDate,
      endingDate,
    };

    try {
      await service.post(`/couch/${id}`, data);
      navigate("/reservations");
    } catch (error) {
      
    }
  };

  return (
    <>
      {couch ? (
        <>
          <div className="couch">
            <h2>Title: {couch.title}</h2>
            <img className="image-detail" src={couch.image} alt="couchImg" />
            <div className="detail-user-and-image">
              <p className="detail-user"> {couch.owner.username}</p>
              <img
                className="image-detail-user"
                src={couch.owner.userImage}
                alt="userImg"
              />
            </div>
            <p className="detail-description">
              Description: {couch.description}
            </p>
            <p>Location: {couch.location.country}</p>
            <p>Location: {couch.location.city}</p>
          </div>
        </>
      ) : (
        <p>Loading</p>
      )}
      <hr className="hr" />
      {!owner ? <p></p> : <EditCouch />}

      <hr className="hr" />

      <form className="FormCouch" onSubmit={handleSubmit}>
        <h2 className="couch-title">Make your reservation here!</h2>
        <div className="couch-input">
          <label htmlFor="startingDate">Check-in: </label>
          <input
            type="date"
            id="startingDate"
            name="startingDate"
            value={startingDate}
            onChange={(e) => setStartingDate(e.target.value)}
          />
        </div>
        <div className="couch-input">
          <label htmlFor="endingDate">Check-out: </label>
          <input
            type="date"
            id="endingDate"
            name="endingDate"
            value={endingDate}
            onChange={(e) => setEndingDate(e.target.value)}
          />
        </div>
        <button className="button-detail">Reserve</button>
      </form>
      <hr className="hr" />
      <h2 className="couch-title">Couch Evaluations</h2>
      <div className="couch-evaluations">{displayEvaluations()}</div>
      <hr className="hr" />
      <div className="couch">
        <h3>Cancellation policy</h3>
        <p>
          Familiarize yourself with the host's cancellation policy, as it
          applies if you cancel due to illness or other reasons{" "}
        </p>
      </div>
    </>
  );
}
