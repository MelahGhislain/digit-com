import React from 'react'
import { AiOutlineHeart} from 'react-icons/ai'
import {BsArrowRepeat} from 'react-icons/bs'
import {IoPersonOutline, } from 'react-icons/io5'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {IoMdArrowDropdown, IoMdArrowDropup} from 'react-icons/io'
import Link from 'next/link'
import SearchBar from '../../searchBar'

const DesktopNavbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className='bg-slate-900 flex justify-between items-center pad-x py-2 text-sm'>
        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h4>
        <div className='flex items-center gap-8'>
          <p>Lorem ipsum dolor sit amet consectetur </p>
          <div>English</div>
          <div>other</div>
        </div>
      </div>

      <div className='bg-slate-900 flex items-center justify-between pad-x border-t border-slate-800 py-4'>
        <div className='text-xl font-bold'>Digitic.</div>
        <div className='bg-red-500 w-[25rem]'>
          <SearchBar />
        </div>
        <div className='flex flex-none'>
          <div className='flex items-center gap-4'>
            <span className='flex items-center'>
              <BsArrowRepeat className='text-3xl font-bold' />
              <div className='flex flex-col text-sm ml-2'>
                <Link href='/' className='transition-all duration-300 hover:underline'>Favorite</Link>
                <Link href='/product' className='transition-all duration-300 hover:underline'>Products</Link>
              </div>
            </span>

            <span className='flex items-center'>
              <AiOutlineHeart className='text-3xl font-bold' />
              <div className='flex flex-col text-sm ml-2'>
                <Link href='/favorite' className='transition-all duration-300 hover:underline'>Favorite</Link>
                <Link href='/wishlist' className='transition-all duration-300 hover:underline'>Wishlist</Link>
              </div>
            </span>

            <span className='flex items-center'>
              <IoPersonOutline className='text-3xl font-bold' />
              <div className='flex flex-col text-sm ml-2'>
                <Link href='/login' className='transition-all duration-300 hover:underline'>Login</Link>
                <Link href='/account' className='transition-all duration-300 hover:underline'>My Account</Link>
              </div>
            </span>

            <button className='flex items-center'>
              <HiOutlineShoppingCart className='text-3xl font-bold' />
              <div className='flex flex-col text-sm ml-2 items-center'>
                <div className='h-[20px] w-[20px] bg-primary rounded-lg text-xs flex items-center justify-center '>0</div>
                <p>$99.99</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div>
        <div></div>
        <div>
          <ul className='flex'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>Product</Link>
            </li>
            <li>
              <Link href='/'>Blog</Link>
            </li>
            <li>
              <Link href='/'>Cntact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default DesktopNavbar