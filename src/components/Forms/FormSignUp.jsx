import { useState, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import service from "../../services/apiHandler"
import { Link } from "react-router-dom"
import CountrySelector from "./FormCountrySelector"



const FormSignUp = () => {
	const [user, setUser] = useState({ username: "", email: "", location:""/* , userImage:"",couch: "" */ })
	const [error, setError] = useState(null)
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const res = await service.signup(user)
			console.log(res)
			navigate("/signin")
		} catch (error) {
			setError(e.message)
		}
	}
	return (
		<>
			{error && <h3 classusername="error">{error.message}</h3>}
			<form onSubmit={handleSubmit}>
				<h2>Signup</h2>
				<label htmlFor="username"><p>Username</p></label>
				<input
					onChange={(e) =>
						setUser({ ...user, [e.target.name]: e.target.value })
					}
					value={user.username}
					type="text"
					id="username"
					name="username"
				/>
				<label htmlFor="email"><p>Email</p></label>
				<input
					onChange={(e) =>
						setUser({ ...user, [e.target.name]: e.target.value })
					}
					value={user.email}
					type="email"
					id="email"
					name="email"
				/>
				 <label htmlFor="password"><p>Password</p></label>
				<input
					onChange={(e) =>
						setUser({ ...user, [e.target.name]: e.target.value })
					}
					value={user.password}
					type="password"
					id="password"
					name="password"
				/> 
					
					{/* <CountrySelector/> */}

			 	<label htmlFor="location"><p>Country</p> </label>
				 <input
					onChange={(e) =>
						setUser({ ...user, [e.target.name]: e.target.value })
					}
					value={user.location}
					type="location"
					id="location"
					name="location"
				/> 

				{/* <label htmlFor="location"><p>Select your City</p> </label>
				 <input
					 onChange={(e) =>
						 setUser({ ...user, [e.target.username]: e.target.value })
					 }
					 value={user.location.city}
					 type="location"
					 id="location"
					 name="location"
				 />  */}

{/* 
					<label htmlFor="userImage"><p>userImage</p></label>
				<input
					onChange={(e) =>
						setUser({ ...user, [e.target.name]: e.target.value })
					}
					value={user.userImage}
					type="userImage"
					id="userImage"
					name="userImage"
				/> 
			 */}
					
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
				<button>Create Account</button>
					</p>
				
				<p>Do you have already an account?</p>
				<Link to={"/signin"} className="Sign">Signin</Link>
			</form>
		</>
	)
}

export default FormSignUp