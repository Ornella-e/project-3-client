import React from "react";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
//import './App.css';
import CouchItem from '../components/Couch/CouchItem';
import axios from "axios"
import Map from "../components/Map/Map";



const Home = () => {
	const [couches, setCouches] = useState([]);

			const getAllCouches = async () => {
				const response = await axios.get(`${process.env.REACT_APP_API_URL}/couch`)
				 console.log(response)
				setCouches(response.data)
			}
			useEffect(() => {
				getAllCouches()
			}, [])

			return (
				<div className="ListCouches">
					<h2>Here are the couches !</h2>
					<div className="container">
						{couches.map((couch) => {
							console.log(couch)
							return (
								<div className="card" key={couch._id}>
									<div>
									<img src={couch.image}  />
									<h1>{couch.title}</h1>
									<p>{couch.location.country}</p>
									<p>{couch.location.city}</p>
									</div>
							
								<Link to={couch._id}>More Info</Link>
									</div>	
							
								
							)
						})}
						<section style={{width: 600, height: 400}}>
							<Map />
						</section>
					</div>
				</div>
			)
		}
	
export default Home;
