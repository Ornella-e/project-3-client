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
      {id}
      {user}
      {startingDate}
      {endingDate}
      {couch}
      <Link to={`/${id}/evaluations/${id}`}>Evaluations</Link>
    </div>
  );
}
