import React from "react";
import Aside from "../../components/Aside/Aside";
import { useData } from "../../context/Video/VideoContext";
import { useNavigate } from "react-router-dom";
import PlaylistFolder from "../../components/PlaylistFolder/PlaylistFolder";
import DropDownMenu from "../../components/DropDown/DropDownMenu/DropDownMenu";
import DropDownItem from "../../components/DropDown/DropDownItem/DropDownItem";
import { removePlaylist } from "../../services/playlistService/playlistService";
import { MdDelete } from "react-icons/md";

export const Playlist = () => {
  const { dispatch, playlist } = useData();
  const token = localStorage.getItem("token");
  const isPlaylistFull = playlist.length > 0;
  const navigate = useNavigate();

  return (
    <div className="content-container">
      <Aside></Aside>
      <main className="main-content">
        <div className="title-container">
          <h3>Your Playlists</h3>
          {isPlaylistFull && (
            <>
              <p>({playlist.length} playlists)</p>
              <div className="title-container-sub"></div>
            </>
          )}
        </div>
        {isPlaylistFull ? (
          <div className="responsive-grid">
            {playlist
              .slice(0)
              .reverse()
              .map((listFolder) => {
                const { _id } = listFolder;
                return (
                  <PlaylistFolder key={_id} listFolder={listFolder}>
                    <DropDownMenu>
                      <DropDownItem icon={<MdDelete />} danger={"danger"} onClick={() => removePlaylist(dispatch, _id, token)}>
                        Delete Playlist
                      </DropDownItem>
                    </DropDownMenu>
                  </PlaylistFolder>
                );
              })}
          </div>
        ) : (
          <div className="empty-option">
            <h5>Looks like you haven't created a playlist.</h5>
            <button
              className="btn btn-primary btn-login normal-shadow btn-watch"
              onClick={() => {
                navigate("/");
              }}
            >
              Start Creating Now
            </button>
          </div>
        )}
      </main>
    </div>
  );
};
