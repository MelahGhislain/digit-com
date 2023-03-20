import { CollectionWatch } from '@assets'
import { CollectionItem } from './_utils'
import Image from 'next/image'
import React from 'react'

type CollectionItemProp = {
  data: CollectionItem
  isDark?: boolean
}

const CollectionCard2: React.FC<CollectionItemProp> = ({data, isDark}) => {
  return (
    <div className={`${isDark? 'bg-black text-white': 'bg-white'} w-[14rem] md:w-[16rem] h-[18rem] md:h-[20rem] overflow-hidden rounded-lg flex-none`}>
      <div className='flex flex-col p-3 py-6'>
        <h5 className={`${isDark? 'text-neutral-300' : 'text-neutral-500'}  text-md font-semibold`}>{data.title}</h5>
        <p className='text-2xl font-bold'>{data.title}</p>
        <div className='line-clamp-1'>
          <p>{data.description}</p>
        </div>
      </div>
      <div className='relative w-full h-[8rem] md:h-[10rem]'>
        <span>
          <Image src={data.image} alt={data.title} className='w-full h-full object-cover'/>
        </span>
      </div>
    </div>
  )
}

export default CollectionCard2
