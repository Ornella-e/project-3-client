import React from "react";
import { useState, useEffect } from "react";
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
								<CouchItem
									key={couch.id}
									user={couch.username}
									image={couch.image}
									description={couch.description}
									location={couch.location}
									evaluations={couch.evaluations}
									
								/>
								
							)
						})}
					</div>
				</div>
			)
		}
	
export default Home;
