import { StaticImageData } from "next/image"

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