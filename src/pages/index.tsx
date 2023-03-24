import Head from 'next/head'
import 'react-multi-carousel/lib/styles.css';
import  { 
  Category, 
  Collection, 
  Hero, 
  Layout, 
  PopularProduct, 
  ServiceCard, 
  SpecialProduct, 
  Blogs, 
  Carousel
}  from '@components'
import { Service1, Service2, Service3, Service5 } from '@assets';

const ServiceItems = [
  {
    id: 1,
    title: 'Free Shipping',
    description: 'some description text',
    image: Service1
  },
  {
    id: 2,
    title: 'Daily Offers',
    description: 'some description text',
    image: Service2
  },
  {
    id: 3,
    title: 'Support 24/7',
    description: 'some description text',
    image: Service3
  },
  {
    id: 5,
    title: 'Secure Payments',
    description: 'some description text',
    image: Service5
  },
]


export default function Home() {
  return (
    <>
      <Head>
        <title>indecor. | Home page</title>
        <meta name="description" content="ecommerce for furnitures" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-slate-100'>
          <Layout>
            <Hero />
            <div className='pad-x py-8 hidden md:grid md:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-6 '>
              {
                ServiceItems.map(item => (
                  <ServiceCard key={item.id} data={item} /> 
                ))
              }
            </div>
            <Category />
            <Collection />
            <SpecialProduct />
            <PopularProduct />
            <Blogs />
            <Carousel />
          </Layout>
      </main>
    </>
  )
}
