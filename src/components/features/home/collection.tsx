import React from 'react'
import {  collectionData, } from './_utils';
import {Carousel, WrapCarouselItem} from '../../carousel';
import {CollectionCard1, CollectionCard2} from '../../cards';
import Heading from '../../heading'


const Collection = () => {
    
  return (
    <section className='pad-x mt-10'>
        <Heading>Feteaure Collection</Heading>
        <div className='mb-10'>
                <Carousel gap='gap-2'>
                    {
                        collectionData.map((item, index) => (
                            <WrapCarouselItem  
                                key={item.id}
                                itemHeight='h-[20rem] md:h-[24rem]'
                                itemWidth='w-[15rem] md:w-[16rem] '
                            >
                                <CollectionCard1 data={item} />
                            </WrapCarouselItem>
                        ))
                    }
                </Carousel>
        
        </div>
        <div>
            <Carousel gap='gap-2'>
                    {
                        collectionData.map((item, index) => (
                            <WrapCarouselItem  
                                key={item.id}
                                itemHeight='  h-[18rem] md:h-[20rem]'
                                itemWidth='w-[14rem] md:w-[16rem]'
                            >
                                <CollectionCard2 key={item.id} data={item} isDark={!index} />
                            </WrapCarouselItem>
                        ))
                    }
                </Carousel>
        </div>
    </section>
  )
}

export default Collection