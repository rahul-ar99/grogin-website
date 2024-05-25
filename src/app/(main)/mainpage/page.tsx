// 'use client'

import Header from "@/components/includes/header/header"
import Footer from "@/components/includes/footer/footer"
import Filter from "./_components/filter"
import MainContent from "./_components/mainContent"
import { useEffect, useState } from "react"
import { useAppContext } from "@/app/context/MyContext"
import { Metadata } from "next"


export const metadata: Metadata = {
    title: 'Grogin | main page',
    description: 'this is grogin site main page',
  }


const Mainpage = () =>{



    return <div className="w-full">
                <Header />
                <div className="wrapper">
                    <div className="w-full flex gap-12 max-1080:gap-0 pb-16 max-[1080px]:text-sm max-1080:flex-col">
                        <Filter />
                        <MainContent />
                    </div>
                </div>
                <Footer />
            </div>
}

export default Mainpage