import React from 'react';
import './SearchPage.css';
import VerifiedIcon from '@mui/icons-material/VerifiedOutlined';
import { Avatar } from '@mui/material';

function ChannelRow( {image, channel, verified, subscribes, nrOfVideos, description} ) {
  return (
    <div className='channel-row'>
      <img src={image} alt={channel} />
      <div className='channel-row-info'>
        <h3>{channel} 
            {verified && (<VerifiedIcon className='channel-row-verified'/>)}
        </h3>
        <p>{subscribes} subscribers | {nrOfVideos} videos</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ChannelRow