import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../services/apiHandler";

const FormSignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    location: "",
    couch: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await service.signup(user);
      console.log(res);
      navigate("/signin");
    } catch (error) {
      setError(e.message);
    }
  };
  return (
    <>
      {error && <h3 classusername="error">{error.message}</h3>}
      <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <label htmlFor="username">Username</label>
        <input
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          value={user.username}
          type="text"
          id="username"
          name="username"
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          value={user.email}
          type="email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          value={user.password}
          type="password"
          id="password"
          name="password"
        />
        <label htmlFor="location">Location</label>
        <input
          onChange={(e) =>
            setUser({ ...user, [e.target.username]: e.target.value })
          }
          value={user.location}
          type="location"
          id="location"
          name="location"
        />
        <label htmlFor="userImage">userImage</label>
        <input
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          value={user.userImage}
          type="userImage"
          id="userImage"
          name="userImage"
        />

        <label htmlFor="couch">couch</label>
        <input
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          value={user.couch}
          type="couch"
          id="couch"
          name="couch"
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default FormSignUp;
