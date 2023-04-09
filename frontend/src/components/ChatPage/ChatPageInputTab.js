import React from 'react';
import {
  IoImageOutline,
  IoPaperPlaneOutline,
  IoHappyOutline
} from 'react-icons/io5';
import { AiOutlineGif } from 'react-icons/ai';

import classes from './ChatPageInputTab.module.scss';

const ChatPageInputTab = () => {
  return (
    <div className={classes['input-tab']}>
      <span className={classes['input-tab__image-emoji']}>
        <IoImageOutline />{' '}
      </span>
      <span className={classes['input-tab__gif-emoji']}>
        <AiOutlineGif />
      </span>
      <span className={classes['input-tab__emoji-emoji']}>
        <IoHappyOutline />
      </span>

      <textarea
        type="text"
        className={classes['input-tab__input-field']}
        placeholder="Type a message"
        id="message"
      />
      <label for="message" className={classes['input-tab__input-label']}>
        <IoPaperPlaneOutline />{' '}
      </label>
    </div>
  );
};

export default ChatPageInputTab;
