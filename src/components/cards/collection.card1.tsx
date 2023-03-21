import { CollectionWatch } from '@assets'
import { CollectionItem } from './_utils'
import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart, AiOutlineStar, AiTwotoneHeart, AiTwotoneStar } from 'react-icons/ai'
import Badge from '../badge'

type CollectionItemProp = {
  data: CollectionItem
  className?: string
  priceTop?: boolean
}

const CollectionCard1: React.FC<CollectionItemProp> = ({data, className, priceTop}) => {
  return (
    <div className={`bg-white w-[15rem] md:w-[16rem] h-[20rem] md:h-[24rem] overflow-hidden rounded-lg flex-none ${className}`}>
      <div className='relative w-full h-[57%] md:h-[63%]'> 
        <span className='p-4'>
          <Image src={data.image} alt={data.title} className='w-full h-full object-cover'/>
        </span>
        <div className='absolute top-2 right-2 cursor-pointer text-2xl'>
          {/* <AiTwotoneHeart /> */}
          <AiOutlineHeart />
        </div>
        <div className='absolute top-2 left-2 cursor-pointer text-2xl'>
          <Badge title='Cheap' />
        </div>
        
      </div>
      <div className='flex flex-col p-2 relative'>
        <div className='flex items-center justify-between'>
          <h5 className='text-orange-700 text-md font-semibold'>{data.title}</h5>
          {priceTop && <p className='text-gray-600 text-sm'>${data.price}</p>}
        </div>
        <p className='text-sm line-clamp-2 my-2 text-slate-600'>{data.description}</p>
        <div className='flex items-center mb-1 text-gray-400'>
          {
            new Array(data.rating).fill(null).map((_, index) => (
              <AiTwotoneStar key={index} className='text-yellow-500'/>
            ))
          }
          {
            new Array(5 - data.rating).fill(null).map((_, index) => (
              <AiOutlineStar key={index} />
            ))
          }
        </div>
        <div className={`text-gray-600 text-medium`}>
          <p>${data.price}</p>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard1
