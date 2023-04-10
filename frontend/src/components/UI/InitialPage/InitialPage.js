import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { IoMagnetOutline } from 'react-icons/io5';

import classes from './InitialPage.module.scss';

const InitialPage = () => {
  const init = document.getElementById('initial-page');
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className={classes['initial-page']}>
          <div className={classes['logo']}>
            <IoMagnetOutline />
            <span>Chat App</span>
          </div>
        </div>,
        init
      )}
    </Fragment>
  );
};

export default InitialPage;
