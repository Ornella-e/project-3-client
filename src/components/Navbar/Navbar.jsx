import { NavLink } from "react-router-dom";
import useAuth from "../../context/auth/useAuth";
import "./Navbar.css";
import logo from "./logo-option4.png";
import Search from "../Search/Search";
import { useState } from "react";


const Navbar = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  const [couches, setCouches] = useState([]);
  const [searchedString, setSearchedString] = useState("")
  let searchedCouches = null
	searchedString !== "" 
  ? (searchedCouches = couches.filter((couch) => {
				return couch.title.toLowerCase().includes(searchedString.toLowerCase())
		  }))
		: (searchedCouches = couches)

  return (
    <nav className="Navbar">
      <NavLink className="logoImg" to="/">
        <img src={logo} alt="logo" />
      </NavLink>

      <button className="toggle-button">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <div className="navbar-links">
        <NavLink className="sign" to="/">
          Home
        </NavLink>
        <NavLink className="sign" to="/about">
          About
        </NavLink>
        {isLoggedIn && (
          <>
            <NavLink className="sign" to="/Account">
              {currentUser.username}
            </NavLink>
            <NavLink className="sign" to="/reservations">
              Reservations
            </NavLink>
            <NavLink className="sign" to="/my-couch">
              My Couch
            </NavLink>
            <div className="search">
              <button className="button-navbar" onClick={removeUser}>
                Log out
              </button>
            </div>
          </>
        )}
        {!isLoggedIn && (
          <>
            <NavLink className="sign" to="/signin">
              Log in
            </NavLink>
            <NavLink className="sign" to="/signup">
              Sign up
            </NavLink>
          </>
        )}
       <div className="search">
       <Search
       searchedString={searchedString}
       setSearchedString={setSearchedString}
      couches={searchedCouches} 
       />
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
