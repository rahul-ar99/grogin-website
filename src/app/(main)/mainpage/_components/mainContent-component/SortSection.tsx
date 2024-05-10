import { useAppContext } from "@/app/context/MyContext"
import { useEffect } from "react"


const SortSection = () =>{


    const {setSortState}:any = useAppContext()

    return  <div className="flex justify-between items-center py-2 px-2 bg-gray-100 my-3 rounded-xl">
                <div>
                    <p>Showing all 16 results</p>
                </div>
                <div className="flex items-center" >
                    <div className="flex mr-16 ">
                        <p>Sort:</p>
                        <select name="sorting" id="" onChange={(e)=>setSortState(e.target.value)}>
                            <option value="popularity">Popularity</option>
                            <option value="latest">Newest first</option>
                            <option value="lowestPrice">Price Low - High</option>
                            <option value="highestPrice">Price High to Low</option>
                        </select>
                    </div>
                    <p>|</p>
                    <div className="flex ml-3 gap-10 items-center">
                        <p>Show: 20 items</p>
                        <div className="flex gap-2">
                            <button className="w-[40px] aspect-square bg-gray-300 flex justify-center items-center rounded-lg ">
                                <i className="fa fa-th-large" style={{fontSize: "24px"}}></i>
                            </button>
                            <button className="w-[40px] aspect-square bg-gray-300 flex justify-center items-center rounded-lg ">
                                <i className="fa fa-th-list" style={{fontSize: "24px"}}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
}

export default SortSection