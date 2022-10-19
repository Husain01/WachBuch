import React from "react";
import { MdDelete, MdOutlineWatchLater, MdPlaylistAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Aside from "../../components/Aside/Aside";
import DropDownItem from "../../components/DropDown/DropDownItem/DropDownItem";
import DropDownMenu from "../../components/DropDown/DropDownMenu/DropDownMenu";
import { Tablist } from "../../components/Tablist/Tablist";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useData } from "../../context/Video/VideoContext";
import { removefromLiked } from "../../services/likedService/likedService";
import { watchLaterHandler } from "../../utils/watchLaterUtils";

export const Liked = () => {
  const { dispatch, videos, setModal, setModalData } = useData();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const liked = videos.filter((video) => video.inLiked);
  const isLikedFull = liked.length > 0;
  return (
    <div className="content-container">
      <Aside></Aside>
      <main className="main-content">
        <div className="title-container">
          <h3>Liked</h3>
          {isLikedFull && (
            <>
              <p>({liked.length} videos)</p>
              <div className="title-container-sub"></div>
            </>
          )}
        </div>
        {isLikedFull ? (
          <div className="responsive-grid">
            {liked
              .slice(0)
              .reverse()
              .map((video) => {
                const { _id, inWatchLater } = video;
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
                        danger={inWatchLater ? "danger" : ""}
                        onClick={() =>
                          watchLaterHandler(dispatch, video, token)
                        }
                      >
                        {inWatchLater
                          ? "Remove from Watch Later"
                          : "Add to Watch Later"}
                      </DropDownItem>
                      <DropDownItem
                        icon={<MdPlaylistAdd />}
                        onClick={() => addToPlaylist()}
                      >
                        Add to Playlist
                      </DropDownItem>
                      <DropDownItem
                        icon={<MdDelete />}
                        danger={"danger"}
                        onClick={() => removefromLiked(dispatch, _id, token)}
                      >
                        Remove from Liked
                      </DropDownItem>
                    </DropDownMenu>
                  </VideoCard>
                );
              })}
          </div>
        ) : (
          <div className="empty-option">
            <h5>Looks like you haven't Liked anything yet.</h5>
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
