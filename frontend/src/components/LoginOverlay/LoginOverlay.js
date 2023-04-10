import React from 'react';
import { IoClose, IoMagnetOutline } from 'react-icons/io5';

import Modal from '../UI/Modal/Modal';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './LoginOverlay.module.scss';

const LoginOverlay = props => {
  return (
    <Modal onClose={props.onHideModal}>
      <div className={classes['login']}>
        <div className={classes['login__close-bar']}>
          <span className={classes['login__close-button']}>
            <IoClose />
          </span>
          <span className={classes['login__app-logo']}>
            <IoMagnetOutline />
          </span>
        </div>
        <p className={classes['sign-in-message']}>Sign in to Chat App</p>
        {/* <Input
          className={classes.input}
          label="Name"
          placeholder="Enter your name"
          input={{
            id: 'name',
            type: 'text',
            min: '3',
            max: '25'
          }}
        /> */}
        <Input
          className={classes.input}
          label="email"
          placeholder="Enter your Email"
          input={{
            id: 'email',
            type: 'email',
            min: '3',
            max: '30'
          }}
        />
        <Input
          className={classes.input}
          label="Password"
          placeholder="Enter your password"
          input={{
            id: 'Password',
            type: 'text',
            min: '8',
            max: '16'
          }}
        />
        {/* <Input
          className={classes.input}
          label="PasswordConfirm"
          placeholder="Confirm your password"
          input={{
            id: 'PasswordConfirm',
            type: 'text',
            min: '8',
            max: '16'
          }}
        /> */}
        <Button>
          <span className={classes['signup-btn']}>Sign in</span>
        </Button>
        <div className={classes['sign-in-cta']}>
          <span>
            Or don't have an account? <a href="signup">Sign up</a>
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default LoginOverlay;
