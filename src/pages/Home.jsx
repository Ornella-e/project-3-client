import React from "react";
import { useState } from "react";
//import './App.css';
import CouchItem from '../components/Couch/CouchItem';
import couchesData from '../data'

const Home = () => {
	const [couches, setCouches] = useState(couchesData);
		const displayCouches = () => {
			return (
			  couches.map((couch) => {
				return (
				  <CouchItem
					key={couch.id}
					 image={couch.image}
					 location={couch.location}
					 evaluations={couch.evaluation.grade}
				  />
				)
			  })
			)
		  }
	 return (
		<div>
			<h1>Filter space</h1>
			<div className='couches-list'>
        {
          displayCouches()
        }
            </div>
		</div>
	);
};

export default Home;
