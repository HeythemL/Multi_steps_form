const Step = ( {num, details, currentStep} ) => {
    return (
        <>
            <div id="step" className="mt-7 text-white flex text-xs my-2 ml-8 items-center">
                <div className={`border-[2px] font-bold mr-1 border-white rounded-full grid place-items-center w-8 h-8 ${currentStep == num && 'bg-gray-100 text-gray-900'}`}> {num} </div>
                <div className="ml-2">
                    <h1 className='font-light'>STEP {num} </h1>
                    <p className='font-bold tracking-widest'> {details} </p>
                </div>
            </div>
        </>
    )
}
export default Step