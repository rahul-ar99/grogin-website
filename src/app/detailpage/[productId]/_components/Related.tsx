import Link from "next/link"
import Image from "next/image"

const Related = () =>{
    const list = [1,2,3,4,5]
    return <>
                <h4 className="text-2xl font-bold mb-4">Related Products</h4>
                <div className="flex flex-wrap">
                    {list.map((value,index)=>{
                            return <div className="w-[20%] border" key={index}>
                            <Link href={`detailpage/${index+1}`}>
                                    <div className="bg-red-400 relative">
                                        <div>   
                                            <Image src={require('../../../../../public/assets/images/product_1.jpg')} alt="product" />
                                        </div>
                                        <div>
                                            <div className="absolute top-3 right-3">
                                                <i className="fa fa-heart text-red-600" style={{fontSize:'24px'}}></i>
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

export default Related