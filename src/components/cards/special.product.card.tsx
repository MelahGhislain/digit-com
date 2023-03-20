import { CollectionWatch } from '@assets';
import Badge from '../badge';
import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart, AiOutlineStar, AiTwotoneHeart, AiTwotoneStar } from 'react-icons/ai';
import Carousel from 'react-multi-carousel'

const SpecialProductCard = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1440 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 1440, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='bg-white w-full md:w-[24rem] h-[15rem] overflow-hidden rounded-md flex-none'>
      <div className='flex'>
        <div className='w-full h-[10rem] flex-1'>
          <div className='relative w-full h-full'>
            <span>
              <Image src={CollectionWatch} alt={'data.title'} className='w-full h-full object-cover'/>
            </span>
            <div className='absolute top-2 right-2 cursor-pointer text-2xl'>
              {/* <AiTwotoneHeart /> */}
              <AiOutlineHeart />
            </div>
            <div className='absolute top-2 left-2 cursor-pointer text-2xl'>
              <Badge title='Cheap' />
            </div>
          </div>

          <div className=' h-[5rem] flex-1'>
            carousel
          </div>

        </div>

        <div className='flex p-2 flex-1'>
          <div className='p-3'>
            <h3 className='text-xs text-yellow-600'>title</h3>
            <h2 className='line-clamp-2 my-2 text-sm font-semibold leading-4'>Lorem ipsum dolor sit amet.</h2>
            <div className='flex items-center mb-1 text-gray-400'>
              {
                new Array(3).fill(null).map((_, index) => (
                  <AiTwotoneStar key={index} className='text-yellow-500'/>
                ))
              }
              {
                new Array(5 - 3).fill(null).map((_, index) => (
                  <AiOutlineStar key={index} />
                ))
              }
            </div>
            <div className='flex text-gray-600 items-center text-sm gap-3 my-1'>
              <p className='text-red-500'>$89.99</p>
              <p>$99.99</p>
            </div>

            <span>some thing</span>
            <div className='w-full  h-2 mb-2 mt-1 bg-gray-300 rounded-full overflow-hidden'>
              <div className='bg-green-500 w-[80%] h-full'></div>
            </div>

            <button className='text-xs text-white bg-slate-900 px-3 py-2 rounded-full mt-2'>Add to cart</button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default SpecialProductCard