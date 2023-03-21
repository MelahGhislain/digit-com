import * as Yup from 'yup'


export const signupValidation = Yup.object({
    username: Yup.string().required('username is required'),
    email: Yup.string().required('email is required').email('provide a valid email'),
    password1: Yup.string().required('password is required').min(3, 'password is too weak'),
    password2: Yup.string().required('confirm password is required').oneOf([Yup.ref('password1')], 'passwords don\'t match'),
    // terms: Yup.bool().oneOf([true], 'Accept our terms of use')
})

export const loginValidation = Yup.object({
    email: Yup.string().required('email is required').email('provide a valid email'),
    password1: Yup.string().required('confirm password is required').min(3, 'password is too weak'),
})
