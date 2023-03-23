import Head from 'next/head'
import 'react-multi-carousel/lib/styles.css';
import  {
  Layout,
  QuickNavbar,
  CartButton,
  CartItem,
  SpecialProductCard,
  Heading,
  DesktopCart,
  MobileCart
}  from '@components'
import { BsTrash, BsTrash2 } from 'react-icons/bs';
import Image from 'next/image';
import { CategoryCamera } from '@assets';
import { collectionData } from '../../components/features/home/_utils';

export default function Cart() {
  return (
    <>
      <Head>
        <title>Delux | products</title>
        <meta name="description" content="ecommerce for furnitures" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout>
          <main className='bg-slate-200 '>
                <QuickNavbar links={['Home', 'Products', 'Cart']} />
                <div className='flex w-screen pad-x bg-white border-t'>
                    <section className='w-full'>
                        <div className='w-full'>
                            <div className='flex items-center justify-between w-full py-2'>
                                <Heading>Cart</Heading>
                                <button className='flex items-center gap-1 text-xs'>
                                    <span><BsTrash /></span>
                                    <p>Remove</p>
                                </button>
                            </div>

                            <DesktopCart data={collectionData} />
                            {
                                collectionData.map(item => (
                                    <MobileCart key={item.id} data={item} numOfItems={2}/>
                                ))
                            }
                            <div className='py-4 md:hidden'>
                                <div className='flex justify-between items-center py-3 '>
                                    <p>Total Cost:</p>
                                    <p className='font-bold'>$250.99</p>
                                </div>
                                <button className='w-full bg-slate-900 text-white text-sm py-3 '>Order now</button>
                            </div>
                        </div>
                    </section>
                </div> 
                <section className='pad-x mt-10 pb-10'>
                    <Heading>Recomended Products</Heading>
                    <div>
                        <div className='flex xl:grid xl:grid-cols-3 items-center overflow-x-auto gap-4 py-4'>
                                
                            <SpecialProductCard  />
                            <SpecialProductCard  />
                            <SpecialProductCard  />
                            <SpecialProductCard  />
                            <SpecialProductCard  />
                            <SpecialProductCard  />
                                
                        </div>
                    </div>
                </section>
                
          </main>
        </Layout>
    </>
  )
}

