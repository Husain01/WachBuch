import React from 'react'
import './VideoCard.css'

const VideoCard = () => {
  return (
    <>
        <div className="card normal-shadow">
            <img src="https://i.ytimg.com/vi/UlIDxrK43ko/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATO9Pev65qpMRfCS84zOzZrKmGXw" alt="" className='card-img'/>
            <div className="card-footer">
                <div className="card-title">
                    <h3 className="card-title-header">What's on My Bookshelf (2022)</h3>
                    <div className="card-menu">
                    <i className="fas fa-ellipsis-v"></i>
                    </div>
                </div>
                <div className="card-description">
                    <h4 className='author'>Ali Abdaal</h4>
                    <p className='vid-date'>26 Apr 2022</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default VideoCard