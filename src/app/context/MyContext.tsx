'use client'

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

const AppContext = createContext({});

export function AppWrapper({children}:{
    children:React.ReactNode;
}){

    const [fruits, setfruits] = useState<boolean>(false)
    const [baby, setbaby] = useState<boolean>(false)
    const [beverages, setbeverages] = useState<boolean>(false)
    const [meats, setmeats] = useState<boolean>(false)
    const [biscuits, setbiscuits] = useState<boolean>(false)
    const [breads, setbreads] = useState<boolean>(false)
    const [breaksfast, setbreaksfast] = useState<boolean>(false)
    const [frozen, setfrozen] = useState<boolean>(false)
    const [grocery, setgrocery] = useState<boolean>(false)
    const [healthcare, sethealthcare] = useState<boolean>(false)
    const [household, sethousehold] = useState<boolean>(false)
    const [lowerPrice, setLowerPrice] = useState<number>(0)
    const [higherPrice, setHigherPrice]= useState<number>(30)
    const [inStock, setInStock]= useState<boolean>(true)



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