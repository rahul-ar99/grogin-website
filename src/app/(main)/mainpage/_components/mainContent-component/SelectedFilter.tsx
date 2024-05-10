'use client'

import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/app/redux/store/page"
import { useAppContext } from "@/app/context/MyContext"
import { useRouter } from "next/navigation"

export default function SelectedFilter(){

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
    // const { fruits,setfruits, 
    //         baby,setbaby, 
    //         beverages,setbeverages, 
    //         meats,setmeats, 
    //         biscuits,setbiscuits, 
    //         breads,setbreads, 
    //         breaksfast,setbreaksfast, 
    //         frozen,setfrozen, 
    //         grocery,setgrocery, 
    //         healthcare,sethealthcare, 
    //         household,sethousehold,
    //         // state,setState
    //     }  = useAppContext();

    const stateArr = [fruits, baby, beverages, meats, biscuits, breads, breaksfast, frozen, grocery, healthcare, household]
    const setStateArr = [setfruits, setbaby, setbeverages, setmeats, setbiscuits, setbreads, setbreaksfast, setfrozen, setgrocery, sethealthcare, sethousehold]
    const stringArr = ['Fruits & Vegitables', 'Baby & Pregnancy', 'Beverages', 'Meats & Seafoods', 'Biscuits & Snacks', 'Breads & Bakery', 'Breaksfast & Dairy', 'Frozen Foods', 'Grocery & Staples', 'Healthcare', 'Household Needs']




    // its for clear state for set all state to false

    // const [clearState, setClearState] = useState(false)
    // useEffect(()=>{
    //     for (let arr in stateArr) {
    //         if(arr){
    //             setClearState(true)
    //             break
    //         }else{
    //             setClearState(false)
    //         }
    //     }
    // },[fruits, baby, beverages, meats, biscuits, breads, breaksfast, frozen, grocery, healthcare, household])

    return  <div>
                <div className="flex flex-wrap gap-x-5 mb-5 gap-y-2">
                    {
                        stateArr.map((value,index)=>{
                            if(value){
                                return <div key={index} className="flex items-center gap-1 border cursor-default bg-slate-200 px-1 rounded-xl" onClick={()=>setStateArr[index](false)}>
                                            <i className="fa fa-close"></i>
                                            <p className="cursor-default">{stringArr[index]}</p>
                                        </div>
                            }
                        })
                    }
                    {/* {
                        clearState &&  <div className="flex items-center gap-1">
                        <i className="fa fa-close"></i>
                        <p>Clear Search</p>
                    </div>
                    } */}
                   
                </div>
            </div>
}   
