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
            <div className="flex justify-between max-w-full py-7 max-1280:py-4 max-[980px]:py-3 max-[540px]:flex-col gap-y-6 items-center">
                <div className="flex gap-10 max-[540px]:w-full max-[540px]:justify-between">
                    <h1 className="">
                        <a href="">
                            <Image  
                                    src={logo}
                                    // width={100}
                                    alt="Logo"
                                    className="w-[200px] max-1280:w-[150px] max-640:w-[100px] min-w-[100px]"/>
                        </a>
                    </h1>
                    <div className="flex max-640:hidden">
                        <div className="bg-gray-200 rounded-full  h-[60px] max-1280:h-[50px]  max-980:h-[40px] max-640:h-[30px] aspect-square flex items-center justify-center text-3xl   text-[24px] max-980:text-xl max-640:text-base">
                            <i className="fa fa-map-marker"></i>
                        </div>
                        <div className="max-[640px]:hidden max-1280:text-sm max-480:text-xs">
                            <p>Deliver To</p>
                            <p>All</p>
                        </div>
                    </div>
                </div>
                <div className='flex w-[50%]  bg-gray-200 items-center h-min max-980:hidden rounded-xl px-3  max-1080:w-[40%] max-1280:w-[45%]'>
                    <input type="text" className='w-[95%] bg-transparent h-full outline-none text-xl max-1080:text-base max-1280:text-lg' placeholder="Search for products, categories or brands..."/>
                    <div className="p-4 max-1280:p-3">
                        <i className="fa fa-search"></i>
                    </div>
                </div>
                <div className="flex gap-4 items-center  max-[540px]:w-full max-[540px]:justify-between">
                    <div  className="hidden max-980:flex">
                        <a href=""  className="flex flex-col items-center">
                            <div className="text-2xl max-[980px]:text-base max-1280:text-xl max-640:text-base">
                                <i className="fa fa-search"></i>
                            </div>
                            <p className="text-lg max-[980px]:text-sm max-1280:text-base max-640:text-sm  max-640:hidden">Search</p>
                        </a>
                    </div>
                    <div  className="flex">
                        <a href=""  className="flex flex-col items-center">
                            <div className="text-2xl max-[980px]:text-base max-1280:text-xl max-640:text-base">
                                <i className="fa fa-user-o"></i>
                            </div>
                            <p className="text-lg max-[980px]:text-sm max-1280:text-base max-640:text-sm  max-640:hidden">Account</p>
                        </a>
                    </div>
                    <div  className="flex">
                        <Link href="/wishlist"  className="flex flex-col items-center  relative">
                            <div className="text-2xl max-[980px]:text-base max-1280:text-xl max-640:text-base">
                                <i className="fa fa-heart-o"></i>
                            </div>
                            <p className="text-lg max-[980px]:text-sm max-1280:text-base max-640:text-sm  max-640:hidden">Wishlist</p>
                            <p className="flex bg-red-500 text-white w-5 items-center justify-center max-1280:text-sm rounded-full absolute right-1 top-[-10px] text-base max-786:text-sm max-640:text-xs max-640:right-[-10px]">{fav.length}</p>
                        </Link>
                    </div>
                    <div className="flex">
                        <a href=""  className="flex flex-col items-center">
                            <div className="text-2xl max-[980px]:text-base max-1280:text-xl max-640:text-base">
                                <i className="fa fa-shopping-cart"></i>
                            </div>
                            <p className="text-lg max-[980px]:text-sm max-1280:text-base max-640:text-sm  max-640:hidden">Your Cart</p>
                        </a>
                    </div>
                    <div className="hidden max-640:flex">
                        <a href=""  className="flex flex-col items-center">
                        <div className="text-2xl max-[980px]:text-base max-1280:text-xl max-640:text-base">
                            <i className="fa fa-bars"></i>
                        </div>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
}

export default MainHeader