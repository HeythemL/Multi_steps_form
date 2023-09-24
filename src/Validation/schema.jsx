import * as yup from 'yup'
const schema = yup.object().shape({
    Name: yup.string().required('Name is required'),
    Email: yup.string().email().required('Email address is required'),
    'Phone Number': yup.number().required('Phone Number is required')
})

export default schema