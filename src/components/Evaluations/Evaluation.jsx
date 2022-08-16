import React from "react";

export default function Evaluation({
  _id,
  user,
 evaluation,
 grade,
  couch,
}) {
  return (
    <div className="container">
      <p>{_id}</p>
      <p>{user}</p>
      <p>{evaluation}</p>
      <p>{grade}</p> 
      <p>{couch}</p> 
    </div>
  );
}