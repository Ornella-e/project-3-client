import { NavLink } from "react-router-dom"
import useAuth from "../../context/auth/useAuth"
import "./Navbar.css"

const Navbar = () => {
	// We are getting the user and some functions from the context
	const { isLoggedIn, currentUser, removeUser } = useAuth()
	// console.log(currentUser)
	return (
		<nav className="Navbar">
			<NavLink className="logo" to="/">
				CouchApp
			</NavLink>
			{isLoggedIn && (
				<>
					<NavLink to="/profile">{currentUser.email}</NavLink>
					<button onClick={removeUser}>Log-Out</button>
				</>
			)}
			{!isLoggedIn && (
				<>
					<NavLink to="/signin">Log in</NavLink>
					<NavLink to="/signup">Sign Up</NavLink>
				</>
			)}
		</nav>
	)
}

export default Navbar
