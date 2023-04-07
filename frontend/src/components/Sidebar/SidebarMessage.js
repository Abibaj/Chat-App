import React from 'react';

import classes from './SidebarMessage.module.scss';

const SidebarMessage = () => {
  return (
    <div className={classes['message-card']}>
      <span className={classes['message-card__profile-photo']}>
        <img src="../../resources/user-1.jpg" alt="user-1" />
      </span>
      <div className={classes['message-card__container']}>
        <p className={classes['message-card__sender-info']}>
          <span className={classes['message-card__display-name']}>
            Habeebah{' '}
          </span>
          <span className={classes['message-card__username']}>@habeebah </span>
          <span className={classes['message-card__timestamp']}>· 5:12pm</span>
        </p>
        <p className={classes['message-card__message-snippet']}>
          A sneak peak of the message goes here and more messages. Whatever is
          sent will be shown here
        </p>
      </div>
    </div>
  );
};

export default SidebarMessage;
