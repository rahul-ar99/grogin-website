"use client"

import Image from "next/image";
import Mainpage from "./mainpage/page";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const {push} = useRouter()
    useEffect(()=>{
        push('/mainpage')
    },[])
    return (
        <main className="flex min-h-screen flex-col">
        {/* <Mainpage /> */}
        </main>
    );
}
