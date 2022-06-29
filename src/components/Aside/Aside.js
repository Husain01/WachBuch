import React from "react";
import "./Aside.css";
import {
  MdPlaylistPlay,
  MdHome,
  MdWatchLater,
  MdHistory,
} from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Aside = () => {
  return (
    <>
      <aside className="aside">
        <ul>
          
          <li>
            <NavLink to='/'  className={({ isActive }) =>
              isActive ? "active" : ""
            }>
            <MdHome className="aside-icon "></MdHome>
            <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/playlist'  className={({ isActive }) =>
              isActive ? "active" : ""
            }>
            <MdPlaylistPlay className="aside-icon"></MdPlaylistPlay>
            <span>Playlist</span>
            </NavLink>
          </li>
          <li>
          <NavLink to='/liked'  className={({ isActive }) =>
              isActive ? "active" : ""
            }>
            <IoMdHeart className="aside-icon"></IoMdHeart>
            <span>Liked</span>
            </NavLink>
          </li>
          <li>
          <NavLink to='/watchlater'  className={({ isActive }) =>
              isActive ? "active" : ""
            }>
            <MdWatchLater className="aside-icon"></MdWatchLater>
            <span>Watch Later</span>
            </NavLink>
          </li>
          <li>
          <NavLink to={token ? '/history': "/login"}  className={({ isActive }) =>
              isActive ? "active" : ""
            }>
            <MdHistory className="aside-icon"></MdHistory>
            <span>History</span>
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Aside;
