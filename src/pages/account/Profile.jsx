import React, {useState} from "react"
import useAuth from "../../context/auth/useAuth"
import { NavLink } from "react-router-dom"







export default function Profile  ()  {
	const { isLoggedIn, currentUser, removeUser } = useAuth()
	const [editMode, setEditMode] = useState(false)
	return (

		
		<div className="Profile">
		  <h2>Hi, i'm {currentUser.username}</h2>
		  	<p>
		   		<button onClick={()=> setEditMode(!editMode) }> Edit Profile </button>
		   	</p>
		 
		</div>	
	)
}


