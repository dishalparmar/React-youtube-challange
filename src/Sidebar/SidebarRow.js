import React from 'react';
import './Sidebar.css';

function SidebarRow({ selected, Icon, title }) {
  
  return (
    <div className={`sidebar-row ${selected && 'selected'}`}>
      <Icon className='sidebar-row-icon' />
      <p className='sidebar-row-title'>{title}</p>
    </div>
  )
}

export default SidebarRow