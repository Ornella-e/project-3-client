import { NavLink } from "react-router-dom"
import useAuth from "../../context/auth/useAuth"
import "./Navbar.css"
import logo from "./logo-option4.png"

const Navbar = () => {
	const { isLoggedIn, currentUser, removeUser } = useAuth()
	return (
		<nav className="Navbar">
			<NavLink className="logoImg" to="/">
				<img src={logo} alt="logo"/>
			</NavLink>
			<NavLink className="sign" to="/" >Home</NavLink>
			<NavLink className="sign" to="/about" >About</NavLink>
			{isLoggedIn && (
				<>
				    
					<NavLink to="/profile" >{currentUser.email}</NavLink>
					<button onClick={removeUser}>Log out</button>
				</>
			)}
			{!isLoggedIn && (
				<>
					<NavLink className="sign" to="/signin" >Log in</NavLink>
					<NavLink className="sign" to="/signup" >Sign up</NavLink>
				</>
			)}
			<div className="search">
			<input type="text" placeholder="Search..."/>
			<button>Search</button>
			</div>
		</nav>
	)
}

export default Navbar
