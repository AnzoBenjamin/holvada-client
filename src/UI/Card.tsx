import React, { ReactNode } from 'react'
import classes from './Card.module.scss'

interface CardProps{
    children: ReactNode;
    className: string;
}

const Card: React.FC<CardProps> = ({children, className}) => {
  return (
    <div className={`${classes["pricing-plan"]} ${className}`}>
        {children}
    </div>
  )
}

export default Card