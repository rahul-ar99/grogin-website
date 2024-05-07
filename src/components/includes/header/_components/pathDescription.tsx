'use client'

import {useSelector } from "react-redux"
import { RootState } from "@/app/redux/store/page"
import { useEffect } from "react"


const PathDescription = () =>{

    // const fav = useSelector((state:RootState)=>state.favorite.value)
    // useEffect(()=>console.log(fav))


    return <div className="w-full">
        <div className="wrapper">
            <div className="w-full py-3 text-black flex gap-4">
                {/* <p>{fav}</p> */}
                <p className="text-gray-500">Home {'>'}</p>
                <span>Shop</span>

            </div>

        </div>
    </div>
}

export default PathDescription