import React, { useState } from "react"
import service from "../../services/apiHandler"
import useAuth from "../../context/auth/useAuth"
import { useNavigate } from "react-router-dom"

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
		<>
			{error && <h3 className="error">{error.message}</h3>}
			<form onSubmit={handleSubmit}>
				<h2>Signin</h2>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					onChange={(e) =>
						setUser({ ...user, [e.target.name]: e.target.value })
					}
					value={user.email}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					name="password"
					onChange={(e) =>
						setUser({ ...user, [e.target.name]: e.target.value })
					}
					value={user.password}
				/>
				<button>Submit</button>
			</form>
		</>
	)
}

export default FormSignIn
