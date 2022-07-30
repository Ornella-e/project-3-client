import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"


const DetailsCouch = () => {
	const [detailCouch, setDetailCouch] = useState({})
	const [feedback, setFeedback] = useState("")
	const [editMode, setEditMode] = useState(false)
	const [editCouch, setEditCouch] = useState({})
	const { id } = useParams()
	const navigate = useNavigate()
	// console.log(id)

	const handleDelete = async () => {
		const { data } = await axios.delete(`${process.env.REACT_APP_API_URL}/couch/${id}`)
		setFeedback(data.message)
		setTimeout(() => navigate("/"), 1000)
	}

	const handleEditCouch = async (e) => {
		e.preventDefault()
		console.log(editCouch)
		const { data } = await axios.put(`${process.env.REACT_APP_API_URL}/couch/${id}`, editCouch)
		console.log(data)
		
		setDetailCouch(data)
		setEditMode(false)
	}

	
	return (
		<>
			<div className="DetailsCouch">
				{feedback && <h2>{feedback}</h2>}
				<img src={detailCouch.image}/>
				<p>{detailCouch.description}</p>
				
				<button onClick={handleDelete}>Delete the post</button>
				<button onClick={() => setEditMode(!editMode)}>Edit the post</button>
			</div>

			{/* This form is conditionally rendered */}
			{editMode && (
				<form onSubmit={handleEditCouch}>
					<div>
						<label htmlFor="image">Image: </label>
						<input
							type="file"
							id="image"
							name="image"
							value={editCouch.image}
							onChange={(e) =>
								setEditCouch({
									...editCouch,
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
							value={editCouch.description}
							rows={4}
							cols={25}
							onChange={(e) =>
								setEditCouch({
									...editCouch,
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
					value={editCouch.country}
					onChange={(e) =>
                        setEditCouch({
                            ...editCouch,
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
					value={editCouch.city}
					onChange={(e) =>
                        setEditCouch({
                            ...editCouch,
                            [e.target.name]: e.target.value,
                        })
                    }
				/>
			</div>					

				

					<button>Edit the post</button>
				</form>
			)}
		</>
	)
}

export default DetailsCouch