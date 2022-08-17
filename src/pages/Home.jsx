import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import Search from "../components/Search/Search";

import Map from "../components/Map/Map";
import  "../styles/App.css"



const Home = () => {
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
		: (searchedCouches = couches)

  return (
    <div className="ListCouches">
      <div className="Container-Intro">
        <div className="text-intro">
          <h1>Welcome to ShareCouch</h1>
          <h3>
            The platform that connects travelers around the world looking for
            free accommodation, discover new places and make new friendships.
          </h3>
        </div>
        <div className="text-intro">

          
        <Search
					searchedString={searchedString}
					setSearchedString={setSearchedString}
          couches={searchedCouches}
				/>
      
        </div>
        <div className="pic-intro">
          <p>Photo by Bao Menglong</p>
        </div>
      </div>
      <div className="container-home">
        {couches.map((couch) => {
          console.log(couch);
          return (
            <div className="card-home" key={couch._id}>
              <div>
                <img className="image-home" src={couch.image} alt="home-img" />
                <h1>{couch.title}</h1>
{/*                 <p>{couch.location.country}</p>
                <p>{couch.location.city}</p> */}

              </div>
              

              <Link to={couch._id}>More Info</Link>
			
		
            </div>
          );
          
        })}
		
      </div>
	 	
	  	<section className="HomePageMap"> 
			  <Map/>
				</section>
    </div>
	
  );
};


export default Home;
