
const BottomHeader = () =>{





    return <div className="w-full border-b border-b-gray-200">
        <div className="wrapper">
            <div className="w-full flex justify-between font-bold py-4">
                <nav className="flex gap-5">
                    <select name="" id="" className="bg-transparent">
                        <option value="home">Home</option>
                        <option value="about">About</option>
                    </select>
                    <select name="" id="" className="bg-transparent">
                        <option value="shop">Shop</option>
                        <option value="products">Prod</option>
                    </select>
                    <p className="">Fruits & Vegitables</p>
                    <p className="">Bevarages</p>
                    <p className="">Blog</p>
                    <p className="">Contact</p>
                </nav>
                <div className="flex gap-5">
                    <select name="" id="" className="bg-transparent">
                        <option value="trending">Trending Products</option>
                        <option value="features">Featured Products</option>
                    </select>
                    <select name="" id="" className="bg-transparent">
                        <option value="almost">Almost Finished sale</option>
                        <option value="fully">Fully Finished</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
}

export default BottomHeader