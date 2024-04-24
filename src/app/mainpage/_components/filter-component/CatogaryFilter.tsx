

const CatogaryFilter = () =>{
    return <div className="py-10 border-b border-b-gray-200">
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
                        <label htmlFor="Frozen">Frozen Foods</label>
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
}

export default CatogaryFilter