import arcadeIcon from '../../images/icon-arcade.svg'
import advancedIcon from '../../images/icon-advanced.svg'
import proIcon from '../../images/icon-pro.svg'
import Card from '../card'
import Toggle from '../ToggleMY'
import NextStep from '../NextStep'
import Goback from '../GoBack'
import { useState } from 'react'
const Step2 = ({setCurrentStep, selectedSubscription, setSelectedSubscription, monthly, yearly, setMonthly, setYearly}) => {
    
    return (
        <div className='py-8 pb-4 px-16 text-sky-900'>
            <div id="text">
                <h1 className='font-bold text-4xl'>Personal info</h1>
                <p className='text-gray-400 mt-2'>Please provide your name, email address, and phone number.</p>
            </div>
            <div id="cards" className='flex gap-x-6 mt-10'>
                <Card icon={arcadeIcon} title={"Arcade"} price={monthly ? "$9/mo" : "$90/yr"} isSelected={selectedSubscription[0] === 'Arcade'}
                    onClick={() => setSelectedSubscription(['Arcade', 9])}/>
                <Card icon={advancedIcon} title={"Advanced"} price={monthly ? "$12/mo" : "$120/yr"} isSelected={selectedSubscription[0] === 'Advanced'}
                    onClick={() => setSelectedSubscription(['Advanced', 12])}/>
                <Card icon={proIcon} title={"Pro"} price={monthly ? "$15/mo" : "$150/yr"} isSelected={selectedSubscription[0] === 'Pro'}
                    onClick={() => setSelectedSubscription(['Pro', 15])}/>
            </div>
            <Toggle monthly={monthly} yearly={yearly} setMonthly={setMonthly} setYearly={setYearly} />
            <div id="buttons" className='flex justify-between mt-28'>
                <Goback setCurrentStep={setCurrentStep} />
                <NextStep onClick={() => setCurrentStep(pv => pv + 1)}/>
            </div>
        </div>
    )
}
export default Step2