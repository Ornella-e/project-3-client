import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import service from "../services/apiHandler"


const EditCouch = () => {

	const [feedback, setFeedback] = useState("")
	const [editMode, setEditMode] = useState(false)
	const [editCouch, setEditCouch] = useState({})
	const { id } = useParams()
	const navigate = useNavigate()
	 console.log(id)

	const handleDelete = async (owner) => {
		const { data } = await service.delete(`/couch/${id}`, owner)
		setFeedback(data.message)
		setTimeout(() => navigate("/"), 1000)
	}

	const handleEditCouch = async (e) => {
		e.preventDefault()
		console.log(editCouch)
		const { data } = await service.put(`/couch/${id}`, editCouch)
		console.log(data)
		
		
		setEditMode(false)
	}

	
	return (
		<>
			<div className="EditDeleteCouch">
				
				<button onClick={handleDelete}>Delete the post</button>
				<button onClick={() => setEditMode(!editMode)}>Edit the post</button>
			</div>

			{/* This form is conditionally rendered */}
			{editMode && (
				<form onSubmit={handleEditCouch}>
					<div className='field'>
						<label htmlFor="image">Image: </label>
						<input className='field'
							type="file"
							id="image"
							name="image"
							multiple
							onChange={(e) =>
								setEditCouch({
									...editCouch,
									[e.target.name]:e.target.files[0],
								})
							}
						/>
					</div>
                    <div className='field'>
				<label htmlFor="title">Title: </label>
				<input className='field'
					type="text"
					id="title"
					name="title"
					value={editCouch.title}
					onChange={(e) =>
                        setEditCouch({
                            ...editCouch,
                            [e.target.name]: e.target.value,
                        })
                    }
				/>
			</div>
					<div className='field'>
						<label htmlFor="description">Description: </label>
						<textarea className='field'
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

                    <div className='field'>
				<label htmlFor="country">Country: </label>
				<input className='field'
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
      <div className='field'>
				<label htmlFor="city">City: </label>
				<input className='field'
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

export default EditCouch