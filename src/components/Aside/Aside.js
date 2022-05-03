import React from "react";
import "./Aside.css";
import {
  MdPlaylistPlay,
  MdHome,
  MdWatchLater,
  MdHistory,
} from "react-icons/md";
import { IoMdHeart } from "react-icons/io";

const Aside = () => {
  return (
    <>
      <aside className="aside">
        <ul>
          <li className="active">
            <MdHome className="aside-icon "></MdHome>
            <span>Home</span>
          </li>
          <li>
            <MdPlaylistPlay className="aside-icon"></MdPlaylistPlay>
            <span>Playlist</span>
          </li>
          <li>
            <IoMdHeart className="aside-icon"></IoMdHeart>
            <span>Liked</span>
          </li>
          <li>
            <MdWatchLater className="aside-icon"></MdWatchLater>
            <span>Watch Later</span>
          </li>
          <li>
            <MdHistory className="aside-icon"></MdHistory>
            <span>History</span>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Aside;
