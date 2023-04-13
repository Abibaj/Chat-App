import React from 'react';

import classes from './Chat.module.scss';

const Chat = props => {
  const message = props.message;
  return (
    <div className={classes[props.className]}>
      <div className={classes['text-content']}>{message.message}</div>
      <div className={classes['time-stamp']}>{message.timeStamp}</div>
    </div>
  );
};

export default Chat;
