"use client"

const PriceFilter = () =>{

    const slideOne = () =>{
        // console.log(element.target.value)
    }

    return <div className="pb-10 border-b border-b-gray-200">
                <h5>Widget price filter</h5>
                <div className="flex">
                    <div>
                        <p>Min price</p>
                        <div className="border rounded-xl py-2 px-3 w-[120px]">
                            <input type="number" className="w-full outline-none" defaultValue={0} />
                        </div>
                    </div>
                    <p className="flex items-end mb-3 mx-2">-</p>
                    <div>
                        <p>Min price</p>
                        <div className="border rounded-xl py-2 px-3 w-[120px]">
                            <input type="number" className="w-full outline-none" defaultValue={30} />
                        </div>
                    </div>
                </div>
                <div id="slider" className="h-2 rounded-md bg-slate-500 relative">
                    <div id="progress" className="h-2 left-[25%] right-[25%] absolute rounded-md bg-sky-600"></div>
                </div>
                <div className="relative">
                    <input type="range" id="range-min" className="w-full absolute top-[-8px] h-2  input-slider" min={0} max={30} defaultValue={7.5} onChange={(e)=>console.log(e.target.value)} />
                    <input type="range" id="range-max" className="w-full absolute top-[-8px] h-2  input-slider" min={0} max={30} defaultValue={27.5} onChange={(e)=>console.log(e.target.value)} />
                </div>

               


                
                <div className="flex justify-between items-center">
                    <p>Price: $0 - $30</p>
                    <button className="py-2 px-3 bg-[#E5E7EB] rounded-md">Filter</button>
                </div>
            </div>
}

export default PriceFilter