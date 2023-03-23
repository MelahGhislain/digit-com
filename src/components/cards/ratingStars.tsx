import React from 'react'
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai'
interface RatingStarProp {
    rating: number
    className?: string
}

const RatingStars:React.FC<RatingStarProp> = ({rating, className}) => {
  return (
    <div className={`flex items-center mb-1 text-gray-400 ${className}`}>
      {
        new Array(rating).fill(null).map((_, index) => (
          <AiTwotoneStar key={index} className='text-yellow-500'/>
        ))
      }
      {
        new Array(5 - rating).fill(null).map((_, index) => (
          <AiOutlineStar key={index} />
        ))
      }
    </div>
  )
}

export default RatingStars
