import React from 'react'
interface BadgeProp {
    title: string
    className?: string
}

const Badge: React.FC<BadgeProp> = ({title, className}) => {
  return (
    <div className={`px-2 py-1 text-xs rounded-full bg-yellow-500 ${className}`}>
        <p>{title}</p>
    </div>
  )
}

export default Badge