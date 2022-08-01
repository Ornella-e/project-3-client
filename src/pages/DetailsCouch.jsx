import React from 'react'
import CouchItem from '../components/Couch/CouchItem'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailsCouch() {
    const [couch, setCouch] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		axios
			.get( `${process.env.REACT_APP_API_URL}/couch/${id}`
			)
			.then(({ data }) => {
				console.log(data);
				setCouch(data);
			})
			.catch((e) => console.log(e));
	}, [id]);

  return (
    <>
    {couch ? (
        <>
      <div className='couch' >
 
 <img src={couch.image} alt="couchImg" />
 <p>user: {couch.username}</p>
 <p>Title: {couch.title}</p>
 <p>Description: {couch.description}</p>
 <p>Location: {couch.location.country}</p>
 <p>Location: {couch.location.city}</p>
 <p>Evaluations: {couch.evaluations}</p>
 <p>Calendar: {couch.calendar}</p>
 
</div>
        </>
    ) : (
        <p>No couch</p>
    )}
</>
  )
}
