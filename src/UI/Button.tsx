import React from 'react'
import classes from './Button.module.scss'
interface buttonType{
    text: string;
    className: string;
    type: "button" | "submit" | "reset";
    disabled: boolean;
}

const Button: React.FC<buttonType> = ({text, className, type, disabled}) => {
  return (
    <button className={`${classes.btn} ${className}`} type={type} disabled={disabled}>
        {text}
    </button>
  )
}

export default Button