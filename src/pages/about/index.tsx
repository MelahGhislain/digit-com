import {Heading, Layout, QuickNavbar} from '@components'
import Head from 'next/head'
import Image from 'next/image'
import { AboutBanner } from '@assets'
import { useEffect } from 'react'


export default function AboutUs() {

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[])

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
            <QuickNavbar links={['Home', 'About']}/>
            <div className='pad-x pb-20 pt-16'>
              <div className='w-full h-[12rem] md:h-[20rem] lg:h-[28rem]'>
                  <Image src={AboutBanner} alt="banner" className='w-full h-full object-cover' />
              </div>
              <section>
                  <Heading>WELCOME TO INDECOR.</Heading>

                  <p className='text-slate-500 font-light'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, molestiae quod. Quas tempore voluptatem rerum numquam incidunt non beatae hic.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus aspernatur sunt id optio, at magnam ad corrupti impedit fugit sequi.
                  </p>
              
                  <div>
                      <div>
                          {/* <Image /> */}
                      </div>
                  </div>
              </section>

              <section className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-neutral-500 font-light'>
                <div>
                  <h2 className='text-2xl font-semibold text-slate-800 mb-2'>OUR VISSION</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum autem veritatis ipsam repudiandae illum repellat? Dignissimos, fuga autem minima numquam non temporibus dolorum eum provident expedita, totam reiciendis similique iure!</p>
                </div>
                <div>
                  <h2 className='text-2xl font-semibold text-slate-800 mb-2'>OUR MISSION</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum autem veritatis ipsam repudiandae illum repellat? Dignissimos, fuga autem minima numquam non temporibus dolorum eum provident expedita, totam reiciendis similique iure!</p>
                </div>
                <div>
                  <h2 className='text-2xl font-semibold text-slate-800 mb-2'>GOAL</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum autem veritatis ipsam repudiandae illum repellat? Dignissimos, fuga autem minima numquam non temporibus dolorum eum provident expedita, totam reiciendis similique iure!</p>
                </div>
              </section>
              <section className='mt-16'>
                <h2 className='text-2xl font-semibold text-slate-800 my-10'>YOU CAN CHOOSE BECAUSE WE ALWAYS PROVIDE IMPORTANCE</h2>
                <div className='flex flex-col-reverse md:flex-row gap-8'>
                  <div className='grid grid-cols-1 md:grid-cols-2 text-neutral-500 text-sm gap-8 font-light'>
                    <div>
                      <h2 className='text-md font-semibold text-slate-800 mb-4'>QUALITY PRODUCT</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum autem veritatis ipsam repudiandae illum repellat? Dignissimos, fuga autem minima</p>
                    </div>
                    <div>
                      <h2 className='text-md font-semibold text-slate-800 mb-4'>FAST DELICERY</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum autem veritatis ipsam repudiandae illum repellat? Dignissimos, fuga autem minima</p>
                    </div>
                    <div>
                      <h2 className='text-md font-semibold text-slate-800 mb-4'>MONEY BACK GUARANTEE</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum autem veritatis ipsam repudiandae illum repellat? Dignissimos, fuga autem minima</p>
                    </div>
                    <div>
                      <h2 className='text-md font-semibold text-slate-800 mb-4'>SECURE PAYMENT</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum autem veritatis ipsam repudiandae illum repellat? Dignissimos, fuga autem minima</p>
                    </div>
                    <div>
                      <h2 className='text-md font-semibold text-slate-800 mb-4'>FREE RETURN</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum autem veritatis ipsam repudiandae illum repellat? Dignissimos, fuga autem minima</p>
                    </div>
                    <div>
                      <h2 className='text-md font-semibold text-slate-800 mb-4'>24/7 SUPPORT</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum autem veritatis ipsam repudiandae illum repellat? Dignissimos, fuga autem minima</p>
                    </div>
                   
                  </div>
                  <div className='w-full lg:w-[60%] bg-red-500'>image</div>
                </div>
              
              </section>
            </div>
          </Layout>
      </main>
    </>
  )
}
