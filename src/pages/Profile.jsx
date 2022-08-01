import React from "react"
import EditCouch from "./EditCouch"
import MyFavourites from "./MyFavourites"

const Profile = () => {
	return (
		<div>
			<p>
				This is a protected profile, If you can see this, it means you are
				logged in
			</p>
			<EditCouch/>,
			<MyFavourites/>
		</div>
		
	)
}

export default Profile
