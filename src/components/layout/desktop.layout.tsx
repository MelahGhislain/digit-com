import { LayoutProp } from './_utils'
import React from 'react'
import { DesktopNavbar } from './navbar'

type DesktopProps = LayoutProp

const DesktopLayout: React.FC<DesktopProps> = ({children}) => {
  return (
    <div className='hidden lg:block'>
        <DesktopNavbar />
        {children}
    </div>
  )
}

export default DesktopLayout