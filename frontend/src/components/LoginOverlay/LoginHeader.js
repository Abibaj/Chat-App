import React, { Fragment } from 'react';
import { IoClose, IoMagnetOutline } from 'react-icons/io5';

import classes from './LoginHeader.module.scss';

const LoginHeader = props => {
  return (
    <Fragment>
      <div className={classes['login__close-bar']}>
        <span
          onClick={props.onClick}
          className={classes['login__close-button']}
        >
          <IoClose />
        </span>
        <span className={classes['login__app-logo']}>
          <IoMagnetOutline />
        </span>
      </div>
      <p className={classes['sign-in-message']}>Sign in to Chat App</p>
    </Fragment>
  );
};

export default LoginHeader;
