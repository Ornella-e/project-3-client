import React from "react";
import { useState, useEffect } from "react";
import Reservations from "../components/Reservation/Reservations";
import service from "../services/apiHandler";
export default function MyReservations() {

  const [reservations, setReservations] = useState([]);
  


  const getAllReservations = async () => {
    const response = await service.get(`/couch/reservations`);
   
    setReservations(response.data);
  };
  useEffect(() => {
    getAllReservations();
  }, []);
  

  return (
    <>
    <h2>My Reservations</h2>
    <div className="container-reservationList">
    
      {reservations.map((rent) => {
       
        return (
          <Reservations
            key={rent._id}
            id={rent._id}
            {...rent}
          />
        );
      })}
    </div>
    </>
  );
}
