import { useEffect } from 'react';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';
import Heading from '../../heading';
import CheckoutForm from './checkout.form';
import { CheckoutProps } from './_utils';


export default function Checkout({updateStep}: CheckoutProps) {

    const handleClick = () => {
        updateStep(3)
    }

    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    },[])
  return (
    <>
            <section className='pad-x pb-16'>
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
                            <button onClick={handleClick} className='px-4 py-3 bg-yellow-500 text-sm font-medium'>Place Order</button>
                        </div>
                    </div>
                </form>
            </section>
    </>
  )
}

