import React from 'react';

import SidebarMessageCard from './SidebarMessageCard';
import classes from './SidebarMessage.module.scss';

const SidebarMessage = () => {
  const DUMMY_FRIENDS = [
    {
      id: '642dd63173aebe4094c3e007',
      avatar: '../../../resources/user-7.jpg',
      online: false,
      displayName: 'Rahman',
      username: 'newman',
      lastMessage: {
        message: 'This is the last message sent from this user',
        timeStamp: '5:12 pm'
      }
    },
    {
      id: '642dd63173aebe4094c3e001',
      avatar: '../../../resources/user-1.jpg',
      online: false,
      displayName: 'Sweet',
      username: 'sweet1',
      lastMessage: {
        message:
          'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
        timeStamp: '5:12 pm'
      }
    },
    {
      id: '642dd63173aebe4094c3e002',
      avatar: '../../../resources/user-2.jpg',
      online: false,
      displayName: 'vince',
      username: 'osiris',
      lastMessage: {
        message:
          'adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        timeStamp: '5:12 pm'
      }
    },
    {
      id: '642dd63173aebe4094c3e003',
      avatar: '../../../resources/user-3.jpg',
      online: false,
      displayName: 'mary',
      username: 'realMary',
      lastMessage: {
        message:
          'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born',
        timeStamp: '5:12 pm'
      }
    },
    {
      id: '642dd63173aebe4094c3e004',
      avatar: '../../../resources/user-4.jpg',
      online: false,
      displayName: 'Tripjay',
      username: 'jubril',
      lastMessage: {
        message:
          'which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?',
        timeStamp: '5:12 pm'
      }
    },
    {
      id: '642dd63173aebe4094c3e005',
      avatar: '../../../resources/user-5.jpg',
      online: false,
      displayName: 'Zainab',
      username: 'zeebaby',
      lastMessage: {
        message:
          'similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinct',
        timeStamp: '5:12 pm'
      }
    },
    {
      id: '642dd63173aebe4094c3e006',
      avatar: '../../../resources/user-6.jpg',
      online: false,
      displayName: 'Shefytan',
      username: 'sheriff',
      lastMessage: {
        message:
          'which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled',
        timeStamp: '5:12 pm'
      }
    },
    {
      id: '642dd63173aebe4094c3e006',
      avatar: '../../../resources/user-6.jpg',
      online: false,
      displayName: 'Shefytan',
      username: 'sheriff',
      lastMessage: {
        message:
          'which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled',
        timeStamp: '5:12 pm'
      }
    },
    {
      id: '642dd63173aebe4094c3e006',
      avatar: '../../../resources/user-6.jpg',
      online: false,
      displayName: 'Shefytan',
      username: 'sheriff',
      lastMessage: {
        message:
          'which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled',
        timeStamp: '5:12 pm'
      }
    },
    {
      id: '642dd63173aebe4094c3e006',
      avatar: '../../../resources/user-6.jpg',
      online: false,
      displayName: 'Shefytan',
      username: 'sheriff',
      lastMessage: {
        message:
          'which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled',
        timeStamp: '5:12 pm'
      }
    }
  ];

  return (
    <div className={classes['chat-list']}>
      {DUMMY_FRIENDS.map(friend => (
        <SidebarMessageCard friend={friend} key={friend.id} />
      ))}
    </div>
  );
};

export default SidebarMessage;
