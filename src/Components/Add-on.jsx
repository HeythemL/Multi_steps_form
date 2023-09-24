import React, { useState } from "react";
import {Checkbox} from "@nextui-org/react";

const AddOn = ({title, desc, price, setCart}) => {
    const [checked, setChecked] = useState(false);
    return (
        <div onClick={() => {
            setChecked(pv => ! pv);
            setCart(pv => [...pv,[title, price]])
        }} className="border-2 border-gray-600 text-sm rounded-lg mt-4 flex items-center w-[27rem] text-gray-700 p-5 bg-gray-50 cursor-pointer hover:bg-transparent">
            <Checkbox isSelected = {checked}></Checkbox>
            <div className="flex justify-between items-center w-full">
                <div id="text" className="ml-2">
                    <h1 className="font-bold"> {title} </h1>
                    <p className="text-gray-400"> {desc} </p>
                </div>
                <h1 className="text-indigo-600 font-semibold tracking-wider"> {price} </h1>
            </div>
        </div>
    )
}
export default AddOn