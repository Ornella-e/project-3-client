import React from 'react'
import CouchItem from '../components/Couch/CouchItem'
import { useState, useEffect} from "react";
import { useParams, useNavigate  } from "react-router-dom";
import axios from "axios";
import service from '../services/apiHandler';
import useAuth from '../context/auth/useAuth';
import Ranking from '../components/Ranking/Ranking';

export default function DetailsCouch() {
    const [couch, setCouch] = useState(null);
	const { id } = useParams();
  const [startingDate, setStartingDate] = useState("")
  const [endingDate, setEndingDate] = useState("")
	const navigate = useNavigate()
	const {username} = useAuth()
	console.log(username)

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

 
	
	const handleSubmit = async (e) => {
		e.preventDefault()

	
		const fd = new FormData()

    fd.append("usename", username)
		fd.append("startingDate", startingDate)
		fd.append("endingDate", endingDate)

		try {

			await service.post('/couch', fd)
			navigate("/reservations")

		} catch (error) {
			console.error(error)
		}
	}

    

    
	

	
  return (
    <>
    <h1>Details of the couch</h1>
    {couch ? (
        <>
      <div className='couch' >
 
 <img src={couch.image} alt="couchImg" />
 <p>user: {couch.username}</p>
 <p>Title: {couch.title}</p>
 <p>Description: {couch.description}</p>
 <p>Location: {couch.location.country}</p>
 <p>Location: {couch.location.city}</p>

 <p>Calendar: {couch.calendar}</p>
</div>

<form className="FormCouch" onSubmit={handleSubmit}>
       <div>
	   <label htmlFor="username">User: </label>
				<input
				type="text"
				id="username"
				name="username"
      value={username}
	  readOnly={username}
	  />

    </div>
     
	  <div>
				<label htmlFor="startingDate">Start-Day: </label>
				<input
					type="date"
					id="startingDate"
					name="startingDate"
					value={startingDate}
					onChange={(e) => setStartingDate(e.target.value)}
				/>
			</div>
      <div>
				<label htmlFor="endingDate">End-Day: </label>
				<input
					type="date"
					id="endingDate"
					name="endingDate"
					value={endingDate}
					onChange={(e) => setEndingDate(e.target.value)}
				/>
			</div>
			<button>Reserve</button>
		</form>

        </>
        
    ) : (
        <p>No couch</p>
    )}
 <div>
  <h1>Our guest's opinions</h1>
  <p>Guest: </p>
  <p>Grade: </p>
  <p>Comment:</p>
</div>   
    
</>

  )
}
