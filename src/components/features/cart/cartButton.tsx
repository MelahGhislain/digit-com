import { CardButtonProp } from './_utils'
import React from 'react'
import { BsTrash } from 'react-icons/bs'

const CartButton: React.FC<CardButtonProp> = ({numOfItems}) => {
  return (
    <div className='flex flex-col gap-y-3 items-center'>
        <div className='flex items-center border rounded overflow-hidden font-bold'>
            <button className='py-1 px-3 md:py-2 md:px-4 transition-all duration-300 hover:bg-slate-900 hover:text-white'>-</button>
            <p className='py-1 px-3 md:py-2 md:px-4 border-x'>{numOfItems}</p>
            <button className='py-1 px-3 md:py-2 md:px-4 transition-all duration-300 hover:bg-slate-900 hover:text-white'>+</button>
        </div>
        <button className='flex items-center gap-1 text-xs'>
            <span><BsTrash /></span>
            <p>Remove</p>
        </button>
    </div>
  )
}

export default CartButton
