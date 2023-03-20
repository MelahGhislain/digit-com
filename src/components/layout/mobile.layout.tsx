import { LayoutProp } from './_utils'
import React, { useState } from 'react'
import { MobileNavbar } from './navbar'
import {NavDrawer} from './navbar'
import Footer from './footer'
type MobileProps = LayoutProp

const MobileLayout: React.FC<MobileProps> = ({children}) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  return (
    <div className='lg:hidden'>
        <NavDrawer setOpen={setOpenDrawer} open={openDrawer}/>
        <MobileNavbar setOpenDrawer={setOpenDrawer} openDrawer={openDrawer}>
            <>
              {children}
              <Footer />
            </>
        </MobileNavbar>
    </div>
  )
}

export default MobileLayout
