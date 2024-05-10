import { useAppContext } from "@/app/context/MyContext"
import { useEffect } from "react";
import { useRouter } from "next/navigation";



export default function CatogaryFilter(){

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
    //         // state, setState
    //     } = useAppContext();


    return <>
    <div className="py-10 border-b border-b-gray-200">
                <h5 className="mb-3 text-lg font-semibold">Product Catogary</h5>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-3">
                        <input type="checkbox" className="bg-red-500" id="fruits" checked={fruits}  onChange={()=>setfruits(!fruits)}/>
                        <label htmlFor="fruits">Fruits & Vegitables</label>
                    </div>
                    <div className="flex gap-3">
                        <input type="checkbox" className="bg-red-500" id="baby" checked={baby} onChange={()=>{setbaby(!baby)
                        }}/>
                        <label htmlFor="baby">Baby & Pregnancy</label>
                    </div>
                    <div className="flex gap-3" onClick={()=>{
                        
                        }}>
                        <input type="checkbox" className="bg-red-500" id="beverages" checked={beverages} onChange={()=>setbeverages(!beverages)}/>
                        <label htmlFor="beverages">Beverages</label>
                    </div>
                    <div className="flex gap-3" onClick={()=>{
                        
                        }}>
                        <input type="checkbox" className="bg-red-500" id="meats" checked={meats} onChange={()=>setmeats(!meats)} />
                        <label htmlFor="meats">Meats & Seafoods</label>
                    </div>
                    <div className="flex gap-3" onClick={()=>{
                        
                        }}>
                        <input type="checkbox" className="bg-red-500" id="biscuits" checked={biscuits} onChange={()=>setbiscuits(!biscuits)}/>
                        <label htmlFor="biscuits">Biscuits & Snacks</label>
                    </div>
                    <div className="flex gap-3" onClick={()=>{
                        
                        }}>
                        <input type="checkbox" className="bg-red-500" id="breads"  checked={breads} onChange={()=>setbreads(!breads)} />
                        <label htmlFor="breads">Breads & Bakery</label>
                    </div>
                    <div className="flex gap-3" onClick={()=>{
                        
                        }}>
                        <input type="checkbox" className="bg-red-500" id="Breaksfast" checked={breaksfast} onChange={()=>setbreaksfast(!breaksfast)} />
                        <label htmlFor="Breaksfast">Breaksfast & Dairy</label>
                    </div>
                    <div className="flex gap-3" onClick={()=>{
                        
                        }}>
                        <input type="checkbox" className="bg-red-500" id="Frozen" checked={frozen} onChange={()=>setfrozen(!frozen)} />
                        <label htmlFor="Frozen">Frozen Foods</label>
                    </div>
                    <div className="flex gap-3" onClick={()=>{
                        
                        }}>
                        <input type="checkbox" className="bg-red-500" id="Grocery" checked={grocery}  onChange={()=>setgrocery(!grocery)}/>
                        <label htmlFor="Grocery">Grocery & Staples</label>
                    </div>
                    <div className="flex gap-3" onClick={()=>{
                        
                        }}>
                        <input type="checkbox" className="bg-red-500" id="Healthcare" checked={healthcare} onChange={()=>sethealthcare(!healthcare)} />
                        <label htmlFor="Healthcare">Healthcare</label>
                    </div>
                    <div className="flex gap-3" onClick={()=>{
                        
                        }}>
                        <input type="checkbox" className="bg-red-500" id="Household" checked={household} onChange={()=>sethousehold(!household)}/>
                        <label htmlFor="Household">Household Needs</label>
                    </div>
                </div>
            </div>
            
    </>
}
