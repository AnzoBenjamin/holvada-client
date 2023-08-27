import React, { ReactNode } from 'react'
import classes from './Form.module.scss'

interface FormProps{
    children: ReactNode
}

export const Form: React.FC<FormProps> = ({children}) => {
  return (
    <div className={classes.form}>
        {children}
    </div>
  )
}
