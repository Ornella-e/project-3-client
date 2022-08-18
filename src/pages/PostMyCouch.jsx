import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../context/auth/useAuth";
import service from "../services/apiHandler";

const PostMyCouch = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  console.log(currentUser);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();

    fd.append("owner", currentUser._id);
    fd.append("image", image);
    fd.append("title", title);
    fd.append("description", description);
    fd.append("country", country);
    fd.append("city", city);

    try {
      await service.post("/couch", fd);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
     
      <form className="FormCouch" onSubmit={handleSubmit}>
      <h3 className="field">To post your couch, please fill in the following information.</h3>
        <div className="field">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            className="field"
            id="image"
            name="image"
            multiple
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="field">
          <label htmlFor="title">Title: </label>
          <input
            className="field"
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="description">Description: </label>
          <textarea
            className="field"
            type="text"
            id="description"
            name="description"
            value={description}
            rows={4}
            cols={25}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="field">
          <label htmlFor="country">Country: </label>
          <input
            className="field"
            type="text"
            id="country"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="city">City: </label>
          <input
            className="field"
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <button className="field">Create a post</button>
      </form>
    </>
  );
};

export default PostMyCouch;
