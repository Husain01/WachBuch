import React from 'react'
import Aside from '../../components/Aside/Aside';
import VideoCard from '../../components/VideoCard/VideoCard';
import './Home.css';

const Home = () => {
  return (
    <div className='content-container'>
        <Aside></Aside>
        <main className="main-content">
          <div className="responsive-grid">
          <VideoCard></VideoCard>
          <VideoCard></VideoCard>
          <VideoCard></VideoCard>
          <VideoCard></VideoCard>
          </div>
        </main>
    </div>
  )
}

export default Home