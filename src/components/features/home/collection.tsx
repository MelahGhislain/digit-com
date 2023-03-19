import Image from 'next/image';
import React from 'react'
import { 
    CategotyTV,
    CategorySpeaker,
    CategoryLaptop,
    CategoryCamera,
    CategoryACC,
    CategoryHeadphone,
    CategoryHomeApp,
 } from '@assets';
import { CategoryItem } from './_utils';
import Link from 'next/link';

 const catogoryItems:CategoryItem[] = [
    {
        id: 1,
        image: CategotyTV,
        title: 'Smart Television',
        price: '99.99'
    },
    {
        id: 1,
        image: CategorySpeaker,
        title: 'Portable Speaker',
        price: '99.99'
    },
    {
        id: 1,
        image: CategoryLaptop,
        title: 'Computer & Laptop',
        price: '99.99'
    },
    {
        id: 1,
        image: CategoryCamera,
        title: 'Camera & Video',
        price: '99.99'
    },
    {
        id: 1,
        image: CategoryACC,
        title: 'Accessories',
        price: '99.99'
    },
    {
        id: 1,
        image: CategoryHeadphone,
        title: 'Headphones',
        price: '99.99'
    },
    {
        id: 1,
        image: CategoryHomeApp,
        title: 'Home Appliance',
        price: '99.99'
    },
 ]


const Collection = () => {

  return (
    <section className='pad-x mt-10'>
        <h2 className='mb-8 mt-6 font-semibold text-3xl'> Feteaure Collection</h2>
        <div className=''>
            hello
        </div>
    </section>
  )
}

export default Collection