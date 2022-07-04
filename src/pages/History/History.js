import React from "react";
import { useNavigate } from "react-router-dom";
import Aside from "../../components/Aside/Aside";
import { useAuth } from "../../context/Auth/AuthContext";
import { useData } from "../../context/Video/VideoContext";
import './History.css';
import {MdDelete, MdOutlineWatchLater, MdPlaylistAdd} from 'react-icons/md';
import { clearHistory, removeFromHistory } from "../../services/historyService/historyService";
import VideoCard from "../../components/VideoCard/VideoCard";
import DropDownMenu from "../../components/DropDown/DropDownMenu/DropDownMenu";
import DropDownItem from "../../components/DropDown/DropDownItem/DropDownItem";



export const History = () => {
  const { dispatch, videos} = useData();
  // const {_id} = videos;
  const token = localStorage.getItem('token');
  const history = videos.filter((vid) => vid.inHistory);
  const isHistory = history.length > 0;
  // const isHistory = true;
  const navigate = useNavigate();

  return (
    <div className="content-container">
      <Aside></Aside>
      <main className="main-content">
        <div className="title-container">
        <h3>History</h3>
        {isHistory && (
          <div className="title-container-sub">
            <p>({history.length} videos)</p>
            <button className="btn btn-history btn-login normal-shadow" onClick={() => clearHistory(dispatch, token)}>
              <MdDelete className="delete-icon "/>
            Clear History</button>
            </div>
          )}
          </div>
        
          {isHistory ? (
            <div className="responsive-grid">
            {history.slice(0).reverse().map((video) => (
              <VideoCard key={video._id} video={video} >
              <DropDownMenu>
                <DropDownItem icon={<MdOutlineWatchLater/>} >
                Add to Watch Later
                </DropDownItem>
                <DropDownItem icon={<MdPlaylistAdd/>}>
                Add to Playlist
                </DropDownItem>
                <DropDownItem icon={<MdDelete/>} danger={"danger"} onClick={()=> { removeFromHistory(dispatch, video._id, token) }}>
                Remove from History
                </DropDownItem>
              </DropDownMenu>
            </VideoCard>
            ))}
              </div>
          ): (<div className="empty-history">
            <h5>Looks like you haven't watched anything yet.</h5>
            <button className="btn btn-primary btn-login normal-shadow btn-watch" onClick={() => {
              navigate('/')
            }}>Start Watching Now</button>
          </div>
          )} 
      </main>
    </div>
  );
};
