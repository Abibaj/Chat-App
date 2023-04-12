import React, {
  useState,
  useReducer,
  useEffect,
  useContext,
  Fragment
} from 'react';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import classes from './LoginInput.module.scss';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const LoginInput = props => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = event => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = event => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });

    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = event => {
    event.preventDefault();
    ctx.onLogin(emailState.value, passwordState.value);
  };

  const ctx = useContext(AuthContext);

  return (
    <Fragment>
      <form onSubmit={submitHandler} className={classes['login-form']}>
        <Input
          id={'email'}
          label={'E-mail'}
          type={'email'}
          placeholder="Enter your Email"
          value={emailState.value}
          isValid={emailIsValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          id={'password'}
          label={'Password'}
          type={'password'}
          placeholder="Enter your Password"
          value={passwordState.value}
          isValid={passwordIsValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <Button type="submit" onClick={props.onClick} disabled={!formIsValid}>
          <span className={classes['signin-btn']}>Sign in</span>
        </Button>
      </form>
      <div className={classes['sign-in-cta']}>
        <span>
          Or don't have an account? <a href="signup">Sign up</a>
        </span>
      </div>
    </Fragment>
  );
};

export default LoginInput;
