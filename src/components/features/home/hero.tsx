import Image from 'next/image';
import React from 'react'
import Carousel from 'react-multi-carousel';
import { 
        MainBanner1, 
        MainBanner2,  
        CardBanner1,
        CardBanner2,
        CardBanner3,
        CardBanner4
    } from '@assets';
import Link from 'next/link';
import HeroCard from './hero.card';

const CarouselItems = [
    {
        title: 'Super Cascade for Pros1',
        header: 'Special Sale',
        description: 'Save up to 20% by buying now',
        id: '100',
        image: MainBanner1
    },
    {
        title: 'Super Cascade for Pros2',
        header: 'Special Sale',
        description: 'Save up to 20% by buying now',
        id: '100',
        image: MainBanner2
    }
]
const BannerItems =  [
            {
                title: 'Super Cascade for Pros1',
                header: 'Laptop Max',
                description: 'Save up to 20% by buying now',
                id: '100',
                image: CardBanner1
            },
            {
                title: 'Super Cascade for Pros2',
                header: 'SmartWatch 7',
                description: 'Save up to 20% by buying now',
                id: '100',
                image: CardBanner2
            },
            {
                title: 'Super Cascade for Pros1',
                header: 'Buy Ipad Air',
                description: 'Save up to 20% by buying now',
                id: '100',
                image: CardBanner3
            },
            {
                title: 'Super Cascade for Pros2',
                header: 'Air Pods Max',
                description: 'Save up to 20% by buying now',
                id: '100',
                image: CardBanner4
            }
        ]


const Hero = () => {
    const responsive = {
        screen: {
          breakpoint: { max: 4000, min: 0 },
          items: 1
        },
      };
  return (
    <div className='pad-x bg-white py-4 md:py-10 flex flex-col xl:flex-row gap-6'>
        <div className='w-full xl:w-2/5 flex-none'>
            <div className=''>
                <Carousel 
                    arrows={false}
                    showDots
                    autoPlay
                    infinite
                    rewind
                    responsive={responsive}
                >
                    {
                        CarouselItems.map(item => (
                            <div key={item.id} className='h-[12rem] md:h-[20rem] w-full rounded-md relative overflow-hidden'>
                                <Image src={item.image} alt="main-banner" className='w-full h-full object-cover rounded-md' />
                                <div className='absolute top-0 left-0 w-full h-full rounded-md'>
                                    <div className='p-3 md:p-10 '>
                                        <h2 className='text-orange-600 text-sm md:text-lg '>{item.title}</h2>
                                        <div className='text-2xl md:text-4xl font-semibold my-1 md:my-3'>{item.header}</div>
                                        <p className='w-40 mb-2 text-sm md:text-lg'>{item.description}</p>
                                        <Link href={`/product/${item.id}`} >
                                            <button className='bg-slate-900 py-2 px-4 rounded-full text-white text-sm mt-2 hover'>BUY NOW</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </Carousel>
            </div>
        </div>
        <div className='w-full'>
            <div className='flex flex-col gap-6'>
                <div className='hidden md:grid grid-cols-2 items-center gap-6'>
                    {
                        BannerItems.map(item=> (
                            <HeroCard key={item.id} data={item} />
                        )) 
                    }
                </div>
                <div className='md:hidden'>
                    <Carousel 
                        arrows={false}
                        showDots
                        autoPlay
                        autoPlaySpeed={4000}
                        infinite
                        rewind
                        responsive={responsive}
                    >
                        {
                        BannerItems.map(item => (
                            <HeroCard key={item.id} data={item} />
                        ))
                    }
                </Carousel>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero