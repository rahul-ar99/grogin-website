'use client'

import { useState } from "react"

const TopBar = () =>{

    const [leftItems, setLeftItems] = useState<boolean>(false)
    return <div className="w-full border-b-gray-700 border-b max-[980px]:text-sm">
                <div className="wrapper">
                    <div className="flex justify-between py-3 max-[480px]:flex-col  max-480:flex-col max-480:gap-y-2">
                        <div className="flex relative flex-wrap  max-1080:text-sm max-640:text-xs">
                            <div className='flex gap-x-5'>
                                <a href="" className="whitespace-nowrap">About Us</a>
                                <a href="" className="whitespace-nowrap">My Account</a>
                                <a href="" className="whitespace-nowrap">Wishlist</a>
                            </div>
                            <span className="mx-3  max-[980px]:hidden">|</span>
                            <p>We deliver to you every day from <span className="font-bold text-[#EA580C]">7:00 to 23:00</span></p>
                        </div>
                        <div className="flex gap-x-7 items-center  max-1080:text-sm max-640:gap-x-1  max-640:text-xs">
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