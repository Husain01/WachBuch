import React from "react";
import Aside from "../../components/Aside/Aside";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useData } from "../../context/Video/VideoContext";
import "./Home.css";

export const Home = () => {
  const {category, videos, dispatch, sortBy, search} = useData();

  const sortHandler = (catName) => {
    console.log(catName)
    dispatch({
      type: "SORTBY",
      payload: catName
    })
  }

  const sortVideos = (videos, sortBy) => {
    if(sortBy && sortBy !== "All") {
      return [...videos].filter((video) => video.category === sortBy)
    }
    return [...videos];
  }
  const searchVideos = (videos, search) => {
    return search ? [...videos].filter((video)=> {
      video.title.toLowerCase().includes(search.toLowerCase())
    }) : [...videos]
  }
  const searchByName = searchVideos([...videos], search)
  const sortByCategory = sortVideos(searchByName, sortBy);
  return (
    <div className="content-container">
      <Aside></Aside>
      <main className="main-content">
        <div className="category-list">
        {category.map(({_id, categoryName, isActive}) => (
          <div className={`category ${isActive ? "normal-inset-shadow": "normal-shadow"}`} key={_id} onClick={()=> sortHandler(categoryName)}>{categoryName}</div>
        ))}
        </div>
        <div className="responsive-grid">
        {sortByCategory.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
        </div>
      </main>
    </div>
  );
};
