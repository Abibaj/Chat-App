import React from 'react';

import classes from './Button.module.scss';

const Button = props => {
  return (
    <button
      onClick={props.onClick}
      className={classes['button']}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
