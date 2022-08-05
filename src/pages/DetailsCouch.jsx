import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../context/auth/useAuth";
import axios from "axios";
import service from "../services/apiHandler";


export default function DetailsCouch(props) {
  const [couch, setCouch] = useState(null);
  const { id } = useParams();
  const [username, setUsername] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const { currentUser } = useAuth();
  console.log(currentUser);
  const navigate = useNavigate();



  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/couch/${id}`)
      .then(({ data }) => {
        console.log(data);
        setCouch(data);
      })
      .catch((e) => console.log(e));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("username", currentUser.username);
    fd.append("startingDate", startingDate);
    fd.append("endingDate", endingDate);

    try {
      await service.put(`/couch/${id}`, fd);
      navigate("/reservations");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {couch ? (
        <>
          <div className="couch">
            <h2>Title: {couch.title}</h2>
            <img className="image-detail" src={couch.image} alt="couchImg" />
            <p>user: {couch.username}</p>
            <img src={couch.userImage} alt="userImg" />
            <p>Description: {couch.description}</p>
            <p>Space for filters</p>
            <p>Location: {couch.location.country}</p>
            <p>Location: {couch.location.city}</p>
            <p>Calendar: {couch.calendar}</p>
          </div>
        </>
      ) : (
        <p>No couch</p>
      )}
      <h2 className="couch">Make your reservation here!</h2>
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

      <div className="couch">
        <h2>Our guest's opinions</h2>
        <p>Guest: {props.username}</p>
        <p>Grade:{props.grade}</p>
        <p>Comment:{props.evaluation}</p>
      </div>
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
