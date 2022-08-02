import React from "react";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import '../styles/App.css';
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
					<h2>Filter Area</h2>
					<div className="container-home">
						{couches.map((couch) => {
							console.log(couch)
							return (
								<div className="card-home" key={couch._id}>
									<div>
									<img className="image-home" src={couch.image}  />
									<h1>{couch.title}</h1>
									<p>{couch.location.country}</p>
									<p>{couch.location.city}</p>
									</div>
							
								<Link to={couch._id}>More Info</Link>
									</div>	
							
								
							)
						})}
					</div>
				</div>
			)
		}
	
export default Home;
