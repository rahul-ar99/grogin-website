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

interface ImageMagnifierProps {
    smallImageSrc: string;
    largeImageSrc: string;
    smallImageAlt?: string;
    smallImageWidth: number;
    smallImageHeight: number;
    largeImageWidth: number;
    largeImageHeight: number;
  }


const DetailPage= () =>{

    // useEffect(()=>setfruits(true),)


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
    const {sortState}:any = useAppContext();
    const {inStock}:any = useAppContext();
    const {setInStock}:any = useAppContext()
    
    useEffect(()=>console.log(sortState),[sortState])
    
    // const stateArr = [fruits, baby, beverages, meats, biscuits, breads, breaksfast, frozen, grocery, healthcare, household]
    const setstateArr = [setfruits, setbaby, setbeverages, setmeats, setbiscuits, setbreads, setbreaksfast, setfrozen, setgrocery, sethealthcare, sethousehold]
    
    const [mappingArr, setMappingArr]:any = useState([])
    
    const [beforeIsStock, setBeforeIsStock]:any = useState([])



    useEffect(()=>{
        setstateArr.map((setState)=>{
            setState(false)
        })
    },[])

    const handleCatoState = ({stateBool, stringValue}:{
        stateBool:boolean,
        stringValue:string
        })=>{
            if(!checkingCato){
                setMappingArr([])
                const filterdArr = AllData.filter((value)=>{
                    if(value.category==stringValue){
                            return value
                    }})
                const afterMapping = [...filterdArr]
                setMappingArr(afterMapping)
                setCheckingCato(true)
                // console.log(checkingCato, 'if')
            }else if(checkingCato){
                if(stateBool){
                    // if(checkingCato){
                        const filterdArr = AllData.filter((value)=>{
                            if(value.category==stringValue){
                                    return value
                            }})
                        const afterMapping = [...mappingArr, ...filterdArr]
                        setMappingArr(afterMapping)
                    }
                    else{
                        const filterdArr = mappingArr.filter((value:any)=>{
                            if(value.category!=stringValue){
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

                // }
            }
            setInStock(false)
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
    // 
    useEffect(()=>{
        if(inStock){
            const isStockArr = mappingArr.filter((value:any)=>{
                if(value.in_stock){
                    return value
                }
            })
            setBeforeIsStock(mappingArr)
            setMappingArr(isStockArr)
        }
        else{
            setMappingArr(beforeIsStock)
        }
        // handleCatoState({stateBool:household,stringValue:'household'})

        // console.log(inStock, 'stock')
        // handleStock()
    },[inStock])


    // sort
    const handleSort = ()=>{
        const sortedData =  [...mappingArr].sort((a:any,b:any)=>{
            const date_a:any = new Date(a.uploaded_date)
            const date_b:any = new Date(b.uploaded_date)
            const a_price = (a.original_price * (100 - a.discount))*100
            const b_price = (b.original_price * (100 - b.discount))*100
            console.log(a.no_of_person_reviewed,b.no_of_person_reviewed)
            if(sortState=='latest'){
                return date_a - date_b
            }else if(sortState =='popularity'){
                return b.no_of_person_reviewed - a.no_of_person_reviewed
            }else if(sortState == 'lowestPrice'){
                return a_price - b_price
            }else if(sortState == 'highestPrice'){
                return b_price - a_price
            }
            return 0
        })
        console.log(sortedData)
        setMappingArr(sortedData)
    }
    

    useEffect(()=>{
        handleSort()
    },[sortState])


    useEffect(()=>{
        if(!fruits && !baby && !beverages && !meats && !biscuits && !breads && !breaksfast && !frozen && !grocery && !healthcare && !household){
            setMappingArr(AllData)
            setCheckingCato(false)
        }

   
    },[fruits, baby, beverages, meats, biscuits, breads, breaksfast, frozen, grocery, healthcare, household])


    

    return <>
            <div className="flex flex-wrap">
                {mappingArr.map((value:any,index:number)=>{
                    const imageName = value.product_id % 16
                    // console.log(imageName)
                    // console.log(value)
                    if(value.original_price >= lowerPrice && value.original_price <= higherPrice){
                        return<div className="w-[20%] border max-786:w-[25%] max-640:w-[33%] py-3 max-480:w-[50%]" key={index}>
                            <Link href={`detailpage/${value.product_id}`} className="cursor-default">
                                <div className=" relative">
                                    <div className="max-h-[300px] min-h-[300px] overflow-hidden">   
                                        <Image className="max-h-[90%]" src={require(`../../../../public/assets/images/products/${(value.category +(value.product_id%16))}.png`)} alt="product" />
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
                                            <p className="bg-red-500 w-min  py-[2px] pl-1 pr-2 rounded-xl text-sm max-[1080px]:text-xs font-bold text-white">{value.discount}%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-2">
                                    <h6 className="mb-3 max-[1080px]:text-sm h-10">{value.product_name}</h6>
                                    <div className="flex gap-2 items-center">
                                        <div className="flex gap-1 max-[1080px]:text-xs max-1080:text-sm">
                                            <i className={value.rating<=0?`fa fa-star-o`:'fa fa-star'}></i>
                                            <i className={value.rating<=1?`fa fa-star-o`:'fa fa-star'}></i>
                                            <i className={value.rating<=2?`fa fa-star-o`:'fa fa-star'}></i>
                                            <i className={value.rating<=3?`fa fa-star-o`:'fa fa-star'}></i>
                                            <i className={value.rating<=4?`fa fa-star-o`:'fa fa-star'}></i>
                                        </div>
                                        <p className="max-1080:text-xs">{value.no_of_person_reviewed}</p>
                                    </div>
                                    <div className="flex gap-3 items-center my-3 max-980:text-sm">
                                        <p className="text-2xl text-[#DC2626] font-bold max-1080:text-lg">${parseFloat((value.original_price-(value.original_price*value.discount/100)).toFixed(2))} </p>
                                        <span className="text-xl max-[1080px]:text-sm  max-1080:text-lg"><del>${value.original_price}</del> </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className={`flex w-[40px] aspect-square max-[980px]:text-sm max-1280:w-[35px] justify-center items-center max-980:w-[30px] max-980:text-sm ${value.in_stock?'bg-[#16A34A]':'bg-red-500'} rounded-xl`}>
                                            <i className="fa fa-shopping-cart text-white "></i>
                                        </div>
                                        <p className="max-[1080px]:text-xs  max-1280:text-sm">{value.in_stock?'IN STOCK':'OUT OF STOCK'}</p>
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