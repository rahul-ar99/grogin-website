'use client'

import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/app/redux/store/page"
import { useAppContext } from "@/app/context/MyContext"
import { useRouter } from "next/navigation"

export default function SelectedFilter(){

    const { fruits,setfruits, 
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
            // state,setState
        }  = useAppContext();




    return  <div>
                <div className="flex flex-wrap gap-x-5 mb-5">
                 {fruits &&
                        <div className="flex items-center gap-1">
                            <i className="fa fa-close"></i>
                            <p>Fruits & Vegitables</p>
                        </div>
                 }
                 {baby &&
                        <div className="flex items-center gap-1">
                            <i className="fa fa-close"></i>
                            <p>Baby</p>
                        </div>
                 }
                 {beverages &&
                        <div className="flex items-center gap-1">
                            <i className="fa fa-close"></i>
                            <p>Beverages</p>
                        </div>
                 }
                 {meats &&
                        <div className="flex items-center gap-1">
                            <i className="fa fa-close"></i>
                            <p>Meats & Seafoods</p>
                        </div>
                 }
                 {biscuits &&
                        <div className="flex items-center gap-1">
                            <i className="fa fa-close"></i>
                            <p>Biscuits & Snacks</p>
                        </div>
                 }
                 {breads &&
                        <div className="flex items-center gap-1">
                            <i className="fa fa-close"></i>
                            <p>Breads & Bakery</p>
                        </div>
                 }
                 {breaksfast &&
                        <div className="flex items-center gap-1">
                            <i className="fa fa-close"></i>
                            <p>Breakfast & Dairy</p>
                        </div>
                 }
                 {frozen &&
                            <div className="flex items-center gap-1">
                                <i className="fa fa-close"></i>
                                <p>Frozen Foods</p>
                            </div>
                 }
                 {grocery &&
                            <div className="flex items-center gap-1">
                                <i className="fa fa-close"></i>
                                <p>Grocery & Staples</p>
                            </div>
                 }
                 {healthcare &&
                            <div className="flex items-center gap-1">
                                <i className="fa fa-close"></i>
                                <p>Healthcare</p>
                            </div>
                 }
                 {household &&
                            <div className="flex items-center gap-1">
                                <i className="fa fa-close"></i>
                                <p>Household Needs</p>
                            </div>
                 }
                    <div className="flex items-center gap-1">
                        <i className="fa fa-close"></i>
                        <p>Clear Search</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <i className="fa fa-close"></i>
                        <p>Fruits & vegitables</p>
                    </div>
                </div>
            </div>
}   
