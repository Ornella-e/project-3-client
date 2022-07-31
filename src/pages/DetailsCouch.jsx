import React from 'react'
import CouchItem from '../components/Couch/CouchItem'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailsCouch(props) {
    const [couch, setCouch] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		axios
			.get( `${process.env.REACT_APP_API_URL}/couch/${id}`+ id
			)
			.then(({ data }) => {
				console.log(data);
				setCouch(data);
			})
			.catch((e) => console.log(e));
	}, [id]);

  return (
    <div>
     <div className='couch' >
    
          <img src={props.image} alt="couchImg" />
          <p>user: {props.username}</p>
          <p>Title: {props.title}</p>
          <p>Description: {props.description}</p>
          <p>Country: {props.location}</p>
          <p>Evaluations: {props.evaluations}</p>
          <p>Calendar: {props.calendar}</p>
          
        </div> 
    </div>
  )
}
