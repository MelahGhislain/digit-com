import { LayoutProp } from './_utils'
import React from 'react'
import MobileLayout from './mobile.layout'
import DesktopLayout from './desktop.layout'

const Layout: React.FC<LayoutProp> = ({children}) => {
  return (
    <>
        <MobileLayout>
            {children}
        </MobileLayout> 
        <DesktopLayout>
            {children}
        </DesktopLayout>
    </>
  )
}

export default Layout
