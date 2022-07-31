import React from "react";
import { useState, useEffect, Link} from "react";
//import './App.css';
import CouchItem from '../components/Couch/CouchItem';
import axios from "axios";



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
								<button>More Info</button>
								
									</div>	
							
								
							)
						})}
					</div>
				</div>
			)
		}
	
export default Home;
