import React, { useState } from 'react'
import Link from 'next/link'
import {DrawerProps} from './_utils'
import { BsChevronLeft, BsChevronRight, BsX } from 'react-icons/bs'
import Logo from '../logo'

const NavDrawer: React.FC<DrawerProps> = ({open, setOpen}) => {

  const [displayCategory, setDisplayCategory] = useState<boolean>(false)
  const shouldDisplayCategory = () => {
    setDisplayCategory(currentState => !currentState)
  }
  const shouldCloseDrawer = () => {
    setDisplayCategory(true)
    setOpen(false)
  }
  
  return (
    <div 
      className={`h-screen w-screen fixed top-0 left-0 z-50 transition-all duration-300 ${open? 'translate-x-0' : '-translate-x-full' }`} 
      
    >
        <div 
          className={`h-full w-full absolute right-0 bg-black transition-all duration-300 ${open? 'opacity-70' : 'opacity-0' }`} //${open? 'bg-black/50' : '' }
          onClick={shouldCloseDrawer}
        ></div>
        <div 
          className={`h-full w-[80vw] md:w-[50vw] bg-white text-black absolute left-0 top-0`}
        >
          <div className=''>
            <div className='flex justify-between items-center px-3 py-[1.20rem] bg-slate-900 text-white'>
              <Logo />
              <span className='text-3xl ' onClick={shouldCloseDrawer}>
                <BsX />
              </span>
            </div>
            <ul className='text-lg md:text-xl py-3'>
              
              
              <button 
                className='px-3 py-3 border-b border-black/5 w-full text-start flex items-center justify-between' 
                onClick={shouldDisplayCategory}
              >
                {displayCategory && <span>Category</span>}
                <span className='font-bold'>{displayCategory? <BsChevronRight />: <BsChevronLeft />}</span>
              </button>
             
              { displayCategory &&
                <>
                  <Link href='/blog' onClick={()=>setOpen(false)}>
                      <li className='px-3 py-3 border-b border-black/5'>Blog</li>
                  </Link>
                  <Link href='/contact' onClick={()=>setOpen(false)}>
                      <li className='px-3 py-3 border-b border-black/5'>Contact</li>
                  </Link>
                  <Link href='/login' onClick={()=>setOpen(false)}>
                      <li className='px-3 py-3 border-b border-black/5'>Login</li>
                  </Link>
                  <Link href='/signup' onClick={()=>setOpen(false)}>
                      <li className='px-3 py-3 '>Sign up</li>
                  </Link>
                </>
              }

              { !displayCategory &&
                <>
                  <Link href='/products?type=computer' onClick={()=>setOpen(false)}>
                      <li className='px-3 py-3 border-b border-black/5'>Computers</li>
                  </Link>
                  <Link href='/products?type=watches' onClick={()=>setOpen(false)}>
                      <li className='px-3 py-3 border-b border-black/5'>Watches</li>
                  </Link>
                  <Link href='/products?type=headphone' onClick={()=>setOpen(false)}>
                      <li className='px-3 py-3 border-b border-black/5'>Headphones</li>
                  </Link>
                </>
              }
            </ul>
          </div>
        </div>
    </div>
  )
}

export default NavDrawer
