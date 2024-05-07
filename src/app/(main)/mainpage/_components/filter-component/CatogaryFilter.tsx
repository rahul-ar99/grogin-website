import { useAppContext } from "@/app/context/MyContext"
import { useEffect } from "react";
import { useRouter } from "next/navigation";



export default function CatogaryFilter(){


    interface AppContext {
        fruits: boolean;
        setfruits: boolean;
        baby: boolean;
        setbaby: boolean;
        beverages: boolean;
        setbeverages: boolean;
        meats: boolean;
        setmeats: boolean;
        biscuits: boolean;
        setbiscuits: boolean;
        breads: boolean;
        setbreads: boolean;
        breaksfast: boolean;
        setbreaksfast: boolean;
        frozen: boolean;
        setfrozen: boolean;
        grocery: boolean;
        setgrocery: boolean;
        healthcare: boolean;
        sethealthcare: boolean;
        household: boolean;
        sethousehold: boolean;
        // Add more types as needed
    }
    const handleChangeState = (userState:any, bool:boolean)=>{
        userState(bool)
    }

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
            // state, setState
        } = useAppContext();


    return <>
    <div className="py-10 border-b border-b-gray-200">
                <h5 className="mb-3 text-lg font-semibold">Product Catogary</h5>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-3">
                        <input type="checkbox" className="bg-red-500" id="fruits" checked={fruits}  onChange={()=>setfruits(!fruits)}/>
                        <label htmlFor="fruits">Fruits & Vegitables</label>
                    </div>
                    <div className="flex gap-3">
                        <input type="checkbox" className="bg-red-500" id="baby" onChange={()=>{setbaby(!baby)
                        }}/>
                        <label htmlFor="baby">Baby & Pregnancy</label>
                    </div>
                    <div className="flex gap-3" onClick={()=>{
                        
                        }}>
                        <input type="checkbox" className="bg-red-500" id="beverages" onChange={()=>setbeverages(!beverages)}/>
                        <label htmlFor="beverages">Beverages</label>
                    </div>
                    <div className="flex gap-3" onClick={()=>{
                        
                        }}>
                        <input type="checkbox" className="bg-red-500" id="meats"onChange={()=>setmeats(!meats)} />
                        <label htmlFor="meats">Meats & Seafoods</label>
                    </div>
                    <div className="flex gap-3" onClick={()=>{
                        
                        }}>
                        <input type="checkbox" className="bg-red-500" id="biscuits" onChange={()=>setbiscuits(!biscuits)}/>
                        <label htmlFor="biscuits">Biscuits & Snacks</label>
                    </div>
                    <div className="flex gap-3" onClick={()=>{
                        
                        }}>
                        <input type="checkbox" className="bg-red-500" id="breads"onChange={()=>setbreads(!breads)} />
                        <label htmlFor="breads">Breads & Bakery</label>
                    </div>
                    <div className="flex gap-3" onClick={()=>{
                        
                        }}>
                        <input type="checkbox" className="bg-red-500" id="Breaksfast"onChange={()=>setbreaksfast(!breaksfast)} />
                        <label htmlFor="Breaksfast">Breaksfast & Dairy</label>
                    </div>
                    <div className="flex gap-3" onClick={()=>{
                        
                        }}>
                        <input type="checkbox" className="bg-red-500" id="Frozen"onChange={()=>setfrozen(!frozen)} />
                        <label htmlFor="Frozen">Frozen Foods</label>
                    </div>
                    <div className="flex gap-3" onClick={()=>{
                        
                        }}>
                        <input type="checkbox" className="bg-red-500" id="Grocery" onChange={()=>setgrocery(!grocery)}/>
                        <label htmlFor="Grocery">Grocery & Staples</label>
                    </div>
                    <div className="flex gap-3" onClick={()=>{
                        
                        }}>
                        <input type="checkbox" className="bg-red-500" id="Healthcare"onChange={()=>sethealthcare(!healthcare)} />
                        <label htmlFor="Healthcare">Healthcare</label>
                    </div>
                    <div className="flex gap-3" onClick={()=>{
                        
                        }}>
                        <input type="checkbox" className="bg-red-500" id="Household" onChange={()=>sethousehold(!household)}/>
                        <label htmlFor="Household">Household Needs</label>
                    </div>
                </div>
            </div>
            
    </>
}
