"use client"

import { useEffect, useState } from "react"

const PriceFilter = () =>{

    const [inputValue1, setInputValue1] = useState(2)
    const [inputValue2, setInputValue2] = useState(27)

    const [inputPercentage, setinputPercentage] = useState(0)

    const minValue = 5
    useEffect(()=>{
        console.log(inputValue1,'useEffect')

    },[inputValue1,inputValue2])

    const input1Fun = (element:number) =>{
        setInputValue1(element) 
        console.log(inputValue1, 'function')
        // const percentage:number = (inputValue1/30)*100
        setinputPercentage((inputValue1/30)*100)
    }
    const input2Fun = (element:number) =>{
        setInputValue2(element) 
        console.log(inputValue2)
    }

    const slideOne = () =>{
        // console.log(element.target.value)
    }

    return <div className="pb-10 border-b border-b-gray-200">
                <h5>Widget price filter</h5>
                <div className="flex">
                    <div>
                        <p>Min price</p>
                        <div className="border rounded-xl py-2 px-3 w-[120px]">
                            <input type="number" min={0} max={29} className="w-full outline-none" value={inputValue1}  onChange={(e)=>{input1Fun(parseInt(e.target.value))
                            console.log(inputValue1,'inLine')}}  />
                        </div>
                    </div>
                    <p className="flex items-end mb-3 mx-2">-</p>
                    <div>
                        <p>Min price</p>
                        <div className="border rounded-xl py-2 px-3 w-[120px]">
                            <input type="number" min={5} max={30} className="w-full outline-none" value={inputValue2} onChange={(e)=>input2Fun(parseInt(e.target.value))} />
                        </div>
                    </div>
                </div>
                <div id="slider" className="h-2 rounded-md bg-slate-500 relative">
                    <div id="progress" className={`h-2 left-[${inputPercentage}%] right-[25%] absolute rounded-md bg-sky-600 z-30`}></div>
                </div>
                <div className="relative">
                    <input type="range" id="range-min" className="w-full absolute top-[-8px] h-2  input-slider" min={0} value={inputValue1} max={30} onChange={(e)=>input1Fun(parseInt(e.target.value))} />
                    <input type="range" id="range-max" className="w-full absolute top-[8px] h-2  input-slider" min={0} value={inputValue2} max={30} onChange={(e)=>input2Fun(parseInt(e.target.value))} />
                </div>

               


                
                <div className="flex justify-between items-center mt-10">
                    <p>Price: $0 - $30</p>
                    <button className="py-2 px-3 bg-[#E5E7EB] rounded-md">Filter</button>
                </div>
            </div>
}

export default PriceFilter