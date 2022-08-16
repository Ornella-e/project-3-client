import React from "react"
import EditCouch from "../EditCouch"
import MyFavourites from "../MyFavourites"
import { NavLink } from "react-router-dom"
import ProfileCard from "../../components/User/ProfileCard"
import "./Account.css"




const Account = () => {
	return (
		<div className="acc">
			<div className="conteinerLeft">
				<ProfileCard/>
			</div>

			<div className="conteinerRight">
				<MyFavourites/>
			</div>


            
		</div>
		
	)
}

export default Account
