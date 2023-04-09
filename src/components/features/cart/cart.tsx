import 'react-multi-carousel/lib/styles.css';
import { collectionData } from '../home/_utils';
import { useRouter } from 'next/router';
import DesktopCart from './desktop.cart';
import MobileCart from './mobile.cart';
import Heading from '../../heading';
import { SpecialProductCard } from '../../cards';
import { CartProps } from './_utils';
import { useEffect } from 'react';

export default function Cart ({updateStep}: CartProps) {
    const router = useRouter()

    const handleCheckout = () => {
        updateStep(2)
    }
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    },[])
  return (
    <>
          
                
                <div className='flex w-screen  '>
                    <section className='w-full mt-8'>
                        
                        <div className='w-full'>
                            <div className='pad-x'> 
                                <DesktopCart data={collectionData} handleCheckout={handleCheckout} />

                            </div>
                            <div className='pad-x'>
                                {
                                    collectionData.map(item => (
                                        <MobileCart key={item.id} data={item} numOfItems={2}/>
                                    ))
                                }

                            </div>
                            <div className='py-4 md:hidden pad-x'>
                                <div className='flex justify-between items-center py-3 '>
                                    <p>Total Cost:</p>
                                    <p className='font-bold'>$250.99</p>
                                </div>
                                <button onClick={handleCheckout} className='w-full bg-slate-900 text-white text-sm py-3 '>Checkout</button>
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
    </>
  )
}

