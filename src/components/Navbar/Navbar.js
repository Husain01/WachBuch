import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-sm.png";
import logo_txt from '../../assets/logo-txt.png'
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
        <Link to="/">
      <div className="logo">
          <img src={logo} alt=""  />
          <img src={logo_txt} alt="" />
      </div>
        </Link>
      <div className="search">
        <i className="fas fa-search"></i>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
        //   onChange={(e) => {
        //     productDispatch({
        //       type: "FILTER_BY_SEARCH",
        //       payload: e.target.value,
        //     });
        //   }}
        />
      </div>
      <div className="nav-links">
        {/* {authState.token ? (
          <button
            className="btn btn-primary btn-login normal-shadow"
            onClick={logoutHandler}
          >
            Logout
          </button>
        ) : ( */}
          <Link to="/login">
            <button className="btn btn-primary btn-login normal-shadow">
              Login
            </button>
          </Link>
        {/* )} */}

        
      </div>
    </header>
  );
};

export default Navbar;
