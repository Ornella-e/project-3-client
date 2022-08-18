import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Reservations({
  id,
  user,
  couch,
  startingDate,
  endingDate,
}) {
    const [done, setDone]= useState(false);
  return (
    <div className="container-reservations">
 <div className="Input-Ranking">
              <label htmlFor="done"> If you already stayed at the couch, please click here to evaluate your experience.</label>
                <input
                  type="checkbox"
                  id="done"
                  name="done"
                  value={done}
                  onClick={(e) =>setDone(e.target.value)}
                />
              
        </div>
      <p>{user.username}</p>
      <p>{couch.title}</p>
      <p>{startingDate}</p>
      <p>{endingDate}</p>
    {done &&(
      <Link to={`/${id}/evaluations/${couch._id}`}>Rate your stay</Link>
    )
    }
    </div>
  );
}
