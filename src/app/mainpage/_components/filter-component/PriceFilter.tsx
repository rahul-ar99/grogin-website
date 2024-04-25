

const PriceFilter = () =>{
    return <div className="pb-10 border-b border-b-gray-200">
                <h5>Widget price filter</h5>
                <div className="flex">
                    <div>
                        <p>Min price</p>
                        <div className="border rounded-xl py-2 px-3 w-[120px]">
                            <input type="text" className="w-full outline-none" defaultValue={0} />
                        </div>
                    </div>
                    <p className="flex items-end mb-3 mx-2">-</p>
                    <div>
                        <p>Min price</p>
                        <div className="border rounded-xl py-2 px-3 w-[120px]">
                            <input type="text" className="w-full outline-none" defaultValue={30} />
                        </div>
                    </div>
                </div>
                <div>
                    <input type="range" className="w-full" />
                </div>
                
                <div className="flex justify-between items-center">
                    <p>Price: $0 - $30</p>
                    <button className="py-2 px-3 bg-[#E5E7EB] rounded-md">Filter</button>
                </div>
            </div>
}

export default PriceFilter