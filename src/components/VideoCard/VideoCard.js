import React from 'react'
import './VideoCard.css'

const VideoCard = ({video}) => {
    const {_id, title, creator} = video;
  return (
    <>
        <div className="card normal-shadow">
            <img src={`https://i.ytimg.com/vi/${_id}/hq720.jpg`} alt="" className='card-img'/>
            <div className="card-footer">
                <div className="card-title">
                    <h3 className="card-title-header">{title}</h3>
                    <div className="card-menu">
                    <i className="fas fa-ellipsis-v"></i>
                    </div>
                </div>
                <div className="card-description">
                    <h4 className='author'>{creator}</h4>
                    <p className='vid-date'>26 Apr 2022</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default VideoCard