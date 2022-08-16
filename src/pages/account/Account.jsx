import React from "react"
import EditCouch from "../EditCouch"
import MyFavourites from "../MyFavourites"
import { NavLink } from "react-router-dom"
import ProfileCard from "../../components/User/ProfileCard"



const Account = () => {
	return (
		<div>
			<p>
				This is a protected Account, If you can see this, it means you are
				logged in
			</p>
                <EditCouch/>,
                <MyFavourites/>

				<NavLink className="" to="/profile" >Profile</NavLink>

				<ProfileCard/>
            
		</div>
		
	)
}

export default Account
