import React from "react"
import useAuth from "../../context/auth/useAuth"
import "./Account.css"
import ProfileImage from '../../components/User/ProfileImage';
import bootstrap from "bootstrap"


const Account = () => {
	const { isLoggedIn, currentUser, removeUser } = useAuth()

	return (
		<div class="card" className="cardA">
				<ProfileImage alt="Avatar" className="my-5" style={{ width: '80px' }} fluid/>
			<div>
				<h5 className="nameA"> {currentUser.username}</h5>
				
			</div>
			<ul class="list-group list-group-flush">
				<a class="btn btn-outline-secondary" href="/reservations">Reservations</a>
				<a class="btn btn-outline-secondary" href="/my-couch">Be a Host</a>
				<a class="btn btn-outline-secondary" href="/:reservationId/evaluations/:couchId">Evaluations</a>
			</ul>
			<div className="End">
				{/* <a className="btn btn-outline-dark" href="/:id/editprofile">Edit Profile</a> */}
				<a className="btn btn-outline-danger" onClick={removeUser}>Log out</a>
			</div>
		</div>
		
		
	)
}

export default Account




{/* <div className="Acc">
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
		</div> */}