import React from "react"
import "./Account.css"
import { NavLink } from "react-router-dom"
import ProfileCard from "../../components/User/ProfileCard"





const Account = () => {
	return (
		
		<div className="Acc">
			<div className="ConteinerLeft">
				<ProfileCard/>
			</div>

			<div className="ConteinerRight">
				<div className="Cards">

			<div className="container">
				<div className="card">
					<div className="face face1">
						<div className="content">
							
							<h3>Reservations</h3> 
						</div>
					</div>
					<div className="face face2">
						<div className="content">
							<p>Take Control of your Reservations</p>
							<a href="/reservations">Read More</a>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="face face1">
						<div className="content">
							{/* <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"/>*/}
							<h3>My Couches</h3> 
						</div>
					</div>
					<div className="face face2">
						<div className="content">
							<p>Take Control of your Couches</p>
							<a href="/my-couch">Read More</a>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="face face1">
						<div className="content">
							{/* <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"/>*/}
							<h3>My Evaluations</h3> 
						</div>
					</div>
					<div className="face face2">
						<div className="content">
							<p>Take Control of your Evaluations</p>
							<a href="/evaluations">Read More</a>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="face face1">
						<div className="content">
							{/* <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"/>*/}
							<h3>My Favorites</h3> 
						</div>
					</div>
					<div className="face face2">
						<div className="content">
							<p>Take Control of your Favorite Couches</p>
							<a href="/favorites">Read More</a>
						</div>
					</div>
				</div>
				
				<div className="card">
					<div className="face face1">
						<div className="content">
							{/* <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"/>*/}
							<h3>Become a Host</h3> 
						</div>
					</div>
					<div className="face face2">
						<div className="content">
							<p>Take Control of your Favorite Couches</p>
							<a href="/favorites">Read More</a>
						</div>
					</div>
				</div>
        
        	</div>
    </div>
	
	
				


			</div>
		</div>
	)
}

export default Account
