import React from "react";
import { Link } from "react-router-dom";

export default function Reservations({
  id,
  user,
  couch,
  startingDate,
  endingDate,
}) {
   
  return (
    <div className="container">
 
      <p>{user.username}</p>
      <p>{couch.title}</p>
      <p>{startingDate}</p>
      <p>{endingDate}</p>
      <Link to={`/${id}/evaluations/${couch._id}`}>Evaluations</Link>
    </div>
  );
}
