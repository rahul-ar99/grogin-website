'use client'

import Image from "next/image"
import AllData from '../../../../../../public/assets/json/addData.json'
import { useEffect, useState } from "react"
import { RootState } from "@/app/redux/store/page"
import { addToFav, removeFromFav } from "@/app/redux/favorite/page"
import { UseDispatch, useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import MainImage from '../../../../../../public/assets/images/stair.jpg'
import Magnifier from "./ImageZoom"
import Swal from "sweetalert2"



const Detail= ({productId}:{productId:number}) =>{

    const stairImage = './stair.jpg'


    const [zoomState, setZoomState] = useState(false)

    const [userSelected, setUserSelected] = useState<any>({})

    const [isLoading, setIsLoading] = useState<any>(false)

    const [balanceStock, setBalanceStock] =  useState<any>(10)
     
    // userSelected is import data from json and 
    useEffect(()=>{

        for (let index = 0; index < AllData.length; index++) {
            if(AllData[index].product_id == productId){
                setUserSelected(AllData[index])
                break
            }  
        }
    })



    const fav = useSelector((state:RootState)=>state.favorite.value)


    const dispatch = useDispatch()



    // count the number of quantity
    const [noOfItems, setNoOfItems] = useState(1)


    useEffect(()=>console.log(fav,userSelected.category, productId))

    // counter
    const futureDate = new Date('2024-07-28T00:00:00');
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = futureDate.getTime() - now.getTime();
  
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
  
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      } else {
        // If the future date is in the past, reset everything to 0
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    };
  
    useEffect(() => {
      const timerId = setInterval(calculateTimeLeft, 1000);
      console.log(userSelected.category)

      setTimeout(()=>setIsLoading(true),400)
  
      // Clear interval on component unmount
      return () => clearInterval(timerId);
    }, []);

    const buynowFun = ()=>{
        const totalPrice = parseFloat((userSelected.original_price-(userSelected.original_price*userSelected.discount/100)).toFixed(2))
        if (balanceStock==0){
            Swal.fire({
                title: `Sorry Out of Stock`,
                text: `We will notify you when the stock is increase`,
                icon: "error",
                showConfirmButton: false,
                timer: 1500
              
            });
        }else{
            Swal.fire({
                title: `You ordered ${noOfItems} item`,
                text: `Total price is ${totalPrice * noOfItems}`,
                icon: "success",
                showConfirmButton: false,
                timer: 1500
              
                });
                const balance = balanceStock - noOfItems
                setBalanceStock(balance)
                if(balance==0){
                    setNoOfItems(0)
                }else{
                    setNoOfItems(1)
                }
        }

    }


    return(<>
        {
            isLoading ?<div className="flex justify-between py-5 max-1080:flex-col">
            <div className="min-w-[50%]">
                <div className="w-full h-[500px] max-1080:h-auto">
                    <div className="w-full relative">
                        <div className="w-full">
                            <div className="w-full  flex justify-center max-1280:hidden">
                                <Magnifier
                                    src={`/assets/images/products/${userSelected.category+((productId%16))}.png`}
                                    width={500}
                                    height={500}
                                    leftAbsolute={600}
                                    magnifierHeight={600}
                                    magnifierWidth={600}
                                    zoomLevel={3}
                                />
                            </div>
                            <div className="w-full  hidden max-1280:flex justify-center max-1080:hidden">
                                <Magnifier
                                    src={`/assets/images/products/${userSelected.category+((productId%16))}.png`}
                                    width={500}
                                    height={500}
                                    leftAbsolute={500}
                                    magnifierHeight={500}
                                    magnifierWidth={500}
                                    zoomLevel={3}
                                />
                            </div>
                            <div className="w-full justify-center hidden max-1080:flex">
                                <Image className="w-full" src={require(`../../../../../../public/assets/images/products/${userSelected.category+((productId%16)+1)}.png`)} alt="itemImage" />

                            </div>
                        </div>
                        <div className="absolute top-2 left-2">
                            <p className="bg-red-500 text-white font-semibold rounded-3xl text-xs w-min py-1 px-2 mb-2">{userSelected.discount}%</p>
                            {
                                userSelected.isOrganic &&<p className="bg-green-500 text-white font-semibold rounded-3xl text-xs w-min py-1 px-2">Organic</p>
                            }
                        </div>
                        {/* <div className="absolute bottom-10 left-2 w-20" onClick={()=>setZoomState(true)}>
                            <Image src={require('../../../../../../public/assets/images/zoom.png')} alt="zoom" />
                        </div> */}
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <div className="flex gap-2">
                        <div className="w-20">
                            <Image src={require(`../../../../../../public/assets/images/products/images_${(productId%16)}.png`)} alt="itemImage" />
                        </div>
                        <div className="w-20">
                            <Image src={require(`../../../../../../public/assets/images/products/images_${(productId%16)}.png`)} alt="itemImage" />
                        </div>
                        <div className="w-20">
                            <Image src={require(`../../../../../../public/assets/images/products/images_${(productId%16)}.png`)} alt="itemImage" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="head border-b pb-3">
                    <h4 className="text-[40px] font-bold max-980:text-3xl">{userSelected.product_name}</h4>
                        <div className="flex gap-2 items-center font-bold max-[980px]:text-xl">
                            <div className="flex gap-2 items-center" >
                                <div className=" max-640:text-sm gap-2">
                                    <i className={`fa fa-star ${userSelected.rating <=0?'text-[#D1D5DB]':'text-[#FACC15]'}`}></i>
                                    <i className={`fa fa-star ${userSelected.rating <=1?'text-[#D1D5DB]':'text-[#FACC15]'}`}></i>
                                    <i className={`fa fa-star ${userSelected.rating <=2?'text-[#D1D5DB]':'text-[#FACC15]'}`}></i>
                                    <i className={`fa fa-star ${userSelected.rating <=3?'text-[#D1D5DB]':'text-[#FACC15]'}`}></i>
                                    <i className={`fa fa-star ${userSelected.rating <=4?'text-[#D1D5DB]':'text-[#FACC15]'}`}></i>
                                </div>
                                <p className="py-[2px] px-1 border rounded-lg max-640:text-sm">{userSelected.rating}</p>
                                <p className=" max-640:text-sm">{userSelected.no_of_person_reviewed}</p>
                            </div>
                            <p>|</p>
                            <div>
                                <p className=" max-640:text-sm">SKU:{userSelected.product_code}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-7 max-640:mt-4">
                        <div className="mb-5 max-640:mb-2">
                        <p className="text-sm  max-[980px]:text-xm">{userSelected.short_desc}</p>
                        <div className="flex items-baseline gap-1 my-5">
                            <p className="text-3xl text-[#DC2626] font-bold max-640:text-2xl">${parseFloat((userSelected.original_price-(userSelected.original_price*userSelected.discount/100)).toFixed(2))} </p>
                            <del className="text-xl max-980:text-lg max-640:text-base max-480:text-sm">${userSelected.original_price}</del>
                        </div>
                        <button className="py-3 px-7  bg-[#16A34A] rounded-xl text-[#ffffff] font-semibold  max-640:rounded-lg max-640:text-sm max-640:py-2  max-640:px-4">Order on Whatsapp</button>
                    </div>
                    <div className="flex items-center py-3 px-4 gap-5 max-640:py-1 max-640:px-2 max-640:gap-2  bg-[#FFEDD5] border border-[#FED7AA] rounded-lg max-480:flex-col max-480:items-start max-480:w-min ">
                        <p className="text-[#EA580C] font-bold text-lg  max-980:text-base max-640:text-sm">Special Offer: </p>
                        <div className="flex items-center gap-1 max-640:text-sm">
                            <p className="w-[40px] aspect-square flex items-center justify-center bg-[#FFEDD5] border border-[#FED7AA] rounded-lg text-[#C2410C] font-semibold  max-[980px]:text-sm">{days}</p>
                            <p className="w-[40px] aspect-square flex items-center justify-center bg-[#FFEDD5] border border-[#FED7AA] rounded-lg text-[#C2410C] font-semibold  max-[980px]:text-sm">{hours}</p>
                            <p className="w-[40px] aspect-square flex items-center justify-center bg-[#FFEDD5] border border-[#FED7AA] rounded-lg text-[#C2410C] font-semibold  max-[980px]:text-sm">{minutes}</p>
                            <p>:</p>
                            <p className="w-[40px] aspect-square flex items-center justify-center bg-[#FFEDD5] border border-[#FED7AA] rounded-lg text-[#C2410C] font-semibold  max-[980px]:text-sm">{seconds}</p>
                        </div>
                        <p className="text-[#6B7280]  max-640:text-sm">Remains until the end of the offer.</p>
                    </div>
                    <div className="pt-3">
                        <p className="capitalize">balance stocks: {balanceStock}</p>
                    </div>
                    <div className="flex items-center gap-[10px] my-4 max-[980px]:flex-col max-[980px]:items-start">
                        <div className="flex items-center h-full border border-[#D1D5DB] rounded-lg py-3  max-640:py-2">
                            <button className="h-full px-5 max-640:px-3" onClick={()=>{
                                if(noOfItems>1){
                                    setNoOfItems(noOfItems-1)}
                                }
                            }>-</button>
                            <p className=" max-640:text-sm">{noOfItems}</p>
                            <button className="h-full px-5 max-640:px-3 " onClick={()=>{
                                    if(balanceStock>noOfItems){
                                        setNoOfItems(noOfItems+1)
                                    }
                                    
                                
                                }}>+</button>
                        </div>
                        <div className="h-fullflex items-center text-[#ffffff] bg-[#16A34A] rounded-lg">
                                {/* <i className="fa fa-"></i> */}
                            <button className="font-bold px-9  text-base whitespace-nowrap py-3   max-640:py-2   max-640:px-4 max-640:text-sm">Add to cart</button>
                        </div>
                        <div className="h-full flex items-center text-[#ffffff] bg-[#212529] rounded-lg">
                                {/* <i className="fa fa-"></i> */}
                            <button className="font-bold  px-9 text-base whitespace-nowrap  py-3   max-640:py-2   max-640:px-4 max-640:text-sm" onClick={buynowFun}>Buy Now</button>
                        </div>
                    </div>
                    <div>
                        {/* <p>Total Price: {parseFloat(((userSelected.original_price-(userSelected.original_price*userSelected.discount/100))*noOfItems).toFixed(2))} </p> */}
                    </div>
                </div>
                <div className="">
                    <div className="border border-[#E5E7EB] rounded-xl my-5">
                        <div className="flex p-5 gap-10 border-b items-center">
                            <div className="text-3xl max-786:text-xl">
                                <i className="fa fa-shopping-cart"></i>
                            </div>
                            <p className="text-[#6B7280] max-786:text-sm"><span className="text-lg  max-640:text-xm max-980:text-base font-semibold text-[#5a5f69]">Payment.</span>Payment upon receipt of goods, Payment by card in the department, Google Pay, Online card, -5% discount in case of payment</p>
                        </div>
                        <div className="flex p-5 gap-10 items-center">
                            <div className="text-3xl max-786:text-xl">
                                <i className="fa fa-shopping-cart"></i>
                            </div>
                            <p className="text-[#6B7280] max-786:text-sm"><span className="text-lg  max-640:text-xm max-980:text-base font-semibold text-[#5a5f69]">Warranty.</span> The Consumer Protection Act does not provide for the return of this product of proper quality.</p>
                        </div>
                    </div>
                    <div className="flex gap-6 max-480:flex-col">
                        <div className="flex items-center gap-2 ">
                            <div className="w-[50px] aspect-square flex justify-center items-center border border-[#E5E7EB] rounded-xl text-2xl whitespace-nowrap max-786:text-xl max-640:text-lg max-640:w-[40px]" onClick={()=>{
                                // const productIdInt = parseInt(productId)
                                // fav.indexOf(parseInt(productId))==-1?dispatch(addToFav(parseInt(productId))):dispatch(removeFromFav(parseInt(productId)))
                                fav.indexOf(userSelected.product_id)==-1?dispatch(addToFav(userSelected.product_id)):dispatch(removeFromFav(userSelected.product_id))
                            }}>
                                <i className={`fa fa-heart ${fav.indexOf(userSelected.product_id)!=-1?'text-red-500':'text-black'}`}></i>
                            </div>
                            <p className="text-lg  whitespace-nowrap max-1280:text-base max-640:text-sm ">{fav.indexOf(userSelected.product_id)!=-1?'Remove From Wishlist':'Add to Wishlist'}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-[50px] aspect-square flex justify-center items-center border border-[#E5E7EB] rounded-xl text-2xl max-786:text-xl max-640:text-lg max-640:w-[40px] ">
                                <i className="fa fa-heart"></i>
                            </div>
                            <p className="text-lg whitespace-nowrap max-1280:text-base max-640:text-sm">Share This Product</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-[50px] aspect-square flex justify-center items-center border border-[#E5E7EB] rounded-xl text-2xl  max-786:text-xl max-640:text-lg max-640:w-[40px] ">
                                <i className="fa fa-heart "></i>
                            </div>
                            <p className="text-lg whitespace-nowrap max-1280:text-base max-640:text-sm">Compare</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        :<div className="w-full h-[800px] flex justify-center items-center">
            <p>loading...</p>

        </div>
                
        }
    </>
                    )
                }
                
                export default Detail