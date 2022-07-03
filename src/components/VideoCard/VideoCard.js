import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./VideoCard.css";
import {
  MdOutlineWatchLater,
  MdPlaylistAdd,
  MdWatchLater,
} from "react-icons/md";

const VideoCard = ({ video , children}) => {
  const { _id, title, creator } = video;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="card normal-shadow">
        <img
          onClick={() => navigate(`/${_id}`)}
          src={`https://i.ytimg.com/vi/${_id}/hq720.jpg`}
          alt=""
          className="card-img"
        />
        <div className="card-footer">
          <div className="card-title">
            <h3
              className="card-title-header"
              onClick={() => navigate(`/${_id}`)}
            >
              {title}
            </h3>
            <div className="card-menu" onClick={() => setOpen(!open)}>
              <i className="fas fa-ellipsis-v"></i>
              <div className={`menu-list ${open ? "" : "menu-list-hide"}`}>
                {children}
              </div>
            </div>
          </div>
          <div className="card-description">
            <h4 className="author">{creator}</h4>
            <p className="vid-date">26 Apr 2022</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
