import React from 'react'
import CartButton from './cartButton'
import CartItem from './cartItem'
import { CollectionItem } from '../../cards/_utils'

type DesktopCartProp = {
    data: CollectionItem[]
}

const DesktopCart: React.FC<DesktopCartProp> = ({data}) => {
  return (
    <div className="hidden md:flex flex-col pb-4">
        <div className="overflow-x-auto ">
            <div className="inline-block min-w-full py-2 ">
                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium ">
                            <tr>
                                <th scope="col" className="py-4 text-left flex items-center gap-2">
                                    <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:outline-none" />
                                    <span>Product</span>
                                </th>
                                <th scope="col" className="py-4 text-center">Quantity</th>
                                <th scope="col" className="py-4 text-right">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, index) => (
                                    <tr key={item.id} className={`transition duration-300 ease-in-out border-b `}>
                                        <td className="whitespace-nowrap py-4 ">
                                            <CartItem checkbox title={item.title} price={item.price} image={item.image} rating={item.rating} />
                                        </td>
                                        <td className="whitespace-nowrap py-4 flex items-center justify-center"><CartButton numOfItems={2} /></td>
                                        <td className="whitespace-nowrap py-4 font-semibold text-right">$2.500</td>
                                    </tr>

                                ))
                            }
                            <tr className={`transition duration-300 ease-in-out `}>
                                <td className="whitespace-nowrap py-4 "></td>
                                <td className="whitespace-nowrap py-4 flex items-center justify-center text-lg">Total: <strong className='ml-2 font-bold'> $2250.99</strong></td>
                                <td className="whitespace-nowrap py-4 font-semibold text-right">
                                    <button className='bg-slate-900 rounded text-white px-5 py-2 transition-all duration-300 hover:opacity-80'>
                                        Order now
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DesktopCart
