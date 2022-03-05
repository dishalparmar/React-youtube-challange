import React from 'react';
import './SearchPage.css';

function VideoRow( { views, title, timestamp, image, channel, subscribes, description} ) {
  return (
    <div className='video-row'>
      <img className='video-row-thumbnail' src={image} alt={channel} />

      <div className='video-row-text'>
        <h3>{title}</h3>
        <p>{channel} | {subscribes} subscribes | {views} views | {timestamp}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default VideoRow