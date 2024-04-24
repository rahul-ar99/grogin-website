"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"



const DetailPage= () =>{
    const [like, setLike] = useState(false)
    const [likeClass, setLikeClass] = useState('fa fa-heart-o z-10')

    const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]



    return <>
            <div className="flex flex-wrap">
                {list.map((value,index)=>{
                        return <div className="w-[20%] h-[420px] border" key={index}>
                          <Link href={`detailpage/${index+1}`} className="cursor-default">
                                <div className="bg-red-400 relative">
                                    <div>   
                                        <Image src={require('../../../public/assets/images/product_1.jpg')} alt="product" />
                                    </div>
                                    <div>
                                        <div className="absolute top-3 right-3 z-40 cursor-pointer" onClick={(e)=>{
                                            e.preventDefault()
                                            setLike(like?false:true)
                                            console.log(like)
                                            like?setLikeClass('fa fa-heart-o'):setLikeClass('fa fa-heart text-red-600'
                                            
                                            )}} id="likeButton"
                                            >
                                                <i className={`${likeClass}`} style={{fontSize: '24px'}}></i>
                                            
                                        </div>

                                    </div>
                                </div>
                                <div className="pl-2">
                                    <h6 className="mb-3">Yellow Potatoes Whole Fresh, 5l`b Bag</h6>
                                    <div className="flex gap-2">
                                        <div className="flex gap-1">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <p>3</p>
                                    </div>
                                    <div className="flex gap-3 items-center my-3">
                                        <p className="text-2xl text-[#DC2626] font-bold">$0.50 </p>
                                        <span className="text-xl"><del>$1.99</del> </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex w-[40px] aspect-square justify-center items-center bg-[#16A34A] rounded-xl">
                                            <i className="fa fa-shopping-cart text-white"></i>
                                        </div>
                                        <p>IN STOCK</p>
                                    </div>
                                </div>
                             </Link>
                            </div>
                })}
                
            </div>
    </>

}

export default DetailPage


// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// const DetailPage = () => {
//     const [likes, setLikes] = useState(Array(16).fill(false));

//     const handleLikeClick = (index) => {
//         const updatedLikes = [...likes];
//         updatedLikes[index] = !updatedLikes[index];
//         setLikes(updatedLikes);
//     };

//     const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

//     return (
//         <div className="flex flex-wrap">
//             {list.map((value, index) => {
//                 return (
//                     <div className="w-[20%] h-[420px] border" key={index}>
//                         <Link href={`detailpage/${index + 1}`} className="cursor-default">
//                             <div className="bg-red-400 relative">
//                                 <div>
//                                     <Image src={require('../../../public/assets/images/product_1.jpg')} alt="product" />
//                                 </div>
//                                 <div>
//                                     <div className="absolute top-3 right-3 z-40 cursor-pointer" onClick={(e) => {
//                                         e.preventDefault();
//                                         handleLikeClick(index);
//                                     }} id="likeButton">
//                                         <i className={likes[index] ? 'fa fa-heart text-red-600' : 'fa fa-heart-o z-10'} style={{ fontSize: '24px' }}></i>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="pl-2">
//                                 <h6 className="mb-3">Yellow Potatoes Whole Fresh, 5l`b Bag</h6>
//                                 <div className="flex gap-2">
//                                     <div className="flex gap-1">
//                                         <i className="fa fa-star"></i>
//                                         <i className="fa fa-star"></i>
//                                         <i className="fa fa-star"></i>
//                                         <i className="fa fa-star"></i>
//                                         <i className="fa fa-star-o"></i>
//                                     </div>
//                                     <p>3</p>
//                                 </div>
//                                 <div className="flex gap-3 items-center my-3">
//                                     <p className="text-2xl text-[#DC2626] font-bold">$0.50 </p>
//                                     <span className="text-xl"><del>$1.99</del> </span>
//                                 </div>
//                                 <div className="flex items-center gap-3">
//                                     <div className="flex w-[40px] aspect-square justify-center items-center bg-[#16A34A] rounded-xl">
//                                         <i className="fa fa-shopping-cart text-white"></i>
//                                     </div>
//                                     <p>IN STOCK</p>
//                                 </div>
//                             </div>
//                         </Link>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default DetailPage;
