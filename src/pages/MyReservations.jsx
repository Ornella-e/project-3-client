import React from 'react'
import Ranking from '../components/Ranking/Ranking'

export default function MyReservations(props) {
  return (
    <div>
      <h1>Details of my reservations</h1>
      <p> Couch: {props._id}</p>
      <p>Location: {props.location}</p>
      <p> Start-Date: {props.startingDate}</p>
      <p> End-Date: {props.endingDate}</p>
      <Ranking/>
    </div>
    
  )
}
