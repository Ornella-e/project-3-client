import React from "react"
import EditCouch from "../EditCouch"
import MyFavourites from "../MyFavourites"
import { Link } from "react-router-dom"


const Account = () => {
	return (
		<div>
			<p>
				This is a protected Account, If you can see this, it means you are
				logged in
			</p>
                <EditCouch/>,
                <MyFavourites/>
            <p>
                <h2>go to your profile <Link to={"/profile"} >Profile</Link></h2>
            </p>
            
		</div>
		
	)
}

export default Account
