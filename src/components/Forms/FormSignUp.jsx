import { useState, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import service from "../../services/apiHandler"
import { Link } from "react-router-dom"
/* import CountrySelector from "./FormCountrySelector" */





const FormSignUp = () => {

	const [user, setUser] = useState({ username: "", email: "", location:"country", location:"city" , userImage:""/* ,couch: "" */  })
	const [error, setError] = useState(null)
	const navigate = useNavigate()

	const handleSubmit = async (e) => {

		e.preventDefault()
		const 	data = new FormData();
				data.append('username', user.username);
				data.append('email', user.email);
				data.append('password', user.password);
				data.append("userImage", user.userImage);
				data.append('couch', user.couch);
				data.append('location', user.location);

			

			try {
			const res =  await  service.signup(data)
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
						
					 {/* <CountrySelector/>  */}

			 	<label htmlFor="country"><p>Country</p> </label>
				 <input
					onChange={(e) =>
						setUser({ ...user, [e.target.name]: e.target.value })
					}
					value={user.location.country}
					type="country"
					id="country"
					name="country"
				/> 

				 <label htmlFor="city"><p>Select your City</p> </label>
				 <input
					 onChange={(e) =>
						 setUser({ ...user, [e.target.name]: e.target.value })
					 }
					 value={user.location.city}
					 type="city"
					 id="city"
					 name="city"
				 />  

 
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
<<<<<<< HEAD
					/> 
				<button>Create Account</button>
=======
					/>  */}
					<p>
				<button>Create Account</button>
					</p>
>>>>>>> e8b358c7c41c8e41cc036315487e0c9a33d529ca
				
				<p>Do you have already an account?</p>
				<Link to={"/signin"} className="Sign">Signin</Link>
			</form>
		</>
	)
}

export default FormSignUp