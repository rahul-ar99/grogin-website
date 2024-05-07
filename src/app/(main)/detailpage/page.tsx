"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { RootState } from "../../redux/store/page"
import { addToFav, removeFromFav } from "../../redux/favorite/page"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import AllData from '../../../../public/assets/json/addData.json'
import { useAppContext } from "@/app/context/MyContext"


interface Product{

    id:number;
    name:string;
    imageUrl:string;
    price:number;
    discountPrice:number;
    rating:number;
    inStock:boolean;
}

const DetailPage= () =>{


    const fav = useSelector((state:RootState)=>state.favorite.value)

    const dispatch = useDispatch()

    const [likes, setLikes] = useState<boolean[]>(Array(16).fill(false))


    // like icon color change
    const handleLikeClick = (index:number) => {
        const updatedLikes = [...likes];
        updatedLikes[index] = !updatedLikes[index];
        setLikes(updatedLikes);
    }



    const { 
        fruits,setfruits, 
        baby,setbaby, 
        beverages,setbeverages, 
        meats,setmeats, 
        biscuits,setbiscuits, 
        breads,setbreads, 
        breaksfast,setbreaksfast, 
        frozen,setfrozen, 
        grocery,setgrocery, 
        healthcare,sethealthcare, 
        household,sethousehold,
    }  = useAppContext();

    const stateArr = [fruits, baby, beverages, meats, biscuits, breads, breaksfast, frozen, grocery, healthcare, household]

    const [selectFilterState, setSelectedFilterState] = useState([])

    const [mappingArr, setMappingArr] = useState(AllData)

    const [isLoading, setIsLoading] = useState(false)
    const [allState, setAllState] = useState(false)


    // const handleTrueFunction = ()=>{
    //     variable
    // }

    const handleCatoState = ({stateBool, stringValue}:{
        stateBool:boolean,
        stringValue:string
    })=>{
        if(stateBool){
            const filterdArr = mappingArr.filter((value)=>{
                if(value.category==stringValue){
                    return value
                }
            })
            setMappingArr(filterdArr)
        }
        else{
            const filterdArr = mappingArr.filter((value)=>{
                if(value.category != stringValue){
                    return value
                }
            })
            setMappingArr(filterdArr)

        }
    }


    useEffect(()=>{
        handleCatoState({stateBool:fruits,stringValue:'fruits'})
    },[fruits])
    useEffect(()=>{
        handleCatoState({stateBool:baby,stringValue:'baby'})
    },[baby])
    useEffect(()=>{
        handleCatoState({stateBool:beverages,stringValue:'beverages'})
    },[beverages])
    useEffect(()=>{
        handleCatoState({stateBool:meats,stringValue:'meats'})
    },[meats])
    useEffect(()=>{
        handleCatoState({stateBool:biscuits,stringValue:'biscuits'})
    },[biscuits])
    useEffect(()=>{
        handleCatoState({stateBool:breads,stringValue:'breads'})
    },[breads])
    useEffect(()=>{
        handleCatoState({stateBool:breaksfast,stringValue:'breaksfast'})
    },[breaksfast])
    useEffect(()=>{
        handleCatoState({stateBool:frozen,stringValue:'frozen'})
    },[frozen])
    useEffect(()=>{
        handleCatoState({stateBool:grocery,stringValue:'grocery'})
    },[grocery])
    useEffect(()=>{
        handleCatoState({stateBool:healthcare,stringValue:'healthcare'})
    },[healthcare])
    useEffect(()=>{
        handleCatoState({stateBool:household,stringValue:'household'})
    },[household])


    useEffect(()=>{
        // if(fruits){
        //     const fruitsArr = mappingArr.filter((value)=>{
        //         if(value.category=='fruits'){
        //             return value
        //         }
        //     })
        //     // console.log(fruitsArr)
        //     setMappingArr(fruitsArr)
        // }

        console.log(selectFilterState)
        stateArr.map((value)=>{
            if(value){
                setAllState(false)
            }
        })
        if(!allState){
            setMappingArr(AllData)
            setAllState(true)
        }
    },[fruits, baby, beverages, meats, biscuits, breads, breaksfast, frozen, grocery, healthcare, household])



    const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]



    return <>
            <div className="flex flex-wrap">
                {mappingArr.map((value:any,index)=>{
                    console.log(value)
                    
                    return<div className="w-[20%] h-[420px] border" key={index}>
                          <Link href={`detailpage/${index+1}`} className="cursor-default">
                                <div className=" relative">
                                    <div>   
                                        <Image src={require('../../../../public/assets/images/product_1.jpg')} alt="product" />
                                    </div>
                                    <div>
                                        <div className="absolute top-3 right-3 z-40 cursor-pointer" onClick={(e)=>{
                                            e.preventDefault()
                                            handleLikeClick(value.product_id)
                                            fav.indexOf(value.product_id)== -1?dispatch(addToFav(value.product_id)):dispatch(removeFromFav(value.product_id))
                                        }} id="likeButton"
                                        >
                                            {/* <i className={likes[index]?'fa fa-heart t   ext-red-500':'fa fa-heart-o z-10' } style={{fontSize: '24px'}}></i> */}
                                            <i className={fav.indexOf(value.product_id)!=-1?'fa fa-heart text-red-500':'fa fa-heart-o z-10' } style={{fontSize: '24px'}}></i>
                                        </div>
                                        <div className="absolute left-1 top-2">
                                            <p className="bg-red-500 w-min  py-[2px] pl-1 pr-2 rounded-xl text-sm font-bold text-white">{value.discount}%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-2">
                                    <h6 className="mb-3">{value.product_name}</h6>
                                    <div className="flex gap-2">
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
                                        <p className="text-2xl text-[#DC2626] font-bold">${parseFloat((value.original_price-(value.original_price*value.discount/100)).toFixed(2))} </p>
                                        <span className="text-xl"><del>${value.original_price}</del> </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className={`flex w-[40px] aspect-square justify-center items-center ${value.in_stock?'bg-[#16A34A]':'bg-red-500'} rounded-xl`}>
                                            <i className="fa fa-shopping-cart text-white"></i>
                                        </div>
                                        <p>{value.in_stock?'IN STOCK':'OUT OF STOCK'}</p>
                                    </div>
                                </div>
                             </Link>
                            </div>
                
                }
            )}
                
            </div>
    </>
    
}

export default DetailPage