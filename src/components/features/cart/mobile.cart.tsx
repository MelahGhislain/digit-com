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
    <div className='flex justify-between md:hidden border-b py-4 items-center'>
        <CartItem image={data.image} rating={data.rating} title={data.title} price={data.price} />
        <CartButton numOfItems={numOfItems} />
    </div>
  )
}

export default MobileCart
