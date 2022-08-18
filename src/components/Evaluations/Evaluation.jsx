import React from "react";

export default function Evaluation({ user, couch, evaluation, grade }) {
  return (
    <div className="container">
      <p>{user.username}</p>
      <p>{couch.title}</p>
      <p>{evaluation}</p>
      <p>{grade}</p>
    </div>
  );
}
