import Header from "@/components/includes/header/header"
import Footer from "@/components/includes/footer/footer"
import Description from "./_components/Description"
import Related from "./_components/Related"
import Detail from "./_components/Details"
import React, { useEffect } from "react"
import { Metadata } from "next"


export const metadata: Metadata = {
    title: 'Grogin | Product Page',
    description: 'this is grogin site main page',
  }

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