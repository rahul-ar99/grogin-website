import { useState } from "react"

const TopBar = () =>{

    const [leftItems, setLeftItems] = useState<boolean>(false)
    return <div className="w-full border-b-gray-700 border-b max-[980px]:text-sm">
                <div className="wrapper">
                    <div className="flex justify-between py-3 max-[480px]:flex-col">
                        <div className="flex relative flex-wrap">
                            <div className={`flex gap-x-5 `}>
                                <a href="">About Us</a>
                                <a href="">My Account</a>
                                <a href="">Wishlist</a>
                            </div>
                            <span className="mx-3  max-[980px]:hidden">|</span>
                            <p>We deliver to you every day from <span>7:00 to 23:00</span></p>
                        </div>
                        <div className="">
                            <select name="language" id="languageSelect" className='bg-transparent'>
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                            </select>
                            <select name="money" id="moneyFormat" className="bg-transparent">
                                <option value="usd">USD</option>
                                <option value="inr">INR</option>
                            </select>
                            <a href="" className="whitespace-nowrap">Order Tracking</a>
                        </div>
                    </div>
                </div>
            </div>
}

export default TopBar