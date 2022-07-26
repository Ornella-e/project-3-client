import { NavLink } from "react-router-dom"
import useAuth from "../../context/auth/useAuth"
import "./Navbar.css"

const Navbar = () => {
	const { isLoggedIn, currentUser, removeUser } = useAuth()
	return (
		<nav className="Navbar">
			<NavLink className="logo" to="/">
				<img src="" alt=""/>
			</NavLink>
			{isLoggedIn && (
				<>
				    <NavLink to="/about" >About</NavLink>
					<NavLink to="/profile" >{currentUser.email}</NavLink>
					<button onClick={removeUser}>Log out</button>
				</>
			)}
			{!isLoggedIn && (
				<>
					<NavLink to="/signin" >Log in</NavLink>
					<NavLink to="/signup" >Sign up</NavLink>
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
