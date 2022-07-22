import React from "react"
import useAuth from "../../context/auth/useAuth"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = () => {
	const { isLoggedIn, isLoading } = useAuth()

	// The application is still loading
	if (isLoading) return <p>Loading...</p>
	// We are anot logged in
	if (!isLoggedIn) return <Navigate to="/signin" />
	// We can render the child routes here
	else return <Outlet />
}

export default PrivateRoute
