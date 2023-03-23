import { Newslatter } from '@assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs'
import SearchBar from '../../searchBar'
import Logo from '../logo'

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
            <div className='pad-x border-t border-slate-700 py-6 grid grid-cols-2 gap-8 md:gap-0 justify-items-center md:flex md:justify-between'>
                <div className='text-center md:text-start'>
                    <Logo />
                    <ul className='mt-3 text-neutral-400'>
                        <li className='my-1 text-sm'>Douala Cameroon</li>
                        <li className='my-1 text-sm'>(+237) 675909367</li>
                        <li className='my-1 text-sm'>melahghislain17@gmail.com</li>
                        <li>
                            <div className='flex items-center gap-3 mt-4 justify-center md:justify-start'>
                                <div className='flex justify-center items-center h-8 w-8 text-sm rounded-full text-white bg-slate-500'>
                                    <BsFacebook />
                                </div>
                                <div className='flex justify-center items-center h-8 w-8 text-sm rounded-full text-white bg-slate-500'>
                                    <BsTwitter />
                                </div>
                                <div className='flex justify-center items-center h-8 w-8 text-sm rounded-full text-white bg-slate-500'>
                                    <BsYoutube />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='text-center md:text-start'>
                    <h2 className='font-bold'>Information</h2>
                    <ul className='mt-4 text-neutral-400'>
                        <Link href='/'>
                            <li className='my-1 text-sm transition-all duration-300 hover:text-white'>Privacy policy</li>
                        </Link>
                        <Link href='/'>
                            <li className='my-1 text-sm transition-all duration-300 hover:text-white'>Refund policy</li>
                        </Link>
                        <Link href='/'>
                            <li className='my-1 text-sm transition-all duration-300 hover:text-white'>Shipping policy</li>
                        </Link>
                        <Link href='/'>
                            <li className='my-1 text-sm transition-all duration-300 hover:text-white'>Terms of service</li>
                        </Link>
                    </ul>
                </div>
                <div className='text-center md:text-start'>
                    <h2 className='font-bold'>Account</h2>
                    <ul className='mt-4 text-neutral-400'>
                        <Link href='/'>
                            <li className='my-1 text-sm transition-all duration-300 hover:text-white'>Search</li>
                        </Link>
                        <Link href='/'>
                            <li className='my-1 text-sm transition-all duration-300 hover:text-white'>About Us</li>
                        </Link>
                        <Link href='/'>
                            <li className='my-1 text-sm transition-all duration-300 hover:text-white'>FAQ</li>
                        </Link>
                        <Link href='/'>
                            <li className='my-1 text-sm transition-all duration-300 hover:text-white'>See Chat</li>
                        </Link>
                    </ul>
                </div>
                <div className='text-center md:text-start'>
                    <h2 className='font-bold'>Quick Links</h2>
                    <ul className='mt-4 text-neutral-400'>
                        <li className='my-1 text-sm'>Accessories</li>
                        <li className='my-1 text-sm'>Languages</li>
                        <li className='my-1 text-sm'>Support</li>
                    </ul>
                </div>
            </div>
            <div className='pad-x border-t border-slate-700 text-center md:text-start'>
                <p className='py-4 text-sm'> 
                    &copy; 2023 Rights Powered by Delux
                </p>
            </div>

        </div>
    </footer>
  )
}

export default Footer