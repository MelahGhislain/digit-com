import React, { useEffect, useState } from 'react'
import { AiOutlineHeart} from 'react-icons/ai'
import {BsArrowRepeat} from 'react-icons/bs'
import {IoPersonOutline, } from 'react-icons/io5'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {IoMdArrowDropdown, IoMdArrowDropup} from 'react-icons/io'
import Logo from '../logo'
import Link from 'next/link'
import SearchBar from '../../searchBar'

const DesktopNavbar = () => {
  const [wasScrolled, serWasScrolled] = useState<boolean>(false)
  useEffect(()=>{
    window.onscroll = () => {
      serWasScrolled(window.pageYOffset === 0? false: true)
      return () => window.onscroll = null
    }
  }, [])

  return (
    <>
      <nav className='bg-slate-800 text-white w-screen'>
        { !wasScrolled &&
            <div className='bg-slate-900 flex justify-between items-center pad-x py-2 text-sm'>
            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h4>
            <div className='flex items-center gap-8'>
              <p>Lorem ipsum dolor sit amet consectetur </p>
              <div>English</div>
              <div>other</div>
            </div>
            </div>
        }

        <div className={`bg-slate-900 flex items-center justify-between pad-x border-t border-slate-800 py-4 ${wasScrolled? 'fixed top-0 w-screen z-50': ""}`}>
          <Logo />
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

              <span className='flex items-center'>
                <Link href='/cart'>
                  <HiOutlineShoppingCart className='text-3xl font-bold' />
                </Link>
                <div className='flex flex-col text-sm ml-2 items-center'>
                  <div className='h-[20px] w-[20px] bg-primary rounded-lg text-xs flex items-center justify-center '>0</div>
                  <p>$99.99</p>
                </div>
              </span>
            </div>
          </div>
        </div>

        { !wasScrolled &&
          <div className='flex pad-x gap-8 items-center'>
          <div className='w-[10rem]'>category</div>
          <div>
            <ul className='flex py-2 gap-2'>
                <Link href='/' className='transition-all duration-300 hover:underline'>
                  <li className='py-4 px-4'>Home</li>
                </Link>
                <Link href='/products?type=all' className='transition-all duration-300 hover:underline'>
                  <li className='py-4 px-4'>Product</li>
                </Link>
                <Link href='/blog' className='transition-all duration-300 hover:underline'>
                  <li className='py-4 px-4'>Blog</li>
                </Link>
                <Link href='/contact' className='transition-all duration-300 hover:underline'>
                  <li className='py-4 px-4'>Contact</li>
                </Link>
              
            </ul>
          </div>
          </div>
        }
      </nav>
      {wasScrolled && <div className='mt-20'></div>}
    </>
  )
}

export default DesktopNavbar