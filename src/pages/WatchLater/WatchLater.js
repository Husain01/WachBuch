import React from "react";
import { MdOutlineWatchLater, MdPlaylistAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Aside from "../../components/Aside/Aside";
import DropDownItem from "../../components/DropDown/DropDownItem/DropDownItem";
import DropDownMenu from "../../components/DropDown/DropDownMenu/DropDownMenu";
import { Tablist } from "../../components/Tablist/Tablist";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useData } from "../../context/Video/VideoContext";
import { removeFromWatchLater } from "../../services/watchLaterService/watchLaterService";

export const WatchLater = () => {
  const { dispatch, videos, setModal, setModalData } = useData();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const watchLater = videos.filter((video) => video.inWatchLater);
  const isWatchLaterFull = watchLater.length > 0;
  return (
    <div className="content-container">
      <Aside></Aside>
      <main className="main-content">
        <div className="title-container">
          <h3>Watch Later</h3>
          {isWatchLaterFull && (
            <>
              <p>({watchLater.length} videos)</p>
              <div className="title-container-sub"></div>
            </>
          )}
        </div>
        {isWatchLaterFull ? (
          <div className="responsive-grid">
            {watchLater
              .slice(0)
              .reverse()
              .map((video) => {
                const { _id } = video;
                const addToPlaylist = () => {
                  if (token) {
                    setModal(true);
                    setModalData(video);
                  } else {
                    navigate("/login");
                  }
                };
                return (
                  <VideoCard key={_id} video={video}>
                    <DropDownMenu>
                      <DropDownItem
                        icon={<MdOutlineWatchLater />}
                        danger={"danger"}
                        onClick={() =>
                          removeFromWatchLater(dispatch, _id, token)
                        }
                      >
                        Remove from Watch Later
                      </DropDownItem>
                      <DropDownItem
                        icon={<MdPlaylistAdd />}
                        onClick={() => addToPlaylist()}
                      >
                        Add to Playlist
                      </DropDownItem>
                    </DropDownMenu>
                  </VideoCard>
                );
              })}
          </div>
        ) : (
          <div className="empty-option">
            <h5>Looks like you haven't added anything yet to watch later.</h5>
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
      <Tablist />
    </div>
  );
};
