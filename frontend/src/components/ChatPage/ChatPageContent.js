import React from 'react';

import Chat from './Chat';
import classes from './ChatPageContent.module.scss';

const ChatPageContent = () => {
  return (
    <div className={classes['content']}>
      <Chat />
    </div>
  );
};

export default ChatPageContent;
