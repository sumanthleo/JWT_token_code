import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions";
import { Link } from "react-router-dom";
import "./users.css";
import axios from "axios";

function Users() {
  const dispatch = useDispatch();

  const tokenId = JSON.parse(localStorage.getItem("users"));

  const handleClick = async () => {
    try {
      const res = await axios.get("http://localhost:5000/getusers", {
        headers: {
          token: `Bearer ${tokenId.token}`,
        },
      });
      dispatch(getUsers(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  const userss = useSelector((state) => state.getallusers);
  const { users, loading, error } = userss;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <button onClick={handleClick} style={{ color: "black" }}>
          Get All Users Details
        </button>
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error...</h1>}
      </div>
      {users &&
        users.map((user) => (
          <div key={user._id} className="usersDataBox">
            <div>UserName : {user.username}</div>
            <div>Email : {user.email}</div>
          </div>
        ))}
    </div>
  );
}

export default Users;
