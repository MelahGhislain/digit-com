import Image from 'next/image'
import React from 'react'
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
    <div className='bg-white border-2 border-slate-200 w-[15rem] md:w-[16rem] h-[20rem] md:h-[24rem] overflow-hidden rounded-lg flex-none'>
      <div className='w-full h-[11rem] md:h-[15rem]'>
        <span>
          {/* <Image src={data.image} alt={data.title} className='w-full h-full object-cover'/> */}
        </span>
        <div className='text-2xl'>
            <Carousel
                responsive={responsive}
            >
                <div>hello</div>
                {/* <AiTwotoneHeart />
                <AiOutlineHeart /> */}
            </Carousel>
        </div>
      </div>
      {/* <div className='flex flex-col p-2'>
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
      </div> */}
    </div>
  )
}

export default SpecialProductCard