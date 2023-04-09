import React from 'react'
import { CardButtonProp, CardItemProp } from './_utils'
import CartButton from './cartButton'
import CartItem from './cartItem'
import { CollectionItem } from '../../cards/_utils'

type MobileCart = {
    data: CollectionItem
    numOfItems: number
}

const MobileCart: React.FC<MobileCart> = ({data, numOfItems}) => {
  return (
    <div className='flex justify-between md:hidden border-b py-4 items-center bg-white mb-2 rounded overflow-hidden'>
        <CartItem image={data.image} rating={data.rating} title={data.title} price={data.price} />
        <div className='mr-1'>
          <CartButton numOfItems={numOfItems} />
        </div>
    </div>
  )
}

export default MobileCart
