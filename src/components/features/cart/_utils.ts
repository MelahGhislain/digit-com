import { StaticImageData } from "next/image"
import { Dispatch, SetStateAction } from "react"

export interface CardItemProp {
    image: StaticImageData
    price: string
    title: string
    rating: number
    checkbox?: boolean
    isChecked?: boolean
}
export interface CardButtonProp {
    numOfItems: number
}

export interface CartProps {
    updateStep: Dispatch<SetStateAction<number>>
}
