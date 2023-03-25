import { InputFieldProp } from './_utils'
import React, { useState } from 'react'

interface TextareaFieldProp extends InputFieldProp {
    rows?: number
    cols?: number
}


const TextareaField: React.FC<TextareaFieldProp> = ({name, value, rows, cols, placeholder, label, error, onChange}) => {
    
  return (
    <div>
        {label && <label htmlFor={name} className='text-sm'> {label} </label>}
        {error && <p className={`text-xs ${error? 'text-red-500': ''}`}>{error}</p>}
        <div className={`rounded border flex items-center ${error? 'bg-red-500/20 border-red-400': 'bg-white mt-1'}`}>
            <textarea 
                rows={rows?? 3}
                cols={cols}
                name={name} 
                value={value} 
                placeholder={placeholder} 
                onChange={onChange} 
                className={`placeholder:text-xs rounded w-full px-3 bg-transparent  py-2 focus:outline-none text-gray-800 text-sm ${error? ' placeholder:text-red-400': ''} `}
            />
        </div>
    </div>
  )
}

export default TextareaField
