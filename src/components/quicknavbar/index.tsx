import Link from 'next/link'
import React from 'react'
interface QuickNavbarProp {
    links: string[]
}

const QuickNavbar: React.FC<QuickNavbarProp> = ({links}) => {

  return (
    <div className='bg-white pad-x py-5 justify-center hidden md:flex text-sm text-neutral-500 items-center'>
        {
            links.map((link, index) => {
                const navlink = link.toLowerCase()
                if(index === links.length-1){
                    return (<div key={link}>{link}</div>)
                }
               return (
                    <>
                        <Link href={ navlink === 'home'? '/': navlink } className='transition-all duration-300 hover:underline hover:text-slate-800'>
                            <div> {link} </div>
                        </Link>
                        <span className='mx-1'>/</span>
                    </>
                )
            })
        }
    </div>
  )
}

export default QuickNavbar