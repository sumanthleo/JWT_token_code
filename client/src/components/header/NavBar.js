import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../redux/actions";

function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const data = useSelector((state) => state.usersignin);
  const { users, loading } = data;

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to={"/"}>
          <img
            src="https://media.istockphoto.com/vectors/online-shop-logo-design-template-vector-id1150644423?k=20&m=1150644423&s=612x612&w=0&h=xKnuj3AhBbMAjxnJdT6Mh7o4BDIGaEwyol33tRwG7mU="
            alt=""
            className="image-Logo"
          />
        </Link>
      </div>

      <div className="navbar-links">
        <ul className="list" style={{ display: "flex", marginRight: "30px" }}>
          <Link to={"/"} className="link">
            <li className="listitems">Home</li>
          </Link>
        </ul>

        {users ? (
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {users.username}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <Link to={"/users"}>
                <MenuItem onClick={handleClose}>All Users</MenuItem>
              </Link>
              <Link to={"/"} className="link">
                <MenuItem onClick={handleClose}>
                  <button onClick={signoutHandler}>SignOut</button>
                </MenuItem>
              </Link>
            </Menu>
          </div>
        ) : (
          <Link to="/signin" className="link">
            <button style={{ padding: "10px", backgroundColor: "transparent" }}>
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavBar;
