import React from 'react'
import Image from 'next/image'
import { ServiceItem } from '../features/home/_utils'
type ServiceCardProps ={
    data: ServiceItem
}

const ServiceCard: React.FC<ServiceCardProps> = ({data}) => {
  return (
    <div className='flex gap-4 items-center'>
        <span>
            <Image src={data.image} alt='service' />
        </span>
        <div>
            <h2 className='text-md font-semibold'>{data.title}</h2>
            <p className='text-sm text-slate-600'>{data.description}</p>
        </div>
    </div>
  )
}

export default ServiceCard