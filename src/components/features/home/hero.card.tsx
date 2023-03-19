import { CardItem } from './_utils'
import Image from 'next/image'
import React from 'react'
interface HeroCardProp {
 data: CardItem
}

const HeroCard: React.FC<HeroCardProp> = ({data}) => {
  return (
    <div key={data.id} className='h-[9.2rem] w-full rounded-md relative overflow-hidden'>
        <Image src={data.image} alt="banner" className='w-full h-full object-cover rounded-md' />
        <div className='absolute top-0 left-0 w-full h-full rounded-md'>
            <div className='p-3 md:p-5 '>
                <h2 className='text-orange-600 text-sm md:text-md '>{data.title}</h2>
                <div className='text-xl md:text-2xl font-semibold md:my-1'>{data.header}</div>
                <p className='w-40 text-sm md:text-md'>{data.description}</p>
            </div>
        </div>
    </div>
  )
}

export default HeroCard