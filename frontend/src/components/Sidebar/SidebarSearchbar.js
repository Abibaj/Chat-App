import React, { Fragment } from 'react';
import { IoSearch } from 'react-icons/io5';

import classes from './SidebarSearchbar.module.scss';

const SidebarSearchbar = () => {
  const searchPlaceholder = `Search Direct Messages`;

  return (
    <div className={classes['search']}>
      <input
        className={classes['search-input']}
        type="text"
        placeholder={searchPlaceholder}
      />
      <label className={classes['search-label']}>
        <IoSearch />
      </label>
    </div>
  );
};

export default SidebarSearchbar;
