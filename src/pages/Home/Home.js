import React from "react";
import Aside from "../../components/Aside/Aside";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useData } from "../../context/Video/VideoContext";
import "./Home.css";
import DropDownMenu from "../../components/DropDown/DropDownMenu/DropDownMenu";
import DropDownItems from "../../components/DropDown/DropDownItem/DropDownItem";
import {
  MdOutlineWatchLater,
  MdPlaylistAdd,
  MdWatchLater,
} from "react-icons/md";
import { watchLaterHandler } from "../../utils/watchLaterUtils";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { category, videos, dispatch, sortBy, search } = useData();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const sortHandler = (catName) => {
    console.log(catName);
    dispatch({
      type: "SORTBY",
      payload: catName,
    });
  };

  const sortVideos = (videos, sortBy) => {
    if (sortBy && sortBy !== "All") {
      return [...videos].filter((video) => video.category === sortBy);
    }
    return [...videos];
  };
  const searchVideos = (videos, search) => {
    return search
      ? [...videos].filter((video) =>
          video.title.toLowerCase().includes(search.toLowerCase())
        )
      : [...videos];
  };
  const searchByName = searchVideos([...videos], search);
  const sortByCategory = sortVideos(searchByName, sortBy);
  const addToWatchLater = (dispatch, video, token) => {
    token ? watchLaterHandler(dispatch, video, token) : navigate("/login");
  };
  return (
    <div className="content-container">
      <Aside></Aside>
      <main className="main-content">
        <div className="category-list">
          {category.map(({ _id, categoryName, isActive }) => (
            <div
              className={`category ${
                isActive ? "normal-inset-shadow" : "normal-shadow"
              }`}
              key={_id}
              onClick={() => sortHandler(categoryName)}
            >
              {categoryName}
            </div>
          ))}
        </div>
        <div className="responsive-grid">
          {sortByCategory.map((video) => {
            const { _id, inWatchLater } = video;
            return (
              <VideoCard key={_id} video={video}>
                <DropDownMenu>
                  <DropDownItems
                    icon={<MdOutlineWatchLater />}
                    danger={inWatchLater ? "danger" : ""}
                    onClick={() => addToWatchLater(dispatch, video, token)}
                  >
                    {inWatchLater
                      ? "Remove from Watch Later"
                      : "Add to Watch Later"}
                  </DropDownItems>
                  <DropDownItems icon={<MdPlaylistAdd />}>
                    Add to Playlist
                  </DropDownItems>
                </DropDownMenu>
              </VideoCard>
            );
          })}
        </div>
      </main>
    </div>
  );
};
