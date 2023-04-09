import Head from 'next/head'
import 'react-multi-carousel/lib/styles.css';
import  {
  Layout,
  QuickNavbar,
  Heading,
  Timeline,
  Checkout,
  Cart
}  from '@components'
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useState } from 'react';

export default function Order() {
    const router = useRouter()

    const [step, setStep] = useState<number>(1)

    const getNextStep =(step: number, setStep: Dispatch<SetStateAction<number>>)=> {
      if(step === 1)
        return <Cart updateStep={setStep} />
      else if(step === 2)
        return <Checkout updateStep={setStep} />
      else if(step === 3)
        return <Checkout updateStep={setStep} /> //payment
      else
        return <Checkout updateStep={setStep} /> // summary
    }

  return (
    <>
      <Head>
        <title>indecor. | create an order</title>
        <meta name="description" content="ecommerce for furnitures" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout>
          <main className='bg-slate-200 '>
                <QuickNavbar links={['Home', 'Products', 'Cart']} />
                
                <div className='flex w-screen  '>
                    <section className='w-full mt-8'>
                         <Heading className='text-center'>Create an Order</Heading>

                        <div className='pad-x mb-16'>
                            <Timeline step={step} />  
                        </div>
                    </section>
                </div> 

                {getNextStep(step, setStep)}
                
          </main>
        </Layout>
    </>
  )
}

