import Image from 'next/image';
import React from 'react'
import { CategoryItem, collectionData, collectionResponsive } from './_utils';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import {CollectionCard1, CollectionCard2} from '../../cards';


const Collection = () => {
    
  return (
    <section className='pad-x mt-10'>
        <h2 className='mb-8 mt-6 font-semibold text-3xl'> Feteaure Collection</h2>
        <div className='mb-10'>
            {/* <div className='hidden xl:block'>
                
                <Carousel 
                    responsive={collectionResponsive}
                >
                    {
                        collectionData.map(item => (
                            <CollectionCard1 key={item.id} data={item} />
                        ))
                    }
                </Carousel>
            </div> */}
            <div className=' flex items-center overflow-x-auto gap-6'>
                    {
                        collectionData.map(item => (
                            <CollectionCard1 key={item.id} data={item} />
                        ))
                    }
            </div>
        </div>
        <div>
            <div className='flex items-center overflow-x-auto gap-6'>
                    {
                        collectionData.map(item => (
                            <CollectionCard2 key={item.id} data={item} />
                        ))
                    }
            </div>
        </div>
    </section>
  )
}

export default Collection