import React from "react";
import Aside from "../../components/Aside/Aside";
import VideoCard from "../../components/VideoCard/VideoCard";
import "./Home.css";

export const Home = () => {
  return (
    <div className="content-container">
      <Aside></Aside>
      <main className="main-content">
        <div className="category-list">
          <div className="category normal-shadow">All</div>
          <div className="category normal-shadow">Fiction</div>
          <div className="category normal-shadow">Non-Fiction</div>
          <div className="category normal-shadow">Self-Help</div>
        </div>
        <div className="responsive-grid">
          <VideoCard></VideoCard>
          <VideoCard></VideoCard>
          <VideoCard></VideoCard>
          <VideoCard></VideoCard>
        </div>
      </main>
    </div>
  );
};
