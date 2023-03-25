import Head from 'next/head'
import 'react-multi-carousel/lib/styles.css';
import  {
    CheckoutForm,
    Heading,
    Layout,
    QuickNavbar,
}  from '@components'
import Link from 'next/link';


export default function Cart() {

    
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
                <section className='pad-x py-16'>
                    <form>
                        <div className='px-10 py-6 font-light rounded border-2 bg-white'>Have a coupon? click <a href='#coupon' className='hover:underline hover:text-black'>here</a>  to enter your code</div>
                        <div className='px-10 py-6 font-light rounded border-2 bg-white mt-10 '>
                            <Heading>Billing Details</Heading>
                            <CheckoutForm />
                        </div>
                        <div className='px-10 py-6 font-light rounded border-2 bg-white mt-10 '>
                            <Heading>Your Oder</Heading>

                            <table className="border-collapse border w-full ">
                                <thead>
                                    <tr>
                                    <th className="border py-3 px-4 text-start">Product</th>
                                    <th className="border py-3 px-4 text-end">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border py-3 px-4 ">Indiana</td>
                                        <td className="border py-3 px-4 text-end">Indianapolis</td>
                                    </tr>
                                    <tr>
                                        <td className="border py-3 px-4 ">Indiana</td>
                                        <td className="border py-3 px-4 text-end">Indianapolis</td>
                                    </tr>
                                    <tr>
                                        <td className="border py-3 px-4 ">Indiana</td>
                                        <td className="border py-3 px-4 text-end">Indianapolis</td>
                                    </tr>
                                    <tr>
                                        <td className="border py-3 px-4 font-bold">Total</td>
                                        <td className="border py-3 px-4 font-bold text-end">$2250.99</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className='mt-8'>
                                <div className='mb-3'>
                                    <div className="flex items-center mb-2">
                                        <input checked type="radio" value="" name="deliveryMode" className="w-4 h-4 text-yellow-500 bg-gray-100 border-gray-300 " />
                                        <label htmlFor="default-radio-1" className="ml-2 text-sm font-semibold">Direct bank trasnfer</label>
                                    </div>
                                    <p className='text-sm leading-4 text-gray-600'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your payment will not be shipped untill the refunds have cleared into our account.</p>
                                </div>
                                <div className='mb-1'>
                                    <div className="flex items-center  mb-2">
                                        <input  type="radio" value="" name="deliveryMode" className="w-4 h-4 text-yellow-500 bg-gray-100 border-gray-300 " />
                                        <label htmlFor="default-radio-2" className="ml-2 text-sm font-semibold">Cash on delivery</label>
                                    </div>
                                    <p className='text-sm leading-4 text-gray-600'>Your personal data will be used to proccess your order, support your experience throughout this website, and for other purposes described in our <Link href='/policy'>privacy policy</Link></p>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <button className='px-4 py-3 bg-yellow-500 text-sm font-medium'>Place Order</button>
                            </div>
                        </div>
                    </form>
                </section>
                
          </main>
        </Layout>
    </>
  )
}

