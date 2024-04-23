

const ColorFilter = () =>{
    return  <div className="w-full py-10 border-b border-b-gray-200">
                <h5 className="mb-3 text-lg font-semibold">Filter by color</h5>
                <div className="w-full">
                    <div className="flex w-full justify-between">
                        <div className="flex">
                            <span className="w-[25px] aspect-square bg-[#81D742] rounded-full mr-2  ">
                            </span>
                            <p>Green</p>
                        </div>
                        <p className="text-gray-500">{'(1)'}</p>
                    </div>
                </div>
            </div>
}

export default ColorFilter