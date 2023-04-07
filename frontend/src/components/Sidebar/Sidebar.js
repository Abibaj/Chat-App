import React from 'react';

import SidebarHeader from './SidebarHeader';
import SidebarSearchbar from './SidebarSearchbar';
import SidebarMessage from './SidebarMessage';
import classes from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={classes['sidebar']}>
      <SidebarHeader />
      <SidebarSearchbar />
      <SidebarMessage />
    </div>
  );
};

export default Sidebar;
