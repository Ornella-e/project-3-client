import React, { useState } from "react"
import service from "../../services/apiHandler"
import useAuth from "../../context/auth/useAuth"
import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "../Forms/SignStyle.css"

const FormSignIn = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	})
	const [error, setError] = useState(null)
	const navigate = useNavigate()
	const { storeToken, authenticateUser } = useAuth()

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const res = await service.signin(user)
			console.log(res)
			storeToken(res.authToken)
			await authenticateUser()
			navigate("/")
		} catch (error) {
			console.log(error)
			setError(error)
		}
	}
	return (
		<div className="Auth-form-container">
			{error && <h3 className="error">{error.message}</h3>}
			<form onSubmit={handleSubmit} className="Auth-form">
				<div className="Auth-form-content">
					<h3 className="Auth-form-title">Sign In</h3>
					<div className="form-group mt-3">
						<label htmlFor="email">Email address</label>
						<input
							className="form-control mt-1"
							type="email"
							id="email"
							name="email"
							placeholder="Enter email"
							onChange={(e) =>
								setUser({ ...user, [e.target.name]: e.target.value })
							}
							value={user.email}
						/>
					</div>
					<div className="form-group mt-3">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className="form-control mt-1"
							id="password"
							name="password"
							placeholder="Enter password"
							onChange={(e) =>
								setUser({ ...user, [e.target.name]: e.target.value })
							}
							value={user.password}
						/>						
					</div>
					<div className="d-grid gap-2 mt-3">
						<button type="submit" className="btn btn-primary">
							Submit
						</button>

					{/* !!! */}
						<p className="forgot-password text-right mt-2">
							Forgot <a href="#">password?</a>
						</p>
          			</div>
				</div>
			</form>
		</div>
	)
}

export default FormSignIn