import React from 'react';

import Chat from './Chat';
import classes from './ChatPageContent.module.scss';

const ChatPageContent = () => {
  const DUMMY_CHATS = [
    {
      message: 'Hey there',
      messageType: 'Text',
      timeStamp: '6:50 am',
      messageStatus: 'pending',
      received: true,
      id: 'ch1'
    },
    {
      message: 'What is up',
      messageType: 'Text',
      timeStamp: '6:50 am',
      messageStatus: 'pending',
      received: false,
      id: 'ch2'
    },
    {
      message: `I'm good, how are you`,
      messageType: 'Text',
      timeStamp: '6:51 am',
      messageStatus: 'pending',
      received: true,
      id: 'ch3'
    },
    {
      message: `I'm fine too`,
      messageType: 'Text',
      timeStamp: '6:51 am',
      messageStatus: 'pending',
      received: false,
      id: 'ch4'
    },
    {
      message: 'Are you free tonight?',
      messageType: 'Text',
      timeStamp: '6:51 am',
      messageStatus: 'pending',
      received: true,
      id: 'ch5'
    }
  ];

  return (
    <div className={classes['content']}>
      {DUMMY_CHATS.map(message => (
        <Chat
          message={message}
          key={message.id}
          className={message.received ? 'chat-received' : 'chat-sent'}
        />
      ))}
      {/* <Chat className={'chat-sent'} /> */}
    </div>
  );
};

export default ChatPageContent;
