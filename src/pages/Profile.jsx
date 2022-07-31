import React from "react"
import EditCouch from "./EditCouch"

const Profile = () => {
	return (
		<div>
			<p>
				This is a protected profile, If you can see this, it means you are
				logged in
			</p>
			<EditCouch/>
		</div>
		
	)
}

export default Profile
