import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import service from "../../services/apiHandler"


const EditProfile = () => {

	const [feedback, setFeedback] = useState("")
	const [editMode, setEditMode] = useState(false)
	const [editProfile, setEditProfile] = useState({})
	const { id } = useParams()
	const navigate = useNavigate()
	 console.log(id)

	const handleDelete = async (owner) => {
		const { data } = await service.delete(`/profile/${id}`, owner)
		setFeedback(data.message)
		setTimeout(() => navigate("/"), 1000)
	}

	const handleEditProfile = async (e) => {
		e.preventDefault()
		console.log(editProfile)
		const { data } = await service.put(`/profile/${id}`, editProfile)
		console.log(data)
		
		
		setEditMode(false)
	}

	
	return (
		<>
			

			{/* This form is conditionally rendered */}
			{editMode && (
				<form onSubmit={handleEditProfile}>
					<div>
						<label htmlFor="image">Profile Picture: </label>
						<input
							type="file"
							id="image"
							name="image"
							multiple
							onChange={(e) =>
								setEditProfile({
									...editProfile,
									[e.target.name]:e.target.files[0],
								})
							}
						/>
					</div>
                    <div>
				<label htmlFor="name">Name: </label>
				<input
					type="text"
					id="name"
					name="name"
					value={editProfile.name}
					onChange={(e) =>
                        setEditProfile({
                            ...editProfile,
                            [e.target.name]: e.target.value,
                        })
                    }
				/>
			</div>
					<div>
						<label htmlFor="description">Description: </label>
						<textarea
							type="text"
							id="description"
							name="description"
							value={editProfile.description}
							rows={4}
							cols={25}
							onChange={(e) =>
								setEditProfile({
									...editProfile,
									[e.target.name]: e.target.value,
								})
							}></textarea>
					</div>

                    <div>
				<label htmlFor="country">Country: </label>
				<input
					type="text"
					id="country"
					name="country"
					value={editProfile.country}
					onChange={(e) =>
                        setEditProfile({
                            ...editProfile,
                            [e.target.name]: e.target.value,
                        })
                    }
				/>
			</div>
      <div>
				<label htmlFor="city">City: </label>
				<input
					type="text"
					id="city"
					name="city"
					value={editProfile.city}
					onChange={(e) =>
                        setEditProfile({
                            ...editProfile,
                            [e.target.name]: e.target.value,
                        })
                    }
				/>
			</div>					

                <div className="EditDeleteProfile">
				    <button onClick={handleDelete}>Delete the Profile</button>
                    <button onClick={handleEditProfile}>Edit the Profile and Save</button>
			    </div>
				</form>
			)}
		</>
	)
}

export default EditProfile