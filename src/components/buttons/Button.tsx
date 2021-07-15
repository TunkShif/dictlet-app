import React from 'react'
import './button.css'

type ButtonProps ={
  icon: string,
  onClick?: () => void
}

const Button = (props: ButtonProps) => {
  return (
    <button className="button" onClick={props.onClick}>
      {props.icon}
    </button>
  )
}

export default Button
