import Heading from '../../heading'
import React from 'react'
import {BlogCard} from '../../cards'

const Blogs = () => {
  return (
    <section className='pad-x'>
        <Heading>Blogs</Heading>
        <div className='mb-10'>
            <div className=' flex items-center overflow-x-scroll gap-6 py-5'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    </section>
  )
}

export default Blogs