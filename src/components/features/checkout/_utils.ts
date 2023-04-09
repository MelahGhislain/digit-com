import { Dispatch, SetStateAction } from "react"

export interface BillingProps {
    firstName: string
    lastName: string
    company?: string
    country: string
    address: string
    town: string
    region: string
    postalcode: string
    phone: string
    email: string
    deliveryDate?: string
    deliveryTime?: string
    description?: string
}

export const initialValues: BillingProps ={
    firstName: '',
    lastName: '',
    company: '',
    country: '',
    address: '',
    town: '',
    region: '',
    postalcode: '',
    phone: '',
    email: '',
    deliveryDate: '',
    deliveryTime: '',
    description: ''
}

export interface CheckoutProps {
    updateStep: Dispatch<SetStateAction<number>>
}