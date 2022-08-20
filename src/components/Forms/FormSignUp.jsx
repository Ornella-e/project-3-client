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
			
			//navigate("/signin") 

		} catch (error) {
			setError(e.message)
		}
	}
	
	return (
	<div className="Auth-form-container">
		{error && <h3 classusername="error">{error.message}</h3>}
		<form  onSubmit={handleSubmit} className="Auth-form" >
			<div className="Auth-form-content">
				<h2 className="Auth-form-title">Signup</h2>
				<div className="text-center">
						Already registered?{" "}
					<span className="link-primary" >
					<Link to={"/signin"} className="Sign">Signin</Link>
					</span>
				</div>
				<div className="form-group mt-3">
					<label htmlFor="username"><p>Username</p></label>
					<input
						onChange={(e) =>
							setUser({ ...user, [e.target.name]: e.target.value })
						}
						className="form-control mt-1"
						placeholder="Username"
						value={user.username}
						type="text"
						id="username"
						name="username"
					/>
				</div>
				<div className="form-group mt-3">
					<label htmlFor="email"><p>Email</p></label>
					<input
						onChange={(e) =>
							setUser({ ...user, [e.target.name]: e.target.value })
						}
						value={user.email}
						className="form-control mt-1"
						placeholder="Email Address"
						type="email"
						id="email"
						name="email"
					/>
				</div>
				<div className="form-group mt-3">
					<label htmlFor="password"><p>Password</p></label>
					<input
						onChange={(e) =>
							setUser({ ...user, [e.target.name]: e.target.value })
						}
						value={user.password}
						type="password"
						className="form-control mt-1"
						placeholder="Password"
						id="password"
						name="password"
					/> 
				</div>
						
					 {/* <CountrySelector/>  */}
				<div className="form-group mt-3">
					<label htmlFor="country"><p>Country</p> </label>
					<input
						onChange={(e) =>
							setUser({ ...user, [e.target.name]: e.target.value })
						}
						value={user.location.country}
						className="form-control mt-1"
						placeholder="Country"
						type="country"
						id="country"
						name="country"
					/> 
				</div>
				<div className="form-group mt-3">
					<label htmlFor="city"><p>Select your City</p> </label>
					<input
						onChange={(e) =>
							setUser({ ...user, [e.target.name]: e.target.value })
						}
						value={user.location.city}
						className="form-control mt-1"
						placeholder="City"
						type="city"
						id="city"
						name="city"
					/>  
				 </div>
				 <div className="form-group mt-3">
					<label htmlFor="userImage"><p>userImage</p></label>
					<input
						
						onChange={(e) =>
							setUser({ ...user, [e.target.name]: e.target.files[0] })
						}
						type="file"
						className="form-control mt-1"
						id="userImage"
						name="userImage"
					/> 
				</div>
				
				<div className="d-grid gap-2 mt-3">
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</div>
			 
					
			{/* 	<label htmlFor="couch"><p>couch</p></label>
				<input
					onChange={(e) =>
						setUser({ ...user, [e.target.name]: e.target.value })
					}
					value={user.couch}
					type="couch"
					id="couch"
					name="couch"
					/> 
				<button>Create Account</button>
					/>  */}
				
				
				{/* <p>Do you have already an account?</p>
				<Link to={"/signin"} className="Sign">Signin</Link> */}
			</div>	
		</form>
	</div>
	)
}

export default FormSignUp