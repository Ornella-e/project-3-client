import React, { useState }from 'react'
import { useNavigate } from "react-router-dom"
import useAuth from '../context/auth/useAuth'
import service from '../services/apiHandler'


const PostMyCouch = () => {
	
  const [image, setImage] = useState("")
  const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
	const navigate = useNavigate()
	const {currentUser} = useAuth()
	console.log(currentUser)
	
	const handleSubmit = async (e) => {
		e.preventDefault()

	//	const token = localStorage.getItem("authToken")
		//const payload = { currentUser, image, description, country, city}
		const fd = new FormData()

        fd.append("username", currentUser.username)
		fd.append("image", image)
		fd.append("title", title)
		fd.append("description", description)
		fd.append("country", country)
		fd.append("city", city)

		try {
	//		const response = await axios.post(`${process.env.REACT_APP_API_URL}/couch/`, payload, {
	//			headers: {
	//				Authorization: `Bearer ${token}`,
	//			},
	//		})
			await service.post('/couch', fd)
			navigate("/")
			// exemple of functions useing service   await service.createCouch(payload)
		} catch (error) {
			console.error(error)
		}
	}

	return (
    
		<form className="FormCouch" onSubmit={handleSubmit}>
       <div>
	   <label htmlFor="user">User: </label>
				<input
				type="text"
				id="user"
				name="user"
      value={currentUser.username}
	  readOnly={currentUser.username}
	  />

    </div>
      <div >
        <label htmlFor="image">Image:</label>
          <input type="file" 
          id="image"
          name="image" 
          multiple
					onChange={(e) => setImage(e.target.files[0])}
          /> 
      </div>
	  <div>
				<label htmlFor="title">Title: </label>
				<input
					type="text"
					id="title"
					name="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
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
