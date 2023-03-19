import React from 'react'
import {FiSearch} from 'react-icons/fi'

const SearchBar = () => {
  return (
    <div className='bg-white text-black flex items-center w-full'>
        <input type="text" className='px-2 py-2 focus:outline-none w-full' placeholder='search' />
        <span className='bg-primary h-full py-2 flex-none text-2xl px-3 cursor-pointer'>
            <FiSearch />
        </span>
    </div>
  )
}

export default SearchBar