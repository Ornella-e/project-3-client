
import useAuth from "../../context/auth/useAuth";
import "./Navbar.css";
import logo from "./logo-option4.png";
import Search from "../Search/Search";
import { useState,useEffect } from "react";
import bootstrap from 'bootstrap';
import { Link } from "react-router-dom";
import axios from "axios";



  const Navbar = () => {
    const { isLoggedIn, currentUser, removeUser } = useAuth();
    const [couches, setCouches] = useState([]);
    const [searchedString, setSearchedString] = useState("")

    const getAllCouches = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/couch`);
      console.log(response);
      setCouches(response.data);
    };
    useEffect(() => {
      getAllCouches();
    }, []);

    let searchedCouches = null
	searchedString !== "" 
  ? (searchedCouches = couches.filter((couch) => {
				return couch.title.toLowerCase().includes(searchedString.toLowerCase())
		  }))
		: (searchedCouches = [])
  

  return (
    <nav class="navbar navbar-dark bg-dark fixed-top">

  <div class="container-fluid">
  
      <a href="/">
        <img  src={logo} className="logoImg" alt="logo" />
      </a>
      <div className=""> 
          <Search
            searchedString={searchedString}
            setSearchedString={setSearchedString}
            couches={searchedCouches}/>
           {searchedCouches.map((couch) => {
          console.log(couch);
        return (
        
          <Link to={couch._id}>
            <ul class="cards">
                <li>
                    <a href="" class="card">
                        <img  src={couch.image} class="card__image" />
                        <div class="card__overlay">
                        <div class="card__header">
                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg> 

                            {/* user img */}
                            {/* <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />  */}                   
                            <div class="card__header-text">
                                  <h3 class="card__title">{couch.title}</h3>
                                  {/* <span class="card__status"> "Text"</span> */}   
                            </div>
                        </div>
                        {/* <img className="image-home" src="{currentUser.userImage}" alt="home-img" /> */}
                            <p class="card__description">{couch.location.country}</p>
                            <p class="card__description">{couch.location.city}</p>
                        </div>
                    </a>      
                </li>
            </ul>  
            </Link>
            
        );
        })}  
   
        </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>


      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
          {/* <a href="/" class="link-light" id="offcanvasDarkNavbarLabel">Share  Couch</a> */}
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
                  <a className="btn btn-outline-danger" onClick={removeUser}>
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
                  <a class="btn btn-outline-light" href="/signin">Signin</a>
              </li>
              <li class="nav-item">
                  <a class="btn btn-outline-light" href="/signup">Signup</a>
              </li>

            </>
          )}

           {/* <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-success" type="submit">Search</button>
            </form> */} 


          </div>
      </div>
  </div>
</nav>
  )
  }
export default Navbar;