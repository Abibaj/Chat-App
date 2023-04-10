import React, { Fragment } from 'react';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './LoginInput.module.scss';

const LoginInput = props => {
  return (
    <Fragment>
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
      <Button onClick={props.onHideModal}>
        <span className={classes['signin-btn']}>Sign in</span>
      </Button>
      <div className={classes['sign-in-cta']}>
        <span>
          Or don't have an account? <a href="signup">Sign up</a>
        </span>
      </div>
    </Fragment>
  );
};

export default LoginInput;
