import React, { ButtonHTMLAttributes } from 'react'

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <button className="btn-primary" {...props} />
)

export default Button
