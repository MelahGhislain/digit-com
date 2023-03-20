import React from 'react'
interface HeadingProp {
    children: string
    className?: string
}

const Heading: React.FC<HeadingProp> = ({children, className}) => {
  return (
    <h2 className={`mb-6 mt-4 md:mb-8 md:mt-6 font-semibold text-xl md:text-3xl ${className}`}>{children}</h2>
  )
}

export default Heading