import React from 'react';
import { IoInformationCircleOutline } from 'react-icons/io5';

import classes from './ChatPageHeader.module.scss';

const ChatPageHeader = () => {
  return (
    <div className={classes['chat-header']}>
      <div className={classes['chat-header__display-info']}>
        <span className={classes['chat-header__profile-photo']}>
          <img src="../../resources/user-1.jpg" alt="user-1" />
        </span>
        <span className={classes['chat-header__name']}>Sweet</span>
      </div>
      <span className={classes['chat-header__friend-info']}>
        <IoInformationCircleOutline />
      </span>
    </div>
  );
};

export default ChatPageHeader;
