import { Blog1 } from '@assets'
import Button from '../button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = () => {
  return (
    <div className='bg-white w-[16rem] md:w-[18rem] h-[20rem] md:h-[24rem] overflow-hidden rounded-lg flex-none'>
      <div className='relative w-full h-[10rem] md:h-[14rem]'>
        <span>
          <Image src={Blog1} alt='blog' className='w-full h-full object-cover'/>
        </span>
      </div>
        <div className='flex flex-col px-4 py-2'>
            <p className='text-sm text-neutral-500'>02 Jan 2023</p>
            <h5 className='text-md font-semibold line-clamp-1 my-1 md:my-2'>Lorem ipsum dolor sit amet.</h5>
            <p className='line-clamp-2 leading-4 text-sm text-neutral-600 mb-1 md:mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, earum non animi hic culpa temporibus deserunt in itaque possimus blanditiis?</p>
            <Link href='/blog'>
                <Button>READ MORE</Button>
            </Link>
        </div>
        </div>
  )
}

export default BlogCard