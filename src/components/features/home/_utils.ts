import { StaticImageData } from "next/image";

export interface CardItem {
    title: string;
    header: string;
    description: string;
    id: string;
    image: StaticImageData;
}

export interface ServiceItem {
    title: string;
    description: string;
    id: number;
    image: StaticImageData;
}

export interface CategoryItem {
    id: number;
    image: StaticImageData;
    title: string;
    price: string;
}