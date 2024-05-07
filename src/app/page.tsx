"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { Provider } from "react-redux"
import { Store } from "./redux/store/page";
import { useAppContext } from "./context/MyContext";


// Store
interface CounterState{
    value:number;
}

interface UserState{
    isSignedIn:boolean;
}


// Action
const increment = {type:'INCREMENT', payload:10}
const decrement = {type:'DECREMENT', payload:10}


export default function Home() {

    // const {catogaryArr, setCatogaryArr} = useContext(CatogaryContext)

    // useEffect(()=>console.log(catogaryArr))


    const {push} = useRouter()
    useEffect(()=>{
        push('/mainpage')
        // <Mainpage />
    },[])
    return (
        <main className="flex min-h-screen flex-col">

        </main>
    );
}
