import React, { forwardRef } from 'react';
import classes from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // You can include other props specific to your Input component if needed
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { type, placeholder, ...rest },
  ref
) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      ref={ref}
      className={classes.input}
      {...rest}
    />
  );
};

export default forwardRef(Input);
