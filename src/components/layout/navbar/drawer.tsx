import React from 'react'
import {DrawerProps} from './_utils'

const NavDrawer: React.FC<DrawerProps> = ({open, setOpen}) => {
  
  
  return (
    <div 
      className={`h-screen w-screen fixed top-0 left-0 z-50 transition-all duration-300 ${open? 'translate-x-0' : '-translate-x-full' }`} 
      
    >
        <div 
          className={`h-full w-full absolute right-0 bg-black transition-all duration-300 ${open? 'opacity-70' : 'opacity-0' }`} //${open? 'bg-black/50' : '' }
          onClick={()=>setOpen(false)}
        ></div>
        <div 
          className={`h-full w-[80vw] md:w-[50vw] bg-white text-black absolute left-0 top-0`}
        >
          hay
        </div>
    </div>
  )
}

export default NavDrawer
