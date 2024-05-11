'use client'

import Image from "next/image"
import logo from '../../../../../public/assets/images/logo.png'
import { useSelector } from "react-redux"
import { RootState } from "@/app/redux/store/page"
import Link from "next/link"
import { useState } from "react"

const MainHeader = () =>{

    const fav = useSelector((state:RootState)=>state.favorite.value)

    const [asdf, setasdf] = useState(false)

    return <div className="w-full border-b border-b-gray-500">
        <div className="wrapper">
            <div className="flex justify-between max-w-full py-7 max-[980px]:py-3 max-[540px]:flex-col gap-y-6">
                <div className="flex gap-10 max-[540px]:w-full max-[540px]:justify-between">
                    <h1>
                        <a href="">
                            <Image  
                                    src={logo}
                                    width={200}
                                    alt="Logo"
                                    className="max-[980px]:w-[150px] max-[640px]:w-[100px] min-w-[100px]"/>
                        </a>
                    </h1>
                    <div className="flex">
                        <div className="bg-gray-200 rounded-full  h-[60px] max-[980px]:h-[40px] aspect-square flex items-center justify-center text-3xl max-[980px]:text-xl">
                            <i className="fa fa-map-marker"></i>
                        </div>
                        <div className="max-[640px]:hidden">
                            <p>Deliver To</p>
                            <p>All</p>
                        </div>
                    </div>
                </div>
                <div className='flex w-[50%]  bg-gray-200 items-center rounded-xl px-3 max-[980px]:hidden'>
                    <input type="text" className='w-[95%] bg-transparent h-full outline-none text-xl' placeholder="Search for products, categories or brands..."/>
                    <div className="p-4">
                        <i className="fa fa-search" style={{fontSize: '24px'}}></i>
                    </div>
                </div>
                <div className="flex gap-4 items-center  max-[540px]:w-full max-[540px]:justify-between">
                    <div>
                        <a href="#"  className="flex flex-col items-center">
                            <div className="text-2xl max-[980px]:text-base">
                                <i className="fa fa-search"></i>
                            </div>
                            <p className="text-lg max-[980px]:text-sm">Search</p>
                        </a>
                    </div>
                    <div>
                        <a href=""  className="flex flex-col items-center">
                            <div className="text-2xl max-[980px]:text-base">
                                <i className="fa fa-user-o"></i>
                            </div>
                            <p className="text-lg max-[980px]:text-sm">Account</p>
                        </a>
                    </div>
                    <div>
                        <Link href="/wishlist"  className="flex flex-col items-center  relative">
                            <div className="text-2xl max-[980px]:text-base">
                                <i className="fa fa-heart-o"></i>
                            </div>
                            <p className="text-lg max-[980px]:text-sm">Wishlist</p>
                            <p className="flex bg-red-500 text-white w-5 items-center justify-center rounded-full absolute right-1 top-[-10px] text-base">{fav.length}</p>
                        </Link>
                    </div>
                    <div>
                        <a href=""  className="flex flex-col items-center">
                        <div className="text-2xl max-[980px]:text-base">
                            <i className="fa fa-shopping-cart"></i>
                        </div>
                            <p className="text-lg max-[980px]:text-sm">Your Cart</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default MainHeader