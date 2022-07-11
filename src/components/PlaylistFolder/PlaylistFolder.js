import React, { useState } from "react";
import { MdPlaylistPlay } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "../VideoCard/VideoCard.css";
import './PlaylistFolder.css';


const PlaylistFolder = ({ listFolder , children}) => {
    console.log(listFolder)
  const { _id, title, videos, } = listFolder;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <div className="card card-playlist normal-shadow">
        {listFolder && (
            <>
        <img
          onClick={() => navigate(`/playlist/${_id}`) }
          src={videos.length > 0 ? `https://i.ytimg.com/vi/${videos[videos.length - 1]._id}/hq720.jpg`: "https://i.ytimg.com/vi//mqdefault_6s.jpg"}
          alt=""
          className="card-img playlistFolder-img"
          />
          <div className="card-highlight">
            <MdPlaylistPlay/>
            <p>+{videos.length}</p>
          </div>
        <div className="card-footer card-footer-playlist">
          <div className="card-title">
            <h3
              className="card-title-header"
              onClick={() => navigate(`/playlist/${_id}`)}
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
        </div>
        </>
        )}
      </div>
    </>
  );
};

export default PlaylistFolder;
