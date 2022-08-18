import React from "react";

export default function Evaluation({ user, couch, evaluation, grade }) {
  return (
    <div className="container-evaluations">
      <p>{user.username}</p>
      <p>{couch.title}</p>
      <p>Ranking: {grade}</p>
      <p>Comment: {evaluation}</p>
    </div>
  );
}
