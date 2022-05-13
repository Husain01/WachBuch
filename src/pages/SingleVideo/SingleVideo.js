import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import {
  MdOutlineWatchLater,
  MdPlaylistAdd,
  MdWatchLater,
} from "react-icons/md";
import ReactPlayer from "react-player/lazy";
import Aside from "../../components/Aside/Aside";
import "./SingleVideo.css";

export const SingleVideo = () => {
  return (
    <div className="content-container">
      <Aside></Aside>
      <div className="main-content">
        <div className="video-player">
          <div className="player normal-shadow">
            <ReactPlayer
              url={"https://www.youtube.com/watch?v=UlIDxrK43ko"}
              controls={true}
              playing={true}
              pip={true}
              width="100%"
              height="100%"
            ></ReactPlayer>
          </div>
          <div className="video-description">
            <div className="video-title">
              <h3 className="vid-title">What's on My Bookshelf (2022)</h3>
              <h5 className="vid-author">Ali Abdaal</h5>
            </div>
            <div className="video-options">
              <div className="vid-actions">
                <IoMdHeartEmpty></IoMdHeartEmpty>
              </div>
              <div className="vid-actions">
                <MdPlaylistAdd></MdPlaylistAdd>
              </div>
              <div className="vid-actions">
                <MdOutlineWatchLater></MdOutlineWatchLater>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
