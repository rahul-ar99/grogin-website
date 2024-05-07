'use client'

import Image from "next/image"
import { useSelector } from "react-redux"
import { RootState } from "@/app/redux/store/page"
import Link from "next/link"

const wishlist = ()=>{

    const fav = useSelector((state:RootState)=>state.favorite.value)

    return <>
    <div className="flex flex-wrap">
        <p>{fav}</p>
        {fav.map((value:number, index:number)=>{
                return <div className="w-[20%] h-[420px] border" key={index}>
                  <Link href={`detailpage/${value}`} className="cursor-default">
                        <div className="bg-red-400 relative">
                            <div>   
                                <Image src={require('../../../../public/assets/images/product_1.jpg')} alt="product" />
                            </div>
                            <div>
                                <div className="absolute top-3 right-3 z-40 cursor-pointer" onClick={(e)=>{
                                    e.preventDefault()
                                    // handleLikeClick(index)
                                    // fav.indexOf(value)== -1?dispatch(addToFav(value)):dispatch(removeFromFav(value))
                                    }} id="likeButton"
                                    >
                                    {/* <i className={likes[index]?'fa fa-heart t   ext-red-500':'fa fa-heart-o z-10' } style={{fontSize: '24px'}}></i> */}
                                    <i className={fav.indexOf(value)!=-1?'fa fa-heart text-red-500':'fa fa-heart-o z-10' } style={{fontSize: '24px'}}></i>
                                    
                                </div>

                            </div>
                        </div>
                        <div className="pl-2">
                            <h6 className="mb-3">Yellow Potatoes Whole Fresh, 5l`b Bag</h6>
                            <div className="flex gap-2">
                                <div className="flex gap-1">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                </div>
                                <p>3</p>
                            </div>
                            <div className="flex gap-3 items-center my-3">
                                <p className="text-2xl text-[#DC2626] font-bold">$0.50 </p>
                                <span className="text-xl"><del>$1.99</del> </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex w-[40px] aspect-square justify-center items-center bg-[#16A34A] rounded-xl">
                                    <i className="fa fa-shopping-cart text-white"></i>
                                </div>
                                <p>IN STOCK</p>
                            </div>
                        </div>
                     </Link>
                    </div>
        })}
        
    </div>
</>
}

export default wishlist