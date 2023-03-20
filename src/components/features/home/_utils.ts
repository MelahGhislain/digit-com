import { StaticImageData } from "next/image";
import { 
    CategotyTV,
    CategorySpeaker,
    CategoryLaptop,
    CategoryCamera,
    CategoryACC,
    CategoryHeadphone,
    CategoryHomeApp,
    CollectionWatch,
 } from '@assets';
import { CollectionItem } from "../../cards/_utils";

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

export const collectionResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

 export const catogoryItems:CategoryItem[] = [
    {
        id: 1,
        image: CategotyTV,
        title: 'Smart Television',
        price: '99.99'
    },
    {
        id: 1,
        image: CategorySpeaker,
        title: 'Portable Speaker',
        price: '99.99'
    },
    {
        id: 1,
        image: CategoryLaptop,
        title: 'Computer & Laptop',
        price: '99.99'
    },
    {
        id: 1,
        image: CategoryCamera,
        title: 'Camera & Video',
        price: '99.99'
    },
    {
        id: 1,
        image: CategoryACC,
        title: 'Accessories',
        price: '99.99'
    },
    {
        id: 1,
        image: CategoryHeadphone,
        title: 'Headphones',
        price: '99.99'
    },
    {
        id: 1,
        image: CategoryHomeApp,
        title: 'Home Appliance',
        price: '99.99'
    },
 ]
 
  export const collectionData: CollectionItem[] = [
    {
        id: '1',
        image: CollectionWatch,
        title: 'Watch',
        description: 'Lorem, ipsum dolor sit amet consect adipisicing elit. Assumenda, ullam?',
        rating: 3,
        price: '99.99'
    },
    {
        id: '2',
        image: CategotyTV,
        title: 'Watch',
        description: 'Lorem, ipsum dolor sit amet consect adipisicing elit. Assumenda, ullam?',
        rating: 3,
        price: '99.99'
    },
    {
        id: '3',
        image: CategorySpeaker,
        title: 'Watch',
        description: 'Lorem, ipsum dolor sit amet consect adipisicing elit. Assumenda, ullam?',
        rating: 3,
        price: '99.99'
    },
    {
        id: '4',
        image: CategoryLaptop,
        title: 'Watch',
        description: 'Lorem, ipsum dolor sit amet consect adipisicing elit. Assumenda, ullam?',
        rating: 3,
        price: '99.99'
    },
    {
        id: '5',
        image: CategoryCamera,
        title: 'Watch',
        description: 'Lorem, ipsum dolor sit amet consect adipisicing elit. Assumenda, ullam?',
        rating: 3,
        price: '99.99'
    },
    {
        id: '6',
        image: CategoryACC,
        title: 'Watch',
        description: 'Lorem, ipsum dolor sit amet consect adipisicing elit. Assumenda, ullam?',
        rating: 3,
        price: '99.99'
    },
    {
        id: '7',
        image: CategoryHeadphone,
        title: 'Watch',
        description: 'Lorem, ipsum dolor sit amet consect adipisicing elit. Assumenda, ullam?',
        rating: 3,
        price: '99.99'
    },
    {
        id: '8',
        image: CollectionWatch,
        title: 'Watch',
        description: 'Lorem, ipsum dolor sit amet consect adipisicing elit. Assumenda, ullam?',
        rating: 3,
        price: '99.99'
    },
    {
        id: '9',
        image: CategoryHomeApp,
        title: 'Watch',
        description: 'Lorem, ipsum dolor sit amet consect adipisicing elit. Assumenda, ullam?',
        rating: 3,
        price: '99.99'
    },
  ]
 