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
      <p>{id}</p>
      <p>{user}</p>
      <p>{evaluation}</p>
      <p>{grade}</p> 
      <p>{couch}</p> 
    </div>
  );
}