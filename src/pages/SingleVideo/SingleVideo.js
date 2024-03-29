import React from "react";
import {
  MdOutlineWatchLater,
  MdPlaylistAdd,
  MdThumbUp,
  MdThumbUpOffAlt,
  MdWatchLater,
} from "react-icons/md";
import ReactPlayer from "react-player/lazy";
import { useNavigate, useParams } from "react-router-dom";
import Aside from "../../components/Aside/Aside";
import { Tablist } from "../../components/Tablist/Tablist";
import { useData } from "../../context/Video/VideoContext";
import { likedHandler } from "../../utils/LikedUtils";
import { watchLaterHandler } from "../../utils/watchLaterUtils";
import "./SingleVideo.css";

export const SingleVideo = () => {
  const { videoId } = useParams();
  const { videos, dispatch, setModal, setModalData } = useData();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const video = videos?.find((video) => video._id === videoId);
  const inWatchLater = video && video.inWatchLater;
  const inLiked = video && video.inLiked;

  const addToPlaylist = () => {
    if (token) {
      setModal(true);
      setModalData(video);
    } else {
      navigate("/login");
    }
  };
  return video ? (
    <div className="content-container">
      <Aside></Aside>
      <div className="main-content">
        <div className="video-player">
          <div className="player normal-shadow">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${video._id}`}
              controls={true}
              playing={true}
              pip={true}
              width="100%"
              height="100%"
            ></ReactPlayer>
          </div>
          <div className="video-description">
            <div className="video-title">
              <h3 className="vid-title">{video.title}</h3>
              <h5 className="vid-author">{video.creator}</h5>
            </div>
            <div className="video-options">
              <div
                className="vid-actions"
                onClick={() =>
                  token
                    ? likedHandler(dispatch, video, token)
                    : navigate("/login")
                }
              >
                {inLiked ? <MdThumbUp /> : <MdThumbUpOffAlt />}
              </div>
              <div className="vid-actions" onClick={() => addToPlaylist()}>
                <MdPlaylistAdd />
              </div>
              <div
                className="vid-actions"
                onClick={() =>
                  token
                    ? watchLaterHandler(dispatch, video, token)
                    : navigate("/login")
                }
              >
                {inWatchLater ? <MdWatchLater /> : <MdOutlineWatchLater />}
              </div>
            </div>
          </div>
          <div className="video-desc">
            <p>{video.description}</p>
          </div>
        </div>
      </div>
      <Tablist />
    </div>
  ) : (
    <></>
  );
};
