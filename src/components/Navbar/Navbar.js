import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo-sm.png";
import logo_txt from "../../assets/logo-txt.png";
import { useAuth } from "../../context/Auth/AuthContext";
import { useData } from "../../context/Video/VideoContext";
import "./Navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();
  const { authState, authDispatch } = useAuth();
  const logoutHandler = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({
      type: "LOGOUT",
    });
  };
  const [input, setInput] = useState("");
  const { dispatch } = useData();
  const searchHandler = (e) => {
    if (e.key === "Enter" || e.keyCode === 8 || e.target.value === "") {
      dispatch({
        type: "SEARCH",
        payload: e.target.value,
      });
    }
  };
  return (
    <header className="navbar">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="" />
          <img src={logo_txt} alt="" />
        </div>
      </Link>
      <div className="search">
        <i className="fas fa-search"></i>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={input}
          onKeyDown={(e) => searchHandler(e)}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="nav-links">
        {authState.token ? (
          <button
            className="btn btn-primary btn-login normal-shadow"
            onClick={logoutHandler}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary btn-login normal-shadow">
              Login
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};
