import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Reservations from "../components/Reservation/Reservations";
import service from "../services/apiHandler";
export default function MyReservations() {

  const [reservations, setReservations] = useState([]);


  const getAllReservations = async () => {
    const response = await service.get(`/couch/reservations`);
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
            user={rent.user}
            startingDate={rent.startingDate}
            endingDate={rent.endingDate}
            couch={rent.couch}
          />
        );
      })}
    </div>
  );
}
