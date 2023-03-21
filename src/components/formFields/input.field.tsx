import { InputFieldProp } from './_utils'
import React, { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

const InputField: React.FC<InputFieldProp> = ({name, value, type, placeholder, label, error, onChange}) => {

    const [showPassword, setShowPassword] = useState<boolean>(false)

    const handleShowPassord = () => {
        setShowPassword(currentState => !currentState)
    }

    const getType =(type?: string): string=> {
        if(type && type !== 'password'){
            return type
        }else if(type && type === 'password') {
            if(showPassword) return 'text'
            return type
        }
        return 'text'
    }
    
  return (
    <div>
        {label && <label htmlFor={name} className='text-sm'> {label} </label>}
        {error && <p className={`text-xs ${error? 'text-red-500': ''}`}>{error}</p>}
        <div className={`rounded border flex items-center ${error? 'bg-red-500/20 border-red-400': 'bg-white mt-1'}`}>
            <input 
                type={getType(type)} 
                name={name} 
                value={value} 
                placeholder={placeholder} 
                onChange={onChange} 
                className={`placeholder:text-xs rounded w-full px-3 bg-transparent  py-2 focus:outline-none text-gray-800 text-sm ${error? ' placeholder:text-red-400': ''} `}
            />
            {
                type === 'password' &&
                <span className='px-2 h-full py-[.6rem] text-gray-600 cursor-pointer' onClick={handleShowPassord}>
                    {!showPassword && <BsEye />}
                    {showPassword && <BsEyeSlash />}
                </span>
            }
        </div>
    </div>
  )
}

export default InputField
