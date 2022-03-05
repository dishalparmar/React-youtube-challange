import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import { useStateValue } from '../State/StateProvider';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';

function Sidebar() {

  const [{sidebar, dispatch}] = useStateValue();

  return (
    <div className={`sidebar ${sidebar && 'toggle'}`}>
      <SidebarRow selected Icon={CottageOutlinedIcon} title='Home' />
      <SidebarRow Icon={TrendingUpOutlinedIcon} title='Trending' />
      <SidebarRow Icon={SubscriptionsOutlinedIcon} title='Subscription' />
      <hr />
    </div>
  )
}

export default Sidebar
