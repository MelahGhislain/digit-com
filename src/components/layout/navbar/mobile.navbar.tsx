import React from 'react'
import { MobileNavbarProps } from './_utils'
import {FiSearch} from 'react-icons/fi'
import {AiOutlineMenu, AiOutlineHeart, AiFillHeart, AiOutlineClose} from 'react-icons/ai'
import {BsArrowRepeat} from 'react-icons/bs'
import { IoPersonOutline } from 'react-icons/io5'
import {HiShoppingCart, HiOutlineShoppingCart, HiHome} from 'react-icons/hi'
import Link from 'next/link'

const MobileNavbar: React.FC<MobileNavbarProps> = ({children, openDrawer, setOpenDrawer}) => {

    const shouldOpenDrawer = () => {
        setOpenDrawer(currentState => !currentState)
    }

  return (
    <div >
        <nav className='bg-slate-900 text-white pad-x py-6'>
            <div className=' flex justify-between'>
                <h4 className='text-xl font-bold'>
                    Digitic.
                </h4>
                <div className='flex gap-4 text-2xl'>
                    <span className='cursor-pointer transition-all duration-300 hover:opacity-40'>
                        <FiSearch />
                    </span>
                    <span className='cursor-pointer transition-all duration-300 hover:opacity-40' onClick={shouldOpenDrawer}>
                        { !openDrawer? 
                            <AiOutlineMenu /> : <AiOutlineClose />
                        }
                    </span>
                </div>
            </div>
        </nav>

        {children}
        
        <div className='mb-20'></div>
        <div className='fixed bottom-0 bg-slate-900 text-white z-30 w-screen pad-x py-4'>
            <div className=''>
                <ul className='flex justify-between items-center'>
                    <li className=''>
                        <Link href='/' className='flex flex-col justify-center items-center text-2xl'>
                            <HiHome />
                            <span className='text-sm mt-1 '>Home</span>
                        </Link>
                    </li>
                    <li className=''>
                        <Link href='/products' className='flex flex-col justify-center items-center text-2xl'>
                            <BsArrowRepeat />
                            <span className='text-sm mt-1 '>Products</span>
                        </Link>
                    </li>
                    {/* <li>
                        <Link href='/' className='flex flex-col justify-center items-center text-2xl'>
                            <AiOutlineHeart />
                            <span className='text-sm mt-1 '>Favorite</span>
                        </Link>
                    </li> */}
                    <li>
                        <Link href='/account' className='flex flex-col justify-center items-center text-2xl'>
                            <IoPersonOutline />
                            {/* <IoPersonSharp /> */}
                            <span className='text-sm mt-1 '>Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/cart' className='flex flex-col justify-center items-center text-2xl'>
                            <HiOutlineShoppingCart />
                            {/* <HiShoppingCart /> */}
                            <span className='text-sm mt-1 '>Cart</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MobileNavbar
