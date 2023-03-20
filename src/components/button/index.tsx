import React from 'react'

interface ButtonProp {
    children: string
    className?: string
}

const Button: React.FC<ButtonProp> = ({children, className}) => {
  return (
    <button className={`text-xs text-white bg-slate-900 px-3 py-2 rounded-full mt-2 ${className}`}>{children}</button>
  )
}

export default Button