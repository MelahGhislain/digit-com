import Heading from '../../heading'
import React from 'react'
import { catogoryItems, collectionData } from './_utils';
import {CollectionCard1} from '../../cards';
import { CollectionWatch } from '@assets';
import Image from 'next/image';
import Link from 'next/link';

const PopularProduct = () => {
  return (
    <section className='pad-x mt-10'>
       <Heading>Popular Products</Heading>
        <div>
            <div className='mb-10'>
                <div className=' flex items-center overflow-x-scroll gap-6 py-5'>
                        <div className='bg-white w-[15rem] md:w-[16rem] rounded-lg flex-none'>
                            <div className='flex flex-col p-4 overflow-auto gap-y-4 h-[20rem] md:h-[24rem]'>
                                {
                                    catogoryItems.map(item => (
                                        <Link key={item.id} href='/'>
                                            <div className='flex items-center '>
                                                <span className='h-10 w-10'>
                                                    <Image src={item.image} alt={item.title} className='w-full h-full object-cover' />
                                                </span>
                                                <p className='text-sm'>{item.title}</p>
                                            </div>  
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>

                        <Card />
                        {
                            collectionData.map(item => (
                                <CollectionCard1 key={item.id} data={item} />
                            ))
                        }
                </div>
            </div>
        </div>
    </section>
  )
}

export default PopularProduct


function Card() {
    return (
        <div className='bg-slate-900 text-white w-[15rem] md:w-[16rem] h-[20rem] md:h-[24rem] overflow-hidden rounded-lg flex-none'>
            <div className='flex flex-col px-4 pt-8'>
                <p className='text-sm text-slate-200'>20% OFF</p>
                <h5 className='text-md font-semibold my-4'>Smart Watch</h5>
                <p className='text-sm text-slate-200 line-clamp-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className='relative w-full h-[11rem] md:h-[15rem]'>
                <span>
                    <Image src={CollectionWatch} alt={'data.title'} className='w-full h-full object-cover'/>
                </span>
            </div>
        </div>
    )
}