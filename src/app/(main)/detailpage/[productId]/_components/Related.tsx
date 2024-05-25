'use client'

import Link from "next/link"
import Image from "next/image"
import AllData from '../../../../../../public/assets/json/addData.json'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToFav, removeFromFav } from "@/app/redux/favorite/page"
import { RootState } from "@/app/redux/store/page"


const Related = () =>{

    
    // import redux item for wishlist
    const fav = useSelector((state:RootState)=>state.favorite.value)
    const dispatch = useDispatch()


    // create a array for related products in single page
    const [relatedProducts, setRelatedProducts] = useState<any>([])


    // add first 5 element in json file 
    useEffect(()=>{
        const element = []
        for (let index = 0; index < 5; index++) {
            element.push(AllData[index])
        }
        setRelatedProducts(element)
    },[])

    return <>
                <h4 className="text-2xl font-bold mb-4">Related Products</h4>
                <div className="flex flex-wrap ">
                    {relatedProducts.map((value:any,index:number)=>{
                            return <div className="w-[20%] border max-1080:w-[25%] max-640:w-[33%] py-3 max-480:w-[50%]" key={index}>
                            <Link href={`/detailpage/${index+1}`}>
                                    <div className="relative">
                                        <div>   
                                            <Image src={require(`../../../../../../public/assets/images/products/images_${(value.product_id%16)+1}.png`)} alt="product" />
                                        </div>
                                        <div>
                                        <div className="absolute top-3 right-3 z-40 cursor-pointer" onClick={(e)=>{
                                            e.preventDefault()
                                            fav.indexOf(value.product_id)== -1?dispatch(addToFav(value.product_id)):dispatch(removeFromFav(value.product_id))
                                        }} id="likeButton"
                                        >
                                            <i className={fav.indexOf(value.product_id)!=-1?'fa fa-heart text-red-500':'fa fa-heart-o z-10' } style={{fontSize: '24px'}}></i>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="pl-2">
                                        <h6 className="mb-3 h-10">{value.product_name}</h6>
                                        <div className="flex gap-2 items-center max-980:text-[15px] max-640:text-sm">
                                            <div className="flex gap-1">
                                            <i className={value.rating<=0?`fa fa-star-o`:'fa fa-star'}></i>
                                            <i className={value.rating<=1?`fa fa-star-o`:'fa fa-star'}></i>
                                            <i className={value.rating<=2?`fa fa-star-o`:'fa fa-star'}></i>
                                            <i className={value.rating<=3?`fa fa-star-o`:'fa fa-star'}></i>
                                            <i className={value.rating<=4?`fa fa-star-o`:'fa fa-star'}></i>
                                            </div>
                                            <p>{value.no_of_person_reviewed}</p>
                                        </div>
                                        <div className="flex gap-3 items-center my-3">
                                            <p className="text-2xl text-[#DC2626] font-bold max-980:text-xl max-640:text-lg">${parseFloat((value.original_price-(value.original_price*value.discount/100)).toFixed(2))}</p>
                                            <span className="text-xl max-980:text-lg max-640:text-base"><del>${value.original_price}</del> </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                        <div className={`flex w-[40px] aspect-square justify-center items-center  max-980:text-sm max-980:w-[35px] ${value.in_stock?'bg-[#16A34A]':'bg-red-500'} rounded-xl`}>
                                                <i className="fa fa-shopping-cart text-white"></i>
                                            </div>
                                            <p className="max-980:text-[15px] max-640:text-sm">{value.in_stock?'IN STOCK':'OUT OF STOCK'}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                    })}
                    
                </div>
            </>
}

export default Related