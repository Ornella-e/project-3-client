import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Reservations from "../components/Reservation/Reservations";

export default function MyReservations() {
  const [reservations, setReservations] = useState([]);

  const getAllReservations = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/couch/reservations`
    );
    console.log(response);
    setReservations(response.data);
  };
  useEffect(() => {
    getAllReservations();
  }, []);

  return (
    <div className="container">
      {reservations.map((rent) => {
        console.log(rent);
        return (
          <Reservations
            key={rent._id}
            id={rent._id}
            user={rent.username}
            check-in={rent.startingDate}
            check-out={rent.endingDate}
          />
        );
      })}
    </div>
  );
}
