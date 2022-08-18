
import useAuth from "../../context/auth/useAuth";
import "./Navbar.css";
import logo from "./logo-option4.png";
import Search from "../Search/Search";
import { useState } from "react";
import bootstrap from 'bootstrap';



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
    <nav class="navbar navbar-dark bg-dark fixed-top">

  <div class="container-fluid">
      <img  src={logo} className="logoImg" alt="logo" />
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>


      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Share  Couch</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
               {/*  <li class="nav-item">
                  <a class="nav-link" href="/about">About</a>
                </li> */}
        

          <div class="offcanvas-body">
          {isLoggedIn && (
            <>
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/account">Logged in as  {currentUser.username} </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/my-couch">Be a Host</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/reservations">Reservations</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/account">Settings</a>
                </li>
                <li class="nav-item">
                  
                  {/* <a class="nav-link" href="/about">logout</a> */}
                  {/*  logout button css red */}
                  <a className="btn btn-success" onClick={removeUser}>
                    Log out
                  </a>
                </li>
               {/* dropdown */}
              </ul>
            </>
          )} 
          
          {!isLoggedIn && (
            <>
              <li class="nav-item">
                  <a class="nav-link" href="/signin">Signin</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/signup">Signup</a>
              </li>

            </>
          )}

            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-success" type="submit">Search</button>
            </form>


          </div>
      </div>
  </div>
</nav>
  )
  }
export default Navbar;