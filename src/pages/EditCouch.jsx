import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import service from "../services/apiHandler";
import axios from "axios";

const EditCouch = () => {
  const [feedback, setFeedback] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editCouch, setEditCouch] = useState({});
  const [couch, setCouch] = useState(null);
  const [owner, setOwner] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  const handleDelete = async (couchId) => {
    const { data } = await service.delete(`/couch/${id}`, couchId);
    setFeedback(data.message);
    setTimeout(() => navigate("/"), 1000);
  };

  const handleEditCouch = async (e) => {
    e.preventDefault();
    console.log(editCouch);
    const { data } = await service.put(`/couch/${id}`, editCouch);
    console.log(data);
    setCouch(data);
    setEditMode(false);
  };

  const getOneCouch = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/couch/${id}`
    );
    console.log(data);
    setEditCouch(data);
    setCouch(data);
  };
  useEffect(() => {
    getOneCouch();
  }, []);

  return (
    <>
      {/* { owner? ( */}
      <div className="EditDeleteCouch">
        {feedback && <h2>{feedback}</h2>}
        <button onClick={handleDelete}>Delete the post</button>
        <button onClick={() => setEditMode(!editMode)}>Edit the post</button>
      </div>
      {/* ):("")*/}

      {/* This form is conditionally rendered */}
      {editMode && (
        <form className="FormCouch" onSubmit={handleEditCouch}>
          <div className="field">
            <label htmlFor="title">Title: </label>
            <input
              className="field"
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
          <div className="field">
            <label htmlFor="description">Description: </label>
            <textarea
              className="field"
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
              }
            ></textarea>
          </div>

          <button>Edit the post</button>
        </form>
      )}
    </>
  );
};

export default EditCouch;
