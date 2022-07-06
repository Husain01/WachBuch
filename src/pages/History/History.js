import React from "react";
import { useNavigate } from "react-router-dom";
import Aside from "../../components/Aside/Aside";
import { useData } from "../../context/Video/VideoContext";
import "./History.css";
import { MdDelete, MdOutlineWatchLater, MdPlaylistAdd } from "react-icons/md";
import {
  clearHistory,
  removeFromHistory,
} from "../../services/historyService/historyService";
import VideoCard from "../../components/VideoCard/VideoCard";
import DropDownMenu from "../../components/DropDown/DropDownMenu/DropDownMenu";
import DropDownItem from "../../components/DropDown/DropDownItem/DropDownItem";
import { watchLaterHandler } from "../../utils/watchLaterUtils";

export const History = () => {
  const { dispatch, videos } = useData();
  const token = localStorage.getItem("token");
  const history = videos.filter((vid) => vid.inHistory);
  const isHistory = history.length > 0;
  const navigate = useNavigate();

  return (
    <div className="content-container">
      <Aside></Aside>
      <main className="main-content">
        <div className="title-container">
          <h3>History</h3>
          {isHistory && (
            <>
              <p>({history.length} videos)</p>
              <div className="title-container-sub">
                <button
                  className="btn btn-history btn-login normal-shadow"
                  onClick={() => clearHistory(dispatch, token)}
                >
                  <MdDelete className="delete-icon " />
                  Clear History
                </button>
              </div>
            </>
          )}
        </div>

        {isHistory ? (
          <div className="responsive-grid">
            {history
              .slice(0)
              .reverse()
              .map((video) => {
                const { _id, inWatchLater } = video;
                return (
                  <VideoCard key={_id} video={video}>
                    <DropDownMenu>
                      <DropDownItem
                        icon={<MdOutlineWatchLater />}
                        danger={inWatchLater ? "danger" : ""}
                        onClick={() =>
                          watchLaterHandler(dispatch, video, token)
                        }
                      >
                        {inWatchLater
                          ? "Remove from Watch Later"
                          : "Add to Watch Later"}
                      </DropDownItem>
                      <DropDownItem icon={<MdPlaylistAdd />}>
                        Add to Playlist
                      </DropDownItem>
                      <DropDownItem
                        icon={<MdDelete />}
                        danger={"danger"}
                        onClick={() => {
                          removeFromHistory(dispatch, _id, token);
                        }}
                      >
                        Remove from History
                      </DropDownItem>
                    </DropDownMenu>
                  </VideoCard>
                );
              })}
          </div>
        ) : (
          <div className="empty-option">
            <h5>Looks like you haven't watched anything yet.</h5>
            <button
              className="btn btn-primary btn-login normal-shadow btn-watch"
              onClick={() => {
                navigate("/");
              }}
            >
              Start Watching Now
            </button>
          </div>
        )}
      </main>
    </div>
  );
};
