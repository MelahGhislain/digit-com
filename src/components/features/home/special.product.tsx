import {SpecialProductCard} from '../../cards'
import React from 'react'

const SpecialProduct = () => {
  return (
    <section className='pad-x mt-10'>
        <h2 className='mb-8 mt-6 font-semibold text-3xl'> Special Products</h2>
        <div>
            <div className='flex items-center overflow-x-auto gap-6'>
                    
                <SpecialProductCard  />
                     
            </div>
        </div>
    </section>
  )
}

export default SpecialProduct