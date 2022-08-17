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
     
      <p>{user.username}</p>
      <p>{evaluation}</p>
      <p>{grade}</p> 
      <p>{couch.title}</p> 
    </div>
  );
}