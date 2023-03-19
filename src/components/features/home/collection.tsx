import Image from 'next/image';
import React from 'react'
import { 
    CategotyTV,
    CategorySpeaker,
    CategoryLaptop,
    CategoryCamera,
    CategoryACC,
    CategoryHeadphone,
    CategoryHomeApp,
 } from '@assets';
import { CategoryItem } from './_utils';
import Link from 'next/link';

 const catogoryItems:CategoryItem[] = [
    {
        id: 1,
        image: CategotyTV,
        title: 'Smart Television',
        price: '99.99'
    },
    {
        id: 1,
        image: CategorySpeaker,
        title: 'Portable Speaker',
        price: '99.99'
    },
    {
        id: 1,
        image: CategoryLaptop,
        title: 'Computer & Laptop',
        price: '99.99'
    },
    {
        id: 1,
        image: CategoryCamera,
        title: 'Camera & Video',
        price: '99.99'
    },
    {
        id: 1,
        image: CategoryACC,
        title: 'Accessories',
        price: '99.99'
    },
    {
        id: 1,
        image: CategoryHeadphone,
        title: 'Headphones',
        price: '99.99'
    },
    {
        id: 1,
        image: CategoryHomeApp,
        title: 'Home Appliance',
        price: '99.99'
    },
 ]


const Collection = () => {

  return (
    <section className='pad-x'>
        <h2 className='md:hidden mb-8 mt-6 font-semibold text-3xl'> Feteaure Collection</h2>
        <div className='rounded-lg border-2 bg-white p-6'>
            <div className='flex overflow-x-auto lg:grid lg:grid-cols-5 justify-start gap-4'>
                {
                    catogoryItems.map(item => (
                        <Link href='/' key={item.id} >
                            <div  className='flex items-center gap-1 w-[10rem] lg:w-full flex-col-reverse lg:flex-row'>
                                <div className='flex flex-col flex-1 items-center lg:items-start'>
                                    <h2 className='font-bold text-sm'>{item.title}</h2>
                                    <p className='text-sm text-slate-700'>$ {item.price}</p>
                                </div>
                                <div className='h-[4rem] w-[4rem]'>
                                    <Image src={item.image} alt={item.title} className='w-full h-full object-cover'/>
                                </div>
                            </div>
                        </Link>

                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Collection