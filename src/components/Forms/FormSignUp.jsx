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
