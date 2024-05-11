import { useState } from "react"

const BottomHeader = () =>{

    const [menuState, setMenuState] = useState<boolean>(false)



    return <div className="w-full border-b border-b-gray-200">
        <div className="wrapper">
            <div className="w-full flex justify-between font-bold py-4 relative">
                <button className="hidden border py-1 px-2 rounded-lg bg-slate-200 max-[980px]:flex" onClick={()=>setMenuState(!menuState)}>Menu</button>
                <nav className={`flex ${menuState?'max-[980px]:hidden':'flex'} gap-5 top-5 left-14 max-[980px]:p-10 max-[980px]:border z-20 max-[980px]:bg-white gap-y-3 max-[980px]:absolute max-[980px]:flex-col`}>
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
                <div className="flex gap-5 max-[980px]:text-sm max-[480px]:hidden">
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