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
 
      <p>{user.username}</p>
      <p>{startingDate}</p>
      <p>{endingDate}</p>
      <p>{couch.title}</p>
      <Link to={`/${id}/evaluations/${id}`}>Evaluations</Link>
    </div>
  );
}
