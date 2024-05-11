'use client'

import Header from "@/components/includes/header/header"
import Footer from "@/components/includes/footer/footer"
import Description from "./_components/Description"
import Related from "./_components/Related"
import Detail from "./_components/Details"
import AllData from '../../../../../public/assets/json/addData.json'
import React, { useEffect } from "react"


const ProductDetailPage = ({params}:{params:{productId:any}}) =>{

    // useEffect(()=>{
    //     console.log(params.productId)
    //     console.log(AllData[params.productId-1])
    // })
    return <div>
                <Header />
                <div className="wrapper">
                    {/* <p>this is product Detail page {params.productId}</p> */}
                    <Detail productId={params.productId} />
                    <Description productId={params.productId} />
                    <Related />
                </div>
                <Footer />
            </div>
}

export default ProductDetailPage