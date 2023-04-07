import React from 'react';
import { IoSettingsOutline, IoMailOutline } from 'react-icons/io5';

import classes from './SidebarHeader.module.scss';

const SidebarHeader = () => {
  return (
    <div className={classes['sidebar-header']}>
      <span className={classes['sidebar-header__title']}>Messages</span>
      <div className={classes['sidebar-header__icon-container']}>
        <span className={classes['sidebar-header__icon']}>
          <IoSettingsOutline />
        </span>
        <span className={classes['sidebar-header__icon']}>
          <IoMailOutline />{' '}
        </span>
      </div>
    </div>
  );
};

export default SidebarHeader;
