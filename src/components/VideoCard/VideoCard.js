import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/Video/VideoContext";
import { addToHistory } from "../../services/historyService/historyService";
import "./VideoCard.css";


const VideoCard = ({ video , children}) => {
  const { _id, title, creator, inHistory } = video;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem('token');
  const { dispatch } = useData();
  const addVideotoHistoryHandler = () => {
    navigate(`/${_id}`);
    !inHistory && addToHistory(dispatch, video, token);
    
  }
  return (
    <>
      <div className="card normal-shadow">
        <img
          onClick={() => addVideotoHistoryHandler() }
          src={`https://i.ytimg.com/vi/${_id}/hq720.jpg`}
          alt=""
          className="card-img"
        />
        <div className="card-footer">
          <div className="card-title">
            <h3
              className="card-title-header"
              onClick={() => addVideotoHistoryHandler()}
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
