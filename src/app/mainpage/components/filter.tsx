

const Filter = () =>{
    return <div className="w-min">
            {/* filter by price */}
            <div className="pb-10 border-b border-b-gray-200">
                <h5>Widget price filter</h5>
                <div className="flex">
                    <div>
                        <p>Min price</p>
                        <div className="border rounded-xl py-2 px-3 w-[150px]">
                            <input type="text" className="w-full outline-none" value={0} />
                        </div>
                    </div>
                    <p className="flex items-end mb-3 mx-2">-</p>
                    <div>
                        <p>Min price</p>
                        <div className="border rounded-xl py-2 px-3 w-[150px]">
                            <input type="text" className="w-full outline-none" value={30} />
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
            {/* filter by product catogary */}
            <div className="py-10 border-b border-b-gray-200">
                <h5 className="mb-3 text-lg font-semibold">Product Catogary</h5>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-3">
                        <input type="checkbox" className="bg-red-500" id="fruits" />
                        <label htmlFor="fruits">Fruits & Vegitables</label>
                    </div>
                    <div className="flex gap-3">
                        <input type="checkbox" className="bg-red-500" id="baby" />
                        <label htmlFor="baby">Baby & Pregnancy</label>
                    </div>
                    <div className="flex gap-3">
                        <input type="checkbox" className="bg-red-500" id="beverages" />
                        <label htmlFor="beverages">Beverages</label>
                    </div>
                    <div className="flex gap-3">
                        <input type="checkbox" className="bg-red-500" id="meats" />
                        <label htmlFor="meats">Meats & Seafoods</label>
                    </div>
                    <div className="flex gap-3">
                        <input type="checkbox" className="bg-red-500" id="biscuits" />
                        <label htmlFor="biscuits">Biscuits & Snacks</label>
                    </div>
                    <div className="flex gap-3">
                        <input type="checkbox" className="bg-red-500" id="breads" />
                        <label htmlFor="breads">Breads & Bakery</label>
                    </div>
                    <div className="flex gap-3">
                        <input type="checkbox" className="bg-red-500" id="Breaksfast" />
                        <label htmlFor="Breaksfast">Breaksfast & Dairy</label>
                    </div>
                    <div className="flex gap-3">
                        <input type="checkbox" className="bg-red-500" id="Frozen" />
                        <label htmlFor="fruFrozenits">Frozen Foods</label>
                    </div>
                    <div className="flex gap-3">
                        <input type="checkbox" className="bg-red-500" id="Grocery" />
                        <label htmlFor="Grocery">Grocery & Staples</label>
                    </div>
                    <div className="flex gap-3">
                        <input type="checkbox" className="bg-red-500" id="Healthcare" />
                        <label htmlFor="Healthcare">Healthcare</label>
                    </div>
                    <div className="flex gap-3">
                        <input type="checkbox" className="bg-red-500" id="Household" />
                        <label htmlFor="Household">Household Needs</label>
                    </div>
                </div>
            </div>
            {/* filter by color */}
            <div className="w-full py-10 border-b border-b-gray-200">
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
            {/* filter by brands */}
            <div className="w-full py-10 border-b border-b-gray-200">
                <h5 className="mb-3 text-lg font-semibold">Filter by color</h5>
                <div className="w-full">
                    <div className="flex w-full justify-between">
                        <div className="flex gap-3">
                            <input type="checkbox" id="fresh"/>
                            <label htmlFor="fresh">Fresh</label>
                        </div>
                        <p className="text-gray-500">{'(1)'}</p>
                    </div>
                </div>
            </div>
            {/* product statuc */}
            <div className="w-full py-10 border-b border-b-gray-200">
                <h5 className="mb-3 text-lg font-semibold">product status</h5>
                <div className="w-full flex flex-col gap-2">
                    <div className="flex gap-3">
                        <input type="checkbox" id="instock"/>
                        <label htmlFor="instock">In Stock</label>
                    </div>
                    <div className="flex gap-3">
                        <input type="checkbox" id="onsale"/>
                        <label htmlFor="onsale">On Sale</label>
                    </div>
                </div>
            </div>
        </div>
}

export default Filter   