import React, {useState} from "react"
import useAuth from "../../context/auth/useAuth"





export default function ProfileImage  ()  {
	const { isLoggedIn, currentUser, removeUser } = useAuth()

	return (

		<div className="Img">
            <img src={currentUser.userImage} />
		</div>	
		 
	)
}


