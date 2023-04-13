import React from 'react';

import classes from './Chat.module.scss';

const Chat = props => {
  return (
    <div className={classes['chat-received']}>
      <div className={classes['text-content']}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <div className={classes['time-stamp']}>Mar 15, 2023, 6:58 PM</div>
    </div>
  );
};

export default Chat;
