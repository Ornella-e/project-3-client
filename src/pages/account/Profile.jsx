import React, {useState} from "react"
import useAuth from "../../context/auth/useAuth"
import { NavLink } from "react-router-dom"
import MyReservations from "../MyReservations"
import ProfileCard from "../../components/User/ProfileCard"
import EditProfile from "./EditProfile" 


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
				  {/* <EditProfile/> */}
			  	{/* <NavLink className="" to="/editprofile" >Edit Profile</NavLink> */} 
			</p>
				<MyReservations/>
			</p> 
		</div>	
		 
	)
}


