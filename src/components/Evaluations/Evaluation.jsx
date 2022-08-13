import React from "react";

export default function Evaluation({
  id,
  user,
 evaluation,
 grade,
  couch,
}) {
  return (
    <div className="container">
      {id}
      {user}
      {evaluation}
      {grade}
      {couch}
    </div>
  );
}