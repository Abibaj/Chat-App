import React, { forwardRef } from 'react';

import classes from './Input.module.scss';

const Input = forwardRef((props, ref) => {
  return (
    <div>
      <input
        className={classes.input}
        placeholder={props.placeholder}
        ref={ref}
        {...props.input}
      />
    </div>
  );
});

export default Input;
