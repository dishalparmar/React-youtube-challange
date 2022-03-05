import React, { useState } from 'react';
import './Header.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Avatar } from '@mui/material';
import { Link } from "react-router-dom";
import { useStateValue } from '../State/StateProvider';

function Header() {

  const [inputSearch, setInputSearch] = useState('');
  const [sidebar, setSidebar] = useState(true);
  const [state, dispatch] = useStateValue();

  const handleToggle = () => {
    setSidebar(!sidebar);
    dispatch({
      type: 'sidebar',
      toggle: sidebar
    });
  }
  return (
    <div className='header'>
      <div className='header-left'>
        <span onClick={handleToggle}><MenuOutlinedIcon /></span>
        <Link to='/'>
          <img src='https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg' alt='' />
        </Link>
      </div>

      <div className='header-center'>
        <input onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} type='text' placeholder='search' />
          <Link to={inputSearch ? `/search/${inputSearch}` : '/'}>
            <SearchOutlinedIcon className='header-search-btn' />
          </Link>

      </div>

      <div className='header-right'>
        <VideoCallOutlinedIcon className='header-icon' />
        <AppsOutlinedIcon className='header-icon' />
        <NotificationsNoneOutlinedIcon className='header-icon' />
        <Avatar src='https://yt3.ggpht.com/yti/APfAmoE5lmrkXQJOP1vkgD0P5kCbWfLuv5SwGnb6cNHf=s108-c-k-c0x00ffffff-no-rj' />
      </div>

    </div>
  )
}

export default Header