import React from 'react';

import ChatPageHeader from './ChatPageHeader';
import ChatPageContent from './ChatPageContent';
import ChatPageInputTab from './ChatPageInputTab';
import classes from './ChatPage.module.scss';

const ChatPage = () => {
  return (
    <div className={classes['chat-page']}>
      <ChatPageHeader />
      <ChatPageContent />
      <ChatPageInputTab />
    </div>
  );
};

export default ChatPage;
