import { useState, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import service from "../../services/apiHandler"
import { Link } from "react-router-dom"
/* import CountrySelector from "./FormCountrySelector" */





const UserPictureUploader = () => {

	const [user, setUser] = useState({userImage:""})
	const [error, setError] = useState(null)
	const navigate = useNavigate()

	const handleSubmit = async (e) => {

		e.preventDefault()
		const 	data = new FormData();
				data.append("userImage", user.userImage);
	
			try {
			const res =  await  service.signup(data)
			console.log(res)
			navigate("/profile")

		} catch (error) {
			setError(e.message)
		}
	}
	return (
		<>
               {error && <h3 classusername="error">{error.message}</h3>}
			<form onSubmit={handleSubmit}>
 
					<label htmlFor="userImage"><p>userImage</p></label>
				<input
					
					onChange={(e) =>
						setUser({ ...user, [e.target.name]: e.target.files[0] })
					}
					type="file"
					id="userImage"
					name="userImage"
				/> 
			 
					
			{/* 	<label htmlFor="couch"><p>couch</p></label>
				<input
					onChange={(e) =>
						setUser({ ...user, [e.target.name]: e.target.value })
					}
					value={user.couch}
					type="couch"
					id="couch"
					name="couch"
					/>  */}
					<p>
				<button>Upload Picture</button>
					</p>
				

			</form>
		</>
	)
}

export default UserPictureUploader