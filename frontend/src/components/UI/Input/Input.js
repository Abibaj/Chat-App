import React, { forwardRef } from 'react';

import classes from './Input.module.scss';

const Input = forwardRef((props, ref) => {
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <input
        // className={classes.input}
        placeholder={props.placeholder}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
