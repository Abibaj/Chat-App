import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.scss';

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const overlaysPortal = document.getElementById('overlays');

const Modal = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        overlaysPortal
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlaysPortal
      )}
    </Fragment>
  );
};

export default Modal;
