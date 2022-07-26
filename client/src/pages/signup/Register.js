import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../redux/actions";

import "./register.css";
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:5000/signup", {
        username,
        email,
        password,
      });
      dispatch(register(res.data));
      res.data && navigate("/signin");
      console.log(res.data);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div style={{ marginTop: "5%" }}>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Signup / Register</h1>
        </div>

        <div>
          <label htmlFor="email">UserName</label>
          <input
            type="username"
            id="username"
            placeholder="Enter username"
            required
            onChange={(e) => setUsername(e.target.value)}
          ></input>
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
            Sign Up
          </button>
          <div>
            Already have an account?{" "}
            <Link to={`/signin`} className="link">
              Sign-In
            </Link>
          </div>
          {error && (
            <span style={{ color: "red", marginTop: "10px" }}>
              Something went wrong
            </span>
          )}
        </div>
      </form>
    </div>
  );
}

export default Register;
