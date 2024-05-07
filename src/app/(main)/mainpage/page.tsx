'use client'

import Header from "@/components/includes/header/header"
import Footer from "@/components/includes/footer/footer"
import Filter from "./_components/filter"
import MainContent from "./_components/mainContent"
import { useEffect, useState } from "react"
import { useAppContext } from "@/app/context/MyContext"


const Mainpage = () =>{

    return <div className="w-full">
                <Header />
                <div className="wrapper">
                    <div className="w-full flex gap-12 pb-16">
                        <Filter />
                        <MainContent />
                    </div>
                </div>
                <Footer />
            </div>
}

export default Mainpage