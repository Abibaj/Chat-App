import React, { Fragment } from 'react';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './SignupInput.module.scss';

const SignupInput = props => {
  return (
    <Fragment>
      <Input
        className={classes.input}
        label="Name"
        placeholder="Enter your name"
        input={{
          id: 'name',
          type: 'text',
          min: '3',
          max: '25'
        }}
      />
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
      <Input
        className={classes.input}
        label="PasswordConfirm"
        placeholder="Confirm your password"
        input={{
          id: 'PasswordConfirm',
          type: 'text',
          min: '8',
          max: '16'
        }}
      />
      <Button onClick={props.onClick}>
        <span className={classes['signup-btn']}>Sign up</span>
      </Button>
    </Fragment>
  );
};

export default SignupInput;
