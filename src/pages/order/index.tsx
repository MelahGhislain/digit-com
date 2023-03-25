import Head from 'next/head'
import 'react-multi-carousel/lib/styles.css';
import  {
    Heading,
    Layout,
    QuickNavbar,
}  from '@components' 

export default function Order() {

    
  return (
    <>
      <Head>
        <title>indecor. | checkout</title>
        <meta name="description" content="ecommerce for furnitures" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout>
          <main className='bg-slate-200 '>
                <QuickNavbar links={['Home', 'Products', 'Cart', 'Checkout']} />
                                
          </main>
        </Layout>
    </>
  )
}

