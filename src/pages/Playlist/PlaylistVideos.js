import React from "react";
import { MdDelete } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";
import Aside from "../../components/Aside/Aside";
import DropDownItem from "../../components/DropDown/DropDownItem/DropDownItem";
import DropDownMenu from "../../components/DropDown/DropDownMenu/DropDownMenu";
import { Tablist } from "../../components/Tablist/Tablist";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useData } from "../../context/Video/VideoContext";
import { removeVideoFromPlaylist } from "../../services/playlistService/playlistService";

export const PlaylistVideos = () => {
  const { playListId } = useParams();
  const { playlist, dispatch } = useData();
  const playlistVideo = playlist?.find((list) => list._id === playListId);
  const { title, videos } = playlistVideo;
  const isPlaylistFull = videos.length > 0;
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  return (
    <div className="content-container">
      <Aside></Aside>
      <main className="main-content">
        <div className="title-container">
          <h3>{title}</h3>
          {isPlaylistFull && (
            <>
              <p>({videos.length} videos)</p>
              <div className="title-container-sub"></div>
            </>
          )}
        </div>
        {isPlaylistFull ? (
          <div className="responsive-grid">
            {videos
              .slice(0)
              .reverse()
              .map((video) => {
                const { _id } = video;
                return (
                  <VideoCard key={_id} video={video}>
                    <DropDownMenu>
                      <DropDownItem
                        icon={<MdDelete />}
                        danger={"danger"}
                        onClick={() =>
                          removeVideoFromPlaylist(
                            dispatch,
                            playListId,
                            _id,
                            token
                          )
                        }
                      >
                        Remove From Playlist
                      </DropDownItem>
                    </DropDownMenu>
                  </VideoCard>
                );
              })}
          </div>
        ) : (
          <div className="empty-option">
            <h5>Looks like you haven't added anything in {title}.</h5>
            <button
              className="btn btn-primary btn-login normal-shadow btn-watch"
              onClick={() => {
                navigate("/");
              }}
            >
              Start Adding Now
            </button>
          </div>
        )}
      </main>
      <Tablist />
    </div>
  );
};
