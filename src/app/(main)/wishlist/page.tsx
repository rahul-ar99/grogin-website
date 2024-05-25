'use client'

import Image from "next/image"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { RootState } from "@/app/redux/store/page"
import { addToFav, removeFromFav } from "@/app/redux/favorite/page"
import Link from "next/link"
import { useEffect, useState } from "react"
import AllData from '../../../../public/assets/json/addData.json'
import Header from '@/components/includes/header/header'
import Footer from "@/components/includes/footer/footer"
import { SideBySideMagnifier } from "react-image-magnifiers"



interface Item {
    id: number;
    name: string;
    // Other properties
}

const wishlist = ()=>{

    const stairImage = './stair.jpg'

    const dispatch = useDispatch()


    const fav = useSelector((state:RootState)=>state.favorite.value)

    const [favItems, setFavItems] = useState<Item[]>([])

    const [isLoading, setIsLoading] = useState<boolean>(false)


    const favFunction = ()=>{
        const newFavItems:any = AllData.map((AllDataValue)=>{
            if(fav.indexOf(AllDataValue.product_id ) != -1){
                return AllDataValue
            }

        })
        setFavItems(newFavItems)
    }
    useEffect(()=>{
        favFunction()
        setTimeout(() => {
            setIsLoading(true)
        }, 1000);
        console.log(fav)
        
    },[fav])

    return <>

    <Header />
    <div className="wrapper">
        <h3 className="text-3xl font-bold">WishList</h3>
        <div className="w-[50%]">
            <Image className="example-3" src={require('./stair.jpg')} alt="asdf" />
{/*         
        <SideBySideMagnifier
                                imageSrc={"./stair.jpg"}
                                largeImageSrc="./stair.jpg"
                                alwaysInPlace={false}
                                switchSides={false}
                                fillAvailableSpace={false}
                                fillAlignTop={true}
                                fillGapLeft={10}
                                fillGapRight={10}
                                fillGapTop={10}
                                fillGapBottom={10}
                                zoomContainerBorder="1px solid #d4d4d4"
                                zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
                                overlayOpacity={0.6}
                                overlayBoxOpacity={0.8}
                            /> */}
        </div>
    <div className="flex flex-wrap min-h-[500px]">
        {favItems.length !=0 ?<>
        {favItems.map((value:any, index:number)=>{
            if(value!=undefined){

            return <div className="w-[20%] border max-98-:w-[25%] max-786:w-[33%] py-3 max-640:w-[50%] max-[420px]:w-full" key={index}>
                  <Link href={`/detailpage/${value.product_id}`} className="cursor-default">
                        <div className=" relative">
                            <div>   
                                <Image className="example-3" src={require(`../../../../public/assets/images/products/images_${(value.product_id%16)+1}.png`)} alt="product" />
                            </div>
                            <div>
                                <div className="absolute top-3 right-3 z-40 cursor-pointer" onClick={(e)=>{
                                    e.preventDefault()
                                    // handleLikeClick(index)
                                    fav.indexOf(value.product_id)== -1?dispatch(addToFav(value.product_id)):dispatch(removeFromFav(value.product_id))
                                }} id="likeButton"
                                >
                                    {/* <i className={likes[index]?'fa fa-heart t   ext-red-500':'fa fa-heart-o z-10' } style={{fontSize: '24px'}}></i> */}
                                    <i className={fav.indexOf(value.product_id)!=-1?'fa fa-heart text-red-500':'fa fa-heart-o z-10' } style={{fontSize: '24px'}}></i>
                                    
                                </div>

                            </div>
                        </div>
                        <div className="pl-2">
                            <h6 className="mb-3 h-10">{value.product_name}</h6>
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
            }

        })}
        </>:<>
            <div className="wrapper min-h-[500px]">
                <div className="flex justify-center items-center h-full">
                    <p className="text-3xl font-bold capitalize">no item selected</p>
                </div>
            </div>
        </>}
        
    </div>
    </div>
        <Footer />
</>
}

export default wishlist