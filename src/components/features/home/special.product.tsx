import {SpecialProductCard} from '../../cards'
import React from 'react'
import Heading from '../../heading'

const SpecialProduct = () => {
  return (
    <section className='pad-x mt-10'>
       <Heading>Special Products</Heading>
        <div>
            <div className='flex xl:grid xl:grid-cols-3 items-center overflow-x-auto gap-4'>
                    
                <SpecialProductCard  />
                <SpecialProductCard  />
                <SpecialProductCard  />
                <SpecialProductCard  />
                <SpecialProductCard  />
                <SpecialProductCard  />
                     
            </div>
        </div>
    </section>
  )
}

export default SpecialProduct