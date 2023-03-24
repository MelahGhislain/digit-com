import { CardItemProp } from './_utils'
import React from 'react'
import {RatingStars} from '../../cards/'
import Image from 'next/image'

const CartItem: React.FC<CardItemProp> = ({image, rating, title, price, checkbox, isChecked}) => {
  return (
    <div className='flex gap-x-3 items-center '>
        {checkbox && <input checked={isChecked} id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:outline-none" />}
        <span className=''>
            <Image src={image} alt='cart items' className='w-20 h-20'/>
        </span>
        <div className='flex flex-col'>
            <h2 className='font-semibold'>{title}</h2>
            <p>$ {price}</p>
            <RatingStars rating={rating} />
        </div>
    </div>
  )
}

export default CartItem
