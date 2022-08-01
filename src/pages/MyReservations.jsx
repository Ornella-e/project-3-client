import React from 'react'

export default function MyReservations(props) {
  return (
    <div>
      <h1>Details of my reservations</h1>
      <p> Couch: {props._id}</p>
      <p>Location: {props.location}</p>
      <p> Start-Date: {props.startingDate}</p>
      <p> End-Date: {props.endingDate}</p>
    </div>
  )
}
