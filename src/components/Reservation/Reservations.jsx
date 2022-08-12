import React from 'react'

import { useState, useEffect } from "react";


import axios from "axios";

export default function Reservations() {
  const [reservations, setReservations] = useState([]);
  
  const getAllReservations = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/couch/reservations`)
     console.log(response)
    setReservations(response.data)
  }
  useEffect(() => {
    getAllReservations()
  }, [])

  return (
    <div className="container">
				{reservations.map((rent) => {
					console.log(rent)
					return (
                        <div>
                            key={rent._id}
							id={rent._id}
                        <p>user: {rent.username}</p>
                        <p>check in: {rent.startingDate}</p>
                        <p>check out: {rent.endingDate}</p>
                        </div>
					)
				})}
			</div>
  )
  
}
