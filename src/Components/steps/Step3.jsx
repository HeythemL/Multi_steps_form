import { set } from "react-hook-form"
import AddOn from "../Add-on"
import Goback from "../GoBack"
import NextStep from "../NextStep"
const Step3 = ({setCurrentStep, setCart}) => {
    return (
        <div className='pt-8 pb-4 px-16 pr-4'>
            <div id="text">
                <h1 className='text-gray-800 font-bold text-4xl'>Pick add-ons</h1>
                <p className='text-gray-400 mt-2'>Add-ons help enhance your gaming experience</p>
            </div>
            <div id="add-ons" className="mt-10">
                <AddOn setCart={setCart} title={'Online service'} desc={'Access to multiplayer games'} price={'+$1/mo'} />
                <AddOn setCart={setCart} title={'Larger storage'} desc={'Extra 1TB of cloud storage'} price={'+$2/mo'} />
                <AddOn setCart={setCart} title={'Customizable profile'} desc={'Custom theme on your profile'} price={'+$2/mo'} />
            </div>
            <div id="buttons" className='flex justify-between mt-[5rem]'>
                <Goback setCurrentStep={setCurrentStep} />
                <NextStep onClick={() => setCurrentStep(pv => pv + 1)}/>
            </div>
        </div>
    )
}
export default Step3