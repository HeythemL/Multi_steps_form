import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import schema from '../../Validation/schema';
import Input from '../Input';
import NextStep from '../NextStep';

const Step1 = ({setCurrentStep}) => {
    const { handleSubmit, register, formState: {errors} } = useForm({resolver: yupResolver(schema)})

    const onSubmit = (data) => {
    console.log(data)
    setCurrentStep(pv => pv + 1)
    }
    return (
        <div className='py-8 pb-4 px-16 text-sky-900'>
            <div id="text">
                <h1 className='font-bold text-4xl'>Personal info</h1>
                <p className='text-gray-400 mt-2'>Please provide your name, email address, and phone number.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-8 items-end'>
                <Input label={'Name'} placeholder={'e.g.Stephen King'} register={register} errors={errors} />
                <Input label={'Email'} placeholder={'e.g.Stephenking@lorem.com'} register={register} errors={errors} />
                <Input label={'Phone Number'} placeholder={'e.g. +1 234 567 890'} register={register} errors={errors} />
                <NextStep className = {"mt-20"} /> 
            </form>
        </div>
    )
}
export default Step1