import React from "react";
import { Link } from "react-router-dom";

export default function Reservations({
  id,
  user,
  startingDate,
  endingDate,
  couch,
}) {
  return (
    <div className="container">
     <p>{id}</p> 
      <p>{user}</p>
      <p>{startingDate}</p>
      <p>{endingDate}</p>
      <p>{couch}</p>
      <Link to={`/${id}/evaluations/${id}`}>Evaluations</Link>
    </div>
  );
}
