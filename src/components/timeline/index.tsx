import React from 'react'
import { TimelineProps } from './_utils'

const Timeline: React.FC<TimelineProps> = ({step}) => {
  return (
    
    <ol className="items-center sm:flex">
        <li className="relative mb-6 sm:mb-0 w-full">
            <div className="flex items-center pl-1">
                <div className={`z-10 flex items-center justify-center w-8 h-8 ${step>=1? "bg-black ring-yellow-300 text-white":"ring-gray-400 bg-white"} ring-2 rounded-full  shrink-0`}>
                    <p className='font-bold'>1</p>
                </div>
                <div className={`hidden sm:flex w-full ${step>=2? 'bg-black': 'bg-gray-400'} h-0.5 `}></div>
            </div>
            <div className="mt-2 w-full text-sm font-semibold text-gray-900">
                <h2>Cart</h2>
            </div>
        </li>
        <li className="relative mb-6 sm:mb-0 w-full">
            <div className="flex items-center">
                <div className={`hidden sm:flex w-full ${step>=2? 'bg-black': 'bg-gray-400'} h-0.5 `}></div>
                <div className={`z-10 flex items-center justify-center w-8 h-8 ${step>=2? "bg-black ring-yellow-300 text-white":"ring-gray-400 bg-white"} ring-2 rounded-full  shrink-0`}>
                    <p className='font-bold'>2</p>
                </div>
                <div className={`hidden sm:flex w-full ${step>=3? 'bg-black': 'bg-gray-400'} h-0.5 `}></div>
            </div>
            <div className="mt-2 w-full text-center text-sm font-semibold text-gray-500">
                <h2>Shipping</h2>
            </div>
        </li>
        <li className="relative mb-6 sm:mb-0 w-full">
            <div className="flex items-center">
                <div className={`hidden sm:flex w-full ${step>=3? 'bg-black': 'bg-gray-400'} h-0.5 `}></div>
                <div className={`z-10 flex items-center justify-center w-8 h-8 ${step>=3? "bg-black ring-yellow-300 text-white":"ring-gray-400 bg-white"} ring-2 rounded-full  shrink-0`}>
                    <p className='font-bold'>3</p>
                </div>
                <div className={`hidden sm:flex w-full ${step>=4? 'bg-black': 'bg-gray-400'} h-0.5 `}></div>
            </div>
            <div className="mt-2 w-full text-center text-sm font-semibold text-gray-500">
                <h2>Payment</h2>
            </div>
        </li>
        <li className="relative mb-6 sm:mb-0 w-full">
            <div className="flex items-center pr-5">
                <div className={`hidden sm:flex w-full ${step>=4? 'bg-black': 'bg-gray-400'} h-0.5 `}></div>
                <div className={`z-10 flex items-center justify-center w-8 h-8 ${step>=4? "bg-black ring-yellow-300 text-white":"ring-gray-400 bg-white"} ring-2 rounded-full  shrink-0`}>
                    <p className='font-bold'>4</p>
                </div>
            </div>
            <div className="mt-2 w-full text-end text-sm font-semibold text-gray-500">
                <h2 className=''>Summary</h2>
            </div>
        </li>
    </ol>

  )
}

export default Timeline