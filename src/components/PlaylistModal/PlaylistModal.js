import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useData } from "../../context/Video/VideoContext";
import {
  addVideoToPlaylist,
  createNewPlaylist,
  removeVideoFromPlaylist,
} from "../../services/playlistService/playlistService";
import "./PlaylistModal.css";

export const PlaylistModal = () => {
  // const [modal, setModal] = useState(true);
  // const {dispatch} = useData();
  const { modal, setModal, dispatch, playlist, modalData } = useData();
  const [showInput, setShowInput] = useState(false);
  const token = localStorage.getItem("token");
  const [playlistName, setPlaylistName] = useState("");

  const createHandler = () => {
    setShowInput(true);
    playlistName &&
      createNewPlaylist(dispatch, playlistName, token, setShowInput);
    setPlaylistName("");
  };
  return (
    <div
      className={`modal-wrapper flex-center ${
        modal ? "display-flex" : "display-none"
      }`}
    >
      <div className="modal">
        <div className="modal-header">
          <h5>Save to</h5>
          <MdClose className="dismiss" onClick={() => setModal(!modal)} />
        </div>
        {playlist.length > 0 &&
          playlist.map((list) => {
            const isInPlaylist = list.videos.some(
              (list) => list._id === modalData._id
            );
            return (
              <div className="modal-header" key={list._id}>
                <label className="select-input">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    checked={isInPlaylist}
                    onChange={(e) =>
                      e.target.checked
                        ? addVideoToPlaylist(
                            dispatch,
                            list._id,
                            modalData,
                            token
                          )
                        : removeVideoFromPlaylist(
                            dispatch,
                            list._id,
                            modalData._id,
                            token
                          )
                    }
                  />
                  <span>{list.title}</span>
                </label>
              </div>
            );
          })}

        <div
          className={`modal-input ${
            showInput ? "display-flex" : "display-none"
          }`}
        >
          <label htmlFor="">Name :</label>
          <input
            type="text"
            className="text-input "
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
          />
        </div>
        <div className="modal-footer" onClick={() => createHandler()}>
          <button className="btn btn-primary btn-playlist">
            Create New Playlist
          </button>
        </div>
      </div>
    </div>
  );
};
