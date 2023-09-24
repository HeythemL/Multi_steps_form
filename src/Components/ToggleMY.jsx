import { useState } from "react"
import React from "react";
import {Switch} from "@nextui-org/react";
const Toggle = ({monthly, yearly, setMonthly, setYearly}) => {
    return (
        <div className="bg-gray-50 flex items-center justify-center mt-4 p-3 rounded-lg">
            <span className={`transition-all duration-500 mx-3 ${monthly ? 'font-bold' : 'font-normal text-gray-500'}`}>Monthly</span>
            <Switch onChange={() => {
                setMonthly(pv => !pv)
                setYearly(pv => !pv)
            }}></Switch>
            <span className={`transition-all duration-500 mx-2 ${yearly ? 'font-bold' : 'font-normal text-gray-500'}`}>Yearly</span>
        </div>
    )
}
export default Toggle
