import React from 'react'
import Carousel from 'react-multi-carousel';

const Hero = () => {
    const responsive = {
        screen: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 0 },
          items: 1
        },
      };
  return (
    <div className='pad-x bg-white py-10 flex'>
        <div className='w-full lg:w-2/5 flex-none'>
            <div className='bg-red-500'>
                <Carousel 
                    arrows={false}
                    showDots
                    responsive={responsive}
                >
                    <div>
                        
                    </div>
                </Carousel>
            </div>
        </div>
        <div className='w-full bg-gray-500'>
            hello
        </div>
    </div>
  )
}

export default Hero