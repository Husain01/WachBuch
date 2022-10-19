import React from "react";
import "./Tablist.css";
import { NavLink } from "react-router-dom";
import {
  MdPlaylistPlay,
  MdHome,
  MdWatchLater,
  MdOutlineWatchLater,
  MdHistory,
  MdOutlineHome,
  MdOutlinePlaylistPlay,
} from "react-icons/md";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

export const Tablist = () => {
  return (
    <div className="tablist">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "tab-active" : "")}
            children={({ isActive }) => {
              return (
                <>
                  {isActive ? (
                    <MdHome className="tab-icon "></MdHome>
                  ) : (
                    <MdOutlineHome className="tab-icon " />
                  )}
                  <span>Home</span>
                </>
              );
            }}
          ></NavLink>
        </li>
        <li>
          <NavLink
            to="/playlist"
            className={({ isActive }) => (isActive ? "tab-active" : "")}
            children={({ isActive }) => {
              return (
                <>
                  {isActive ? (
                    <MdPlaylistPlay className="tab-icon "></MdPlaylistPlay>
                  ) : (
                    <MdOutlinePlaylistPlay className="tab-icon tab-opacity" />
                  )}
                  <span>Playlist</span>
                </>
              );
            }}
          ></NavLink>
        </li>
        <li>
          <NavLink
            to="/liked"
            className={({ isActive }) => (isActive ? "tab-active" : "")}
            children={({ isActive }) => {
              return (
                <>
                  {isActive ? (
                    <IoMdHeart className="tab-icon"></IoMdHeart>
                  ) : (
                    <IoMdHeartEmpty className="tab-icon " />
                  )}
                  <span>Liked</span>
                </>
              );
            }}
          ></NavLink>
        </li>
        <li>
          <NavLink
            to="/watchlater"
            className={({ isActive }) => (isActive ? "tab-active" : "")}
            children={({ isActive }) => {
              return (
                <>
                  {isActive ? (
                    <MdWatchLater className="tab-icon"></MdWatchLater>
                  ) : (
                    <MdOutlineWatchLater className="tab-icon " />
                  )}
                  <span>Watch Later</span>
                </>
              );
            }}
          ></NavLink>
        </li>
        <li>
          <NavLink
            to="/history"
            className={({ isActive }) => (isActive ? "tab-active" : "")}
            children={({ isActive }) => {
              return (
                <>
                  {isActive ? (
                    <MdHistory className="tab-icon"></MdHistory>
                  ) : (
                    <MdHistory className="tab-icon tab-opacity" />
                  )}
                  <span>History</span>
                </>
              );
            }}
          ></NavLink>
        </li>
      </ul>
    </div>
  );
};
