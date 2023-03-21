import { InputField } from '@components'
import { loginValidation } from '@utils'
import { useFormik } from 'formik'
import React, { ChangeEvent } from 'react'

interface LoginProp {
    email: string;
    password1: string
}

const initialValues: LoginProp ={
  email: '',
  password1: ''
}

const Login = () => {

    const handleSubmit = ( values: LoginProp) => {
      
        console.log({values})
        // formik.handleReset()
    }

  const formik = useFormik({
    initialValues,
    validateOnChange: false,
    validationSchema: loginValidation,
    onSubmit: handleSubmit
  })


  return (
    <div className='w-screen h-screen bg-slate-100 flex justify-center items-center px-2 py-4'>
        
      <div className='bg-white w-[90%] md:w-[60%] lg:w-[40%] shadow-sm p-8 rounded-md'>
        <h2 className='text-center font-bold text-2xl mb-6 text-gray-700'>Login</h2>
        {/* <p> Get started</p> */}

        <form className='flex flex-col gap-4' onSubmit={formik.handleSubmit}>
            <div>
                <InputField 
                    name='email' 
                    label='Email'
                    placeholder='Email'
                    value={formik.values.email} 
                    onChange={formik.handleChange} 
                    error={formik.errors.email}
                />
            </div>
            <div>
                <InputField 
                    label='Password'
                    name='password1' 
                    type='password'
                    placeholder='password'
                    value={formik.values.password1} 
                    onChange={formik.handleChange} 
                    error={formik.errors.password1}
                />
            </div>
            <div>
                <button type='submit' className='text-sm bg-slate-900 text-white px-4 py-2 transition-all duration-300 hover:opacity-80 rounded'>Login</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login