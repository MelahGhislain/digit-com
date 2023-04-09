import { useEffect } from 'react';
import Head from 'next/head'
import 'react-multi-carousel/lib/styles.css';
import  {
  Layout,
  QuickNavbar,
  CollectionCard1,
  RatingStars,
}  from '@components'
import Link from 'next/link';
import { collectionData } from '../../components/features/home/_utils';
import Image from 'next/image';

const category = [
    {name: 'Speaker'},
    {name: 'Head sets'},
    {name: 'Computer & Laptop'},
]

export default function Product() {
    
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    },[])

  return (
    <>
      <Head>
        <title>indecor. | products</title>
        <meta name="description" content="ecommerce for furnitures" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout>
          <main className='bg-slate-200 '>
                <QuickNavbar links={['Home', 'Product']} />
                <div className='flex gap-4 pad-x '>
                    <section className='flex-none w-[30%] lg:w-[20%] my-4 hidden md:block'>
                        <div className='rounded bg-white w-full p-4'>
                            <h2 className='text-lg font-semibold text-neutral-700'>Shop by Category</h2>
                            <ul>
                                {
                                    category.map(item => (
                                        <Link key={item.name} href='/products?type=speaker'>
                                            <li className='text-sm my-1 py-1 text-slate-500 '>{item.name}</li>
                                        </Link>

                                    ))
                                }
                            </ul>
                        </div>
                        {/* Filter by */}
                        <div className='rounded bg-white w-full p-4 mt-4'>
                            <h2 className='text-lg font-semibold text-neutral-700'>Filter By</h2>
                            <ul>
                                {
                                    category.map(item => (
                                        <li key={item.name} className='text-sm my-1 py-1 text-slate-500'>{item.name}</li>
                                    ))
                                }
                                <li>
                                    <h2 className='font-semibold'>Price</h2>
                                    {/* <MultiRangeSlider /> */}
                                </li>
                            </ul>
                        </div>
                        {/* Related product */}
                        <div className='rounded bg-white w-full p-4 mt-4'>
                            <h2 className='text-lg font-semibold'>Related Products</h2>
                            <ul className='max-h-[25rem] overflow-auto'>
                                {
                                    collectionData.map(item => (
                                        <li key={item.id} className="py-2 ">
                                            <div className='flex gap-x-3 items-center '>
                                                <span className=''>
                                                    <Image src={item.image} alt='items' className='w-14 h-14'/>
                                                </span>
                                                <div className='flex flex-col'>
                                                    <h2 className='font-semibold text-sm'>{item.title}</h2>
                                                    <p className='text-sm font-light'>$ {item.price}</p>
                                                    <RatingStars rating={item.rating} className='text-xs' />
                                                </div>
                                            </div>
                                        </li>

                                    ))
                                }
                            </ul>
                        </div>
                    </section>

                    <section className='flex-1 my-4'>
                        <div className='py-1 flex justify-between bg-white rounded px-2'>
                            <div className='flex items-center'>
                                <p>Sort By</p>
                                <div>select</div>
                            </div>
                            <div>right</div>
                        </div>
                        <div className='mt-4 '>
                            <div className='flex flex-wrap gap-4 justify-between'>
                                {
                                    collectionData.map(item => (
                                        <CollectionCard1 key={item.id} data={item} className='md:h-[19rem] w-full md:w-[14rem]' priceTop />
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                </div> 
                
          </main>
        </Layout>
    </>
  )
}

