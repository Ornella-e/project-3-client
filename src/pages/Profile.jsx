import React from "react"
import DetailsCouch from "./DetailsCouch"

const Profile = () => {
	return (
		<div>
			<p>
				This is a protected profile, If you can see this, it means you are
				logged in
			</p>
			<DetailsCouch/>
		</div>
		
	)
}

export default Profile
