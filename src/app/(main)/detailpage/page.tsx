"use client"

import Image from "next/image"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { RootState } from "../../redux/store/page"
import { addToFav, removeFromFav } from "../../redux/favorite/page"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import AllData from '../../../../public/assets/json/addData.json'
import { useAppContext } from "@/app/context/MyContext"

interface AllDataInterface {
        product_id: number
        product_code: string
        product_name: string
        rating: number
        no_of_person_reviewed: number
        original_price: number
        discount: number
        product_status: boolean
        in_stock: boolean
        isOrganic: boolean
        uploaded_date:string
        category:string
        color:string
        brand:string
        short_desc:string
        long_desc:string
        reviews: Review[],
        images: ImageCollection
}


interface Review {
    image: string;
    name: string;
    review: string;
  }
  
  interface ImageCollection {
    main_image: string;
    sub_images: {
      image1: string;
      image2: string;
      image3: string;
    };
  }

interface Product{

    id:number;
    name:string;
    imageUrl:string;
    price:number;
    discountPrice:number;
    rating:number;
    inStock:boolean;
}

interface AppContextInterface {
    fruits: boolean;
    setfruits: (fruits: boolean) => void;
    baby: boolean;
    setbaby: (baby: boolean) => void;
    beverages: boolean;
    setbeverages: (beverages: boolean) => void;
    meats: boolean;
    setmeats: (beverages: boolean) => void;
    biscuits: boolean;
    setbiscuits: (beverages: boolean) => void;
    breads: boolean;
    setbreads: (beverages: boolean) => void;
    // ... other categories (meats, biscuits, breads, etc.)
    breaksfast: boolean;
    setbreaksfast: (breaksfast: boolean) => void;
    frozen: boolean;
    setfrozen: (frozen: boolean) => void;
    grocery: boolean;
    setgrocery: (grocery: boolean) => void;
    healthcare: boolean;
    sethealthcare: (healthcare: boolean) => void;
    household: boolean;
    sethousehold: (household: boolean) => void;
    lowerPrice: number; // Optional, depending on your context
    higherPrice: number; // Optional, depending on your context
  }

const DetailPage= () =>{

    // const AllData :AllDataInterface[] = AllData1

    const fav = useSelector((state:RootState)=>state.favorite.value)

    const dispatch = useDispatch()

    const [likes, setLikes] = useState<boolean[]>(Array(16).fill(false))

    const [checkingCato, setCheckingCato] = useState(false)

    // like icon color change
    const handleLikeClick = (index:number) => {
        const updatedLikes = [...likes];
        updatedLikes[index] = !updatedLikes[index];
        setLikes(updatedLikes);
    }

    
    const {fruits}:any = useAppContext();
    const {setfruits}:any = useAppContext();
    const {baby}:any = useAppContext();
    const {setbaby}:any = useAppContext();
    const {beverages}:any = useAppContext();
    const {setbeverages}:any = useAppContext();
    const {meats}:any = useAppContext();
    const {setmeats}:any = useAppContext();
    const {biscuits}:any = useAppContext();
    const {setbiscuits}:any = useAppContext();
    const {breads}:any = useAppContext();
    const {setbreads}:any = useAppContext();
    const {breaksfast}:any = useAppContext();
    const {setbreaksfast}:any = useAppContext();
    const {frozen}:any = useAppContext();
    const {setfrozen}:any = useAppContext();
    const {grocery}:any = useAppContext();
    const {setgrocery}:any = useAppContext();
    const {healthcare}:any = useAppContext();
    const {sethealthcare}:any = useAppContext();
    const {household}:any = useAppContext();
    const {sethousehold}:any = useAppContext();
    const {lowerPrice}:any = useAppContext();
    const {higherPrice}:any = useAppContext();
    // const { 
    //     fruits,setfruits, 
    //     baby,setbaby, 
    //     beverages,setbeverages, 
    //     meats,setmeats, 
    //     biscuits,setbiscuits, 
    //     breads,setbreads, 
    //     breaksfast,setbreaksfast, 
    //     frozen,setfrozen, 
    //     grocery,setgrocery, 
    //     healthcare,sethealthcare, 
    //     household,sethousehold,
    //     lowerPrice, higherPrice
    // }  = useAppContext();

    const stateArr = [fruits, baby, beverages, meats, biscuits, breads, breaksfast, frozen, grocery, healthcare, household]
    const setstateArr = [setfruits, setbaby, setbeverages, setmeats, setbiscuits, setbreads, setbreaksfast, setfrozen, setgrocery, sethealthcare, sethousehold]
    const [selectFilterState, setSelectedFilterState] = useState([])

    const [mappingArr, setMappingArr]:any = useState([])

    const [isLoading, setIsLoading] = useState(false)
    const [allState, setAllState] = useState(false)


    // const handleTrueFunction = ()=>{
    //     variable
    // }



    useEffect(()=>{
        if(!fruits && !baby && !beverages && !meats && !biscuits && !breads && !breaksfast && !frozen && !grocery && !healthcare && !household){
            setMappingArr(AllData)
            console.log('if statement')
        }
    })

    useEffect(()=>{
        setstateArr.map((setState)=>{
            setState(false)
        })
    },[])

    const handleCatoState = ({stateBool, stringValue}:{
        stateBool:boolean,
        stringValue:string
        })=>{
            stateArr.map((value)=>{
                if(value){
                    setCheckingCato(true)
                }
            })

            if(stateBool){
                if(checkingCato){
                    const filterdArr = AllData.filter((value)=>{
                        if(value.category==stringValue){
                                return value
                            }
                        })
                        const afterMapping = [...mappingArr, ...filterdArr]
                        setMappingArr(afterMapping)
                        }
                        else{
                            const filterdArr = AllData.filter((value)=>{
                            if(value.category==stringValue){
                                    return value
                                }
                            })
                            const afterMapping = [...filterdArr]
                            
                            setMappingArr(afterMapping)
                    }
            }
            else{
                const filterdArr = mappingArr.filter((value:any)=>{
                    if(value.category != stringValue){
                        return value
                    }
                })
                setMappingArr(filterdArr)

            }
    }

    useEffect(()=>{
        console.log(lowerPrice, higherPrice)
    },[lowerPrice, higherPrice])





    // change state with every change of catogary filter
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



    // sort
    const handleSort = ()=>{
        const sortedData =  [...mappingArr].sort((a,b)=>{
            const date_a = new Date(a.uploaded_date)
            const date_b = new Date(b.uploaded_date)
            return date_a.getTime() - date_b.getTime();
        })
    }


    // useEffect(()=>{

    // },[fruits, baby, beverages, meats, biscuits, breads, breaksfast, frozen, grocery, healthcare, household])



    const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]



    return <>
            <div className="flex flex-wrap">
                {mappingArr.map((value:any,index:number)=>{
                    // console.log(value)
                    if(value.original_price >= lowerPrice && value.original_price <= higherPrice){
                        return<div className="w-[20%] h-[420px] border" key={index}>
                            <Link href={`detailpage/${value.product_id}`} className="cursor-default">
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
            return undefined
            }
        )}
        
            </div>
    </>
    
}

export default DetailPage