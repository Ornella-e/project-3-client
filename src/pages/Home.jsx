import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import  "../styles/App.css"
import WebFont from 'webfontloader';



const Home = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Lobster']
      }
    });
   }, []);
  const [couches, setCouches] = useState([]);
  const [searchedString, setSearchedString] = useState("")

  const getAllCouches = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/couch`);
   
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
    <div className="ListCouches">
      <div className="Container-Intro">
        <div className="text-intro">
          <div style={{fontFamily: 'Lobster'}}>
          <h1 className="Title">ShareCouch</h1>
          </div>
          <h5 className="Slogan">
            The platform that connects travelers around the world looking for
            free accommodation, discover new places and make new friendships.
          </h5>
        </div>

       
      </div>
       
      <div className="couchCards">
        
      <div className='body'>
        {couches.map((couch) => {
          
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
      </div>
    </div>
	
  );
};


export default Home;

