import React from 'react';

import classes from './SidebarMessageCard.module.scss';

const SidebarMessageCard = props => {
  const friend = props.friend;

  return (
    <div className={classes['message-card']}>
      <span className={classes['message-card__profile-photo']}>
        <img src={friend.avatar} alt="user-1" />
      </span>
      <div className={classes['message-card__container']}>
        <p className={classes['message-card__sender-info']}>
          <span className={classes['message-card__display-name']}>
            {friend.displayName}
          </span>
          <span className={classes['message-card__username']}>
            {` @${friend.username}`}
          </span>
          <span className={classes['message-card__timestamp']}>
            {` · ${friend.lastMessage.timeStamp}`}
          </span>
        </p>
        <p className={classes['message-card__message-snippet']}>
          {friend.lastMessage.message}
        </p>
      </div>
    </div>
  );
};

export default SidebarMessageCard;
