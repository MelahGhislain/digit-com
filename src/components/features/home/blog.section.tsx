import Heading from '../../heading'
import React from 'react'
import {BlogCard} from '../../cards'
import {Carousel, WrapCarouselItem} from '../../carousel';

const Blogs = () => {
  return (
    <section className='pad-x'>
        <Heading>Blogs</Heading>
        <div className='mb-10'>
              {/* <Carousel gap='gap-2'>
                {
                  new Array(8).fill(null).map((item, index) => (
                    <WrapCarouselItem  
                        key={index}
                        itemHeight=' h-[20rem] md:h-[24rem'
                        itemWidth='w-[16rem] md:w-[18rem]'
                    >
                        <BlogCard />
                    </WrapCarouselItem>

                  ))
                }
              </Carousel> */}
              <BlogCard />
            
        </div>
    </section>
  )
}

export default Blogs