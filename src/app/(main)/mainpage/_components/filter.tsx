'use client'

import ProductStatus from "./filter-component/ProductStatus"
import BrandFilter from "./filter-component/BrandFilter"
import ColorFilter from "./filter-component/ColorFilter"
import CatogaryFilter from "./filter-component/CatogaryFilter"
import PriceFilter from "./filter-component/PriceFilter"
import { useState } from "react"

const Filter = () =>{


    const [filterState, setFilterState] = useState<boolean>(false)

    return <div className="w-min relative z-10 ">
        <button className={`hidden max-1080:flex text:2xl max-[980px]:text-sm `} onClick={()=>setFilterState(!filterState)}>Filter</button>
        <div className={`max-1080:absolute max-1080:hidden max-1080:bg-white top-10 left-0 z-10 max-[980px]:bg-white max-[980px]:border rounded-xl max-[980px]:bg-slate-100 ${filterState?'max-[980px]:flex-col':'max-[980px]:hidden'}`}>
            <PriceFilter />
            <CatogaryFilter />
            <ColorFilter />
            <BrandFilter />
            <ProductStatus />
        </div>
        </div>
}

export default Filter   