import React from 'react'
import {WrapCarouselItemProp} from './_utils'

const WrapCarouselItem: React.FC<WrapCarouselItemProp> = ({itemWidth, itemHeight, children}) => {
  return (
    <div
      className={`carousel-item text-center relative snap-start ${itemHeight?? 'h-80'} ${itemWidth?? 'w-80'}`}
    >
      <a
      
        className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 "
      
      >
      
        <div className=" aspect-square ">
          {children}
        </div>
      </a>
    </div>
  )
}

export default WrapCarouselItem
