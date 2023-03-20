import { StaticImageData } from "next/image"

export interface CollectionItem {
    id: string
    image: StaticImageData
    title: string
    description: string
    rating: number
    price: string
}