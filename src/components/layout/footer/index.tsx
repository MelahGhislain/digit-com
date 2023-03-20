import { Newslatter } from '@assets'
import Image from 'next/image'
import React from 'react'
import SearchBar from '../../searchBar'

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-white'>
        <div className=''>
            <div className='pad-x py-6 flex flex-col md:flex-row items-center md:justify-around gap-5'>
                <div className='flex items-center gap-4 flex-none'>
                    <Image src={Newslatter} alt='news letter' className='text-xs' />
                    <p>Sign up for News Letter</p>
                </div>
                <div className='w-full md:w-[40%]'>
                    <SearchBar />
                </div>
            </div>
            <div className='pad-x border-t border-slate-700 py-6'>2</div>
            <div className='pad-x border-t border-slate-700'>3</div>

        </div>
    </footer>
  )
}

export default Footer