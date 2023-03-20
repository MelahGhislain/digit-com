import Image from 'next/image';
import React from 'react'
import { CategoryItem, collectionData, collectionResponsive } from './_utils';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import {CollectionCard1, CollectionCard2} from '../../cards';
import Heading from '../../heading'


const Collection = () => {
    
  return (
    <section className='pad-x mt-10'>
        <Heading>Feteaure Collection</Heading>
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
            <div className=' flex items-center overflow-x-auto gap-6 py-4'>
                    {
                        collectionData.map(item => (
                            <CollectionCard1 key={item.id} data={item} />
                        ))
                    }
            </div>
        </div>
        <div>
            <div className='flex items-center overflow-x-auto gap-6 py-4'>
                    {
                        collectionData.map((item, index) => (
                            <CollectionCard2 key={item.id} data={item} isDark={!index} />
                        ))
                    }
            </div>
        </div>
    </section>
  )
}

export default Collection