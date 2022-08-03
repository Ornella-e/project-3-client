import React, {useState} from "react"
import useAuth from "../../context/auth/useAuth"
import { NavLink } from "react-router-dom"
import MyFavourites from "../MyFavourites"
import MyReservations from "../MyReservations"
import ProfileCard from "../../components/User/ProfileCard"








export default function Profile  ()  {
	const { isLoggedIn, currentUser, removeUser } = useAuth()
	const [editMode, setEditMode] = useState(false)
	return (

		
		<div className="ProfilePage">
				<ProfileCard className="ProfileCard"/>

			<p className="Profile">
				<h2>Hi, i'm {currentUser.username}</h2>
		  	<p>
				  
				  {/* need to fix the link */}
			  	<NavLink className="" to="/editprofile" >Edit Profile</NavLink> 
			</p>
				<MyFavourites/>
				<MyReservations/>
			</p>
		  
				
		   	
		 
		</div>	
		 
	)
}


