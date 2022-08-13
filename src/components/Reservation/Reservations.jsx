import React from "react";

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
    </div>
  );
}
