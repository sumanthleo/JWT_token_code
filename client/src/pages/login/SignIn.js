import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./signin.css";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../redux/actions";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state.usersignin);
  const { users, loading } = data;

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:5000/signin", {
        email,
        password,
      });
      dispatch(signin(res.data));
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    if (users) {
      navigate("/");
    }
  }, [users]);

  return (
    <div style={{ marginTop: "2%" }}>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>

        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button
            className="primary"
            type="submit"
            style={{
              backgroundColor: "rgb(170, 252, 145)",
              color: " rgb(80, 49, 49)",
              fontWeight: "bold",
            }}
          >
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div style={{ marginBottom: "15%" }}>
            New customer?{" "}
            <Link to={`/signup`} className="link">
              Create your account
            </Link>
          </div>
          {loading && <h1>Loading...</h1>}
          {error && <h1>Error...</h1>}
        </div>
      </form>
    </div>
  );
}

export default SignIn;
