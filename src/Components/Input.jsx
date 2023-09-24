const Input = ({label, placeholder, register, errors}) => {
    return (
        <>
            <label htmlFor={label} className="text-sm font-semibold text-gray-600 w-full"> {label} </label>
            <input type="text" placeholder={placeholder} {...register(label)}
                className={`mb-7 py-2 px-3 rounded-md font-bold placeholder:font-bold mt-2 border-[1px] "border-gray-400" ${errors[label] && "border-red-500 outline-red-500"} w-full`}
            />
        </>
    )
}
export default Input