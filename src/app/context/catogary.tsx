'use client'

import { createContext, useContext, useState } from "react";

const CatoContext = createContext({})
interface CatogaryArrState{
    fruits:boolean,
    baby:boolean,
    beverages:boolean,
    meats:boolean,
    biscuits:boolean,
    breads:boolean,
    breaksfast:boolean,
    frozen:boolean,
    grocery:boolean,
    healthcare:boolean,
    household:boolean,
}

const CatogaryContextExport = ({children}:{children:React.ReactNode})=>{


    const [catogaryArr, setCatogaryArr] = useState<CatogaryArrState>({
            fruits:false,
            baby:false,
            beverages:false,
            meats:false,
            biscuits:false,
            breads:false,
            breaksfast:false,
            frozen:false,
            grocery:false,
            healthcare:false,
            household:false,
    })
    return <CatoContext.Provider value={{catogaryArr, setCatogaryArr}}>
        {children}
    </CatoContext.Provider>
}

export default CatogaryContextExport;

// export const useCatogaryState = useContext(CatoContext)