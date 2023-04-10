import React from 'react';

import Modal from '../UI/Modal/Modal';
import LoginHeader from './LoginHeader';
import SignupInput from './SignupInput';
import LoginInput from './LoginInput';
import classes from './LoginOverlay.module.scss';

const LoginOverlay = props => {
  return (
    <Modal onClose={props.onHideModal}>
      <div className={classes['login']}>
        <LoginHeader onClick={props.onHideModal} />
        <LoginInput onClick={props.onHideModal} />
        {/* <SignupInput onClick={props.onHideModal} /> */}
      </div>
    </Modal>
  );
};

export default LoginOverlay;
