import Image from "next/image"

const ProductsList = () => {

    const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]


    return <>
            <div className="flex flex-wrap">
                {list.map((value,index)=>{
                    return<div className="w-[20%] h-[420px] border" key={index}>
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
                </div>
                })}
                
            </div>
    </>
}

export default ProductsList