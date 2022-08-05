import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import axios from "axios";

const Home = () => {
  const [couches, setCouches] = useState([]);

  const getAllCouches = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/couch`);
    console.log(response);
    setCouches(response.data);
  };
  useEffect(() => {
    getAllCouches();
  }, []);

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
          <input
            type="text"
            className="input-intro"
            placeholder="Search for free accommodation..."
          />
          <button className="button-intro">Search</button>
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
                <p>{couch.location.country}</p>
                <p>{couch.location.city}</p>
              </div>

              <Link to={couch._id}>More Info</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default Home;
