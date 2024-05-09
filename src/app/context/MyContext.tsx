'use client'

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

const AppContext = createContext({});

export function AppWrapper({children}:{
    children:React.ReactNode;
}){

    const [fruits, setfruits] = useState(false)
    const [baby, setbaby] = useState(false)
    const [beverages, setbeverages] = useState(false)
    const [meats, setmeats] = useState(false)
    const [biscuits, setbiscuits] = useState(false)
    const [breads, setbreads] = useState(false)
    const [breaksfast, setbreaksfast] = useState(false)
    const [frozen, setfrozen] = useState(false)
    const [grocery, setgrocery] = useState(false)
    const [healthcare, sethealthcare] = useState(false)
    const [household, sethousehold] = useState(false)
    const [lowerPrice, setLowerPrice] = useState(0)
    const [higherPrice, setHigherPrice]= useState(30)
    const [inStock, setInStock]= useState(true)



    const Router = useRouter()
    // Router.refresh()
    return(
        <AppContext.Provider value={{
            fruits, setfruits,
            baby, setbaby,
            beverages, setbeverages,
            meats, setmeats,
            biscuits, setbiscuits,
            breads, setbreads,
            breaksfast, setbreaksfast,
            frozen, setfrozen,
            grocery, setgrocery,
            healthcare, sethealthcare,
            household, sethousehold,
            lowerPrice, setLowerPrice,
            higherPrice, setHigherPrice
            }}>
            {children}
        </AppContext.Provider>
    )
}


export function useAppContext(){
    return useContext(AppContext);
}