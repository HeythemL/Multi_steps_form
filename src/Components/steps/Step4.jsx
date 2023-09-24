import Cart from "../Cart"
import Goback from "../GoBack"
import NextStep from "../NextStep"
const Step4 = ({setCurrentStep, selectedSubscription, monthly, cart}) => {

    return (
        <div className='pt-8 pb-4 px-16 pr-4 w-[33rem] text-sky-900'>
            <div id="text">
                <h1 className='font-bold text-4xl'>Finishing up</h1>
                <p className='text-gray-400 mt-2'>Double-check everything looks OK before confirming</p>
            </div>
            <div className="flex flex-col justify-between ">
                <div className="bg-gray-50 p-5 rounded-lg mt-10 flex flex-col items-center">
                    <div className="flex justify-between items-center w-full">
                        <div className="">
                            <h1 className="font-bold">{selectedSubscription[0]} ({monthly ? 'monthly' : 'yearly'}) </h1>
                            <a href="#" onClick={() => setCurrentStep(2)} className="text-gray-500 hover:text-indigo-500 text-sm font-semibold underline">Change</a>
                        </div>
                            <h1 className="font-extrabold"> {`$${monthly? selectedSubscription[1] : selectedSubscription[1] * 10}/ ${monthly ? 'mo' : 'yr'}`} </h1>
                    </div>
                    <div className="h-[1px] bg-gray-200 w-4/5 my-6"></div>
                    {cart.map((elem, index) => <Cart key={index} option={elem[0]} price={elem[1]} />)}
                </div>
                <div className="text-gray-500 p-5 flex justify-between">
                    <h1>Total (per {monthly? 'month' : 'year'})</h1>
                    <h1 className="text-indigo-500 font-bold text-xl items-center"> ${parseInt(selectedSubscription[1], 10) + cart.map(elem => parseInt(elem[1][2], 10)) } </h1>
                </div>
                <div id="buttons" className='flex justify-between mt-28'>
                    <Goback setCurrentStep={setCurrentStep} />
                    <NextStep onClick={() => setCurrentStep(pv => pv + 1)}/>
                </div>
            </div>
        </div>
    )
}
export default Step4