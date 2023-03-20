import { CollectionWatch } from '@assets'
import { CollectionItem } from './_utils'
import Image from 'next/image'
import React from 'react'

type CollectionItemProp = {
  data: CollectionItem
}

const CollectionCard2: React.FC<CollectionItemProp> = ({data}) => {
  return (
    <div className='bg-white border-2 border-slate-200 w-[18rem] md:w-[20rem] h-[20rem] md:h-[24rem] overflow-hidden rounded-lg flex-none'>
      <div className='flex flex-col p-3 py-6'>
        <h5 className='text-slate-600 text-md font-semibold'>{data.title}</h5>
        <p className='text-2xl font-bold'>{data.title}</p>
        <div className='line-clamp-1'>
          <p>{data.description}</p>
        </div>
      </div>
      <div className='relative w-full h-[11rem] md:h-[15rem]'>
        <span>
          <Image src={data.image} alt={data.title} className='w-full h-full object-cover'/>
        </span>
      </div>
    </div>
  )
}

export default CollectionCard2
