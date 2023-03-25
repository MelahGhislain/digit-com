import React, { useState } from 'react'
import {InputField, TextareaField} from '../../formFields'
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { BillingProps, initialValues } from './_utils';
import Select from 'react-tailwindcss-select';
import { SelectValue } from 'react-tailwindcss-select/dist/components/type';
import countryOptions from '../../../data/country.json'

const CheckoutForm = () => {
    const router = useRouter()
    const [selectedCountry, setSelectedCountry] = useState<SelectValue>({label: 'Cameroon', value: "CM"})

    const handleSubmit = ( values: BillingProps) => {
      
        console.log({values})
        // formik.handleReset()
        router.push('/order')
    }

    const formik = useFormik({
        initialValues,
        validateOnChange: false,
        // validationSchema: loginValidation,
        onSubmit: handleSubmit
    })

    const options = [
        { value: "fox", label: "🦊 Fox" },
        { value: "Butterfly", label: "🦋 Butterfly" },
        { value: "Honeybee", label: "🐝 Honeybee" }
      ];
    
      const handleChange = (value: SelectValue) => {
        formik.setFieldValue('country', value)
        setSelectedCountry(value);
      }                                 
  return (
    <div className='flex  md:gap-8 flex-col md:flex-row'>
        <div className='flex flex-col gap-2 md:gap-4 flex-1'>
            <InputField
                name='firstName' 
                label='First name *'
                value={formik.values.firstName} 
                onChange={formik.handleChange} 
                error={formik.errors.firstName}
            />
            <InputField
                name='lastName' 
                label='Last name *'
                value={formik.values.lastName} 
                onChange={formik.handleChange} 
                error={formik.errors.lastName}
            />

            <div>
                <label className='font-light text-sm pb-2'>Country / Region *</label>
                <div className='mt-1'>
                    <Select
                    value={selectedCountry}
                    onChange={handleChange}
                    options={countryOptions}
                    primaryColor='yellow'
                    isSearchable
                    placeholder='Country / Region'
                    isClearable
                    />
                </div>
            </div>
            <InputField
                name='address' 
                label='Street address *'
                value={formik.values.address} 
                onChange={formik.handleChange} 
                error={formik.errors.address}
            />
            <InputField
                name='town' 
                label='Town / City *'
                value={formik.values.town} 
                onChange={formik.handleChange} 
                error={formik.errors.town}
                />
            <InputField
                name='region' 
                label='State / Country *'
                value={formik.values.region} 
                onChange={formik.handleChange} 
                error={formik.errors.region}
            />
            <InputField
                name='postalcode' 
                label='Postalcode / ZIP *'
                value={formik.values.postalcode} 
                onChange={formik.handleChange} 
                error={formik.errors.postalcode}
            />
            <InputField
                name='phone' 
                label='Phone *'
                value={formik.values.phone} 
                onChange={formik.handleChange} 
                error={formik.errors.phone}
            />
            <InputField
                name='email' 
                label='Email *'
                value={formik.values.email} 
                onChange={formik.handleChange} 
                error={formik.errors.email}
            />
        </div>
        <div className='flex flex-col gap-4 flex-1'>
            <InputField
                name='company' 
                label='Company name (optional)'
                value={formik.values.company} 
                onChange={formik.handleChange} 
                error={formik.errors.company}
            />
            <InputField
                name='deliveryDate' 
                label='Delivery date (optional)'
                value={formik.values.deliveryDate} 
                onChange={formik.handleChange} 
                error={formik.errors.deliveryDate}
            />
            <InputField
                name='deliveryTime' 
                type='date'
                label='Delivery time (optional)'
                value={formik.values.deliveryTime} 
                onChange={formik.handleChange} 
                error={formik.errors.deliveryTime}
            />
            <TextareaField
                name='description'
                label='Order notes (optional)'
                placeholder='Notes about your order e.g. special notes for delivery.'
                value={formik.values.description} 
                onChange={formik.handleChange} 
                error={formik.errors.description}
            />

        </div>
    </div>
  )
}

export default CheckoutForm
