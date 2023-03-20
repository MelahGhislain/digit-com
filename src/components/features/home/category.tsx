import Image from 'next/image';
import React from 'react'
import { catogoryItems } from './_utils';
import Link from 'next/link';

const Category = () => {

  return (
    <section className='pad-x'>
        <h2 className='md:hidden mb-8 mt-6 font-semibold text-3xl'> Category</h2>
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

export default Category