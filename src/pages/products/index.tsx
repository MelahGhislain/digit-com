import Head from 'next/head'
import 'react-multi-carousel/lib/styles.css';
import  {
  Layout,
  QuickNavbar,
  CollectionCard1,
}  from '@components'
import Link from 'next/link';
import { collectionData } from '../../components/features/home/_utils';
const category = [
    {name: 'Speaker'},
    {name: 'Head sets'},
    {name: 'Computer & Laptop'},
]

export default function Product() {
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
                <QuickNavbar links={['Home', 'Product']} />
                <div className='flex gap-4 pad-x '>
                    <section className='flex-none w-[30%] lg:w-[20%] my-4 hidden md:block'>
                        <div className='rounded bg-white w-full p-4'>
                            <h2 className='text-lg font-semibold'>Shop by Category</h2>
                            <ul>
                                {
                                    category.map(item => (
                                        <Link key={item.name} href='/speaker'>
                                            <li className='text-sm my-1 py-1'>{item.name}</li>
                                        </Link>

                                    ))
                                }
                            </ul>
                        </div>
                        {/* Filter by */}
                        <div className='rounded bg-white w-full p-4 mt-4'>
                            <h2 className='text-lg font-semibold'>Filter By</h2>
                            <ul>
                                {
                                    category.map(item => (
                                        <li key={item.name} className='text-sm my-1 py-1'>{item.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* Related product */}
                        <div className='rounded bg-white w-full p-4 mt-4'>
                            <h2 className='text-lg font-semibold'>Related Products</h2>
                            <ul>
                                
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
