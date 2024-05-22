

const ProductStatus = () =>{
    return  <div className="w-full py-10">
                <h5 className="mb-3 text-lg font-semibold">product status</h5>
                <div className="w-full flex flex-col gap-2">
                    <div className="flex gap-3">
                        <input type="checkbox" id="instock"/>
                        <label htmlFor="instock">In Stock</label>
                    </div>
                    <div className="flex gap-3">
                        <input type="checkbox" id="onsale"/>
                        <label htmlFor="onsale">Out of Stock</label>
                    </div>
                </div>
            </div>
}

export default ProductStatus