import React, { useState }from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"


const PostMyCouch = () => {
	const [owner, setOwner] = useState("")
  const [image, setImage] = useState("")
	const [description, setDescription] = useState("")
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		const token = localStorage.getItem("authToken")
		const payload = { owner, image, description, country, city}
		try {
			const response = await axios.post(`${process.env.REACT_APP_API_URL}/couch/`, payload, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			navigate("/home")
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<form className="FormCouch" onSubmit={handleSubmit}>
			<div>
				<label htmlFor="username">User: </label>
				<input
					type="text"
					id="username"
					name="username"
					value={owner.username}
					onChange={(e) => setOwner(e.target.value)}
				/>
			</div>
      <div >
        <label htmlFor="image">Image:</label>
          <input type="file" 
          id="image"
          name="image" 
          value={image}
					onChange={(e) => setImage(e.target.value)}
          /> 
      </div>
			<div>
				<label htmlFor="description">Description: </label>
				<textarea
					type="text"
					id="description"
					name="description"
					value={description}
					rows={4}
					cols={25}
					onChange={(e) => setDescription(e.target.value)}></textarea>
			</div>
      <div>
				<label htmlFor="country">Country: </label>
				<input
					type="text"
					id="country"
					name="country"
					value={country}
					onChange={(e) => setCountry(e.target.value)}
				/>
			</div>
      <div>
				<label htmlFor="city">City: </label>
				<input
					type="text"
					id="city"
					name="city"
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
			</div>

			<button>Create a post</button>
		</form>
	)
}

export default PostMyCouch
