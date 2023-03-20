import { CollectionWatch } from '@assets'
import { CollectionItem } from './_utils'
import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart, AiOutlineStar, AiTwotoneHeart, AiTwotoneStar } from 'react-icons/ai'

type CollectionItemProp = {
  data: CollectionItem
}

const CollectionCard1: React.FC<CollectionItemProp> = ({data}) => {
  return (
    <div className='bg-white border-2 border-slate-200 w-[15rem] md:w-[16rem] h-[20rem] md:h-[24rem] overflow-hidden rounded-lg flex-none'>
      <div className='relative w-full h-[11rem] md:h-[15rem]'>
        <span>
          <Image src={data.image} alt={data.title} className='w-full h-full object-cover'/>
        </span>
        <div className='absolute top-2 right-2 cursor-pointer text-2xl'>
          <AiTwotoneHeart />
          <AiOutlineHeart />
        </div>
      </div>
      <div className='flex flex-col p-2'>
        <h5 className='text-orange-700 text-md font-semibold'>{data.title}</h5>
        <p className='text-sm line-clamp-2 my-2 text-slate-600'>{data.description}</p>
        <div className='flex items-center mb-1'>
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
        <div>
          <p>${data.price}</p>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard1
