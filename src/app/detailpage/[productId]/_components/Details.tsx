import Image from "next/image"

const Detail = () =>{
    return(
        <div className="flex justify-between py-5">
            <div className="min-w-[50%]">
                <div className="w-full">
                    <div className="w-full relative">
                        <div className="w-full">
                            <Image className="w-full" src={require('../../../../../public/assets/images/detail-main.jpg')} alt="banana" />
                        </div>
                        <div className="absolute top-2 left-2">
                            <p className="bg-red-500 text-white font-semibold rounded-3xl text-xs w-min py-1 px-2 mb-2">56%</p>
                            <p className="bg-green-500 text-white font-semibold rounded-3xl text-xs w-min py-1 px-2">Organic</p>
                        </div>
                        <div className="absolute bottom-10 left-2 w-20">
                            <Image src={require('../../../../../public/assets/images/zoom.png')} alt="zoom" />
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <div className="flex gap-2">
                        <div className="w-20">
                            <Image src={require('../../../../../public/assets/images/details-short-1.jpg')} alt="banana" />
                        </div>
                        <div className="w-20">
                            <Image src={require('../../../../../public/assets/images/details-short-2.jpg')} alt="banana" />
                        </div>
                        <div className="w-20">
                            <Image src={require('../../../../../public/assets/images/details-short-3.jpg')} alt="banana" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="head border-b pb-3">
                    <h4 className="text-[40px] font-bold">Marketside Fresh Organic Bananas, Bunch</h4>
                    <div className="flex gap-2 items-center">
                        <div className="flex gap-2 items-center" >

                            <div>
                                <i className="fa fa-star text-[#FACC15]"></i>
                                <i className="fa fa-star text-[#FACC15]"></i>
                                <i className="fa fa-star text-[#FACC15]"></i>
                                <i className="fa fa-star text-[#D1D5DB]"></i>
                                <i className="fa fa-star text-[#D1D5DB]"></i>
                            </div>
                            <p className="py-[2px] px-1 border rounded-lg">3.00</p>
                            <p>2</p>
                        </div>
                        <p>|</p>
                        <div>
                            <p>SKU:E7D7HD973H</p>
                        </div>
                    </div>
                </div>
                <div className="mt-7">
                    <div className="mb-5">
                        <p className="text-sm">Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent Vivamus adipiscing nisl ut dolor dignissim semper.</p>
                        <div className="flex items-baseline gap-1 my-5">
                            <p className="text-3xl text-[#DC2626] font-bold">$0.80</p>
                            <del className="text-xl">$1.99</del>
                        </div>

                        <button className="py-3 px-7  bg-[#16A34A] rounded-xl text-[#ffffff] font-semibold">Order on Whatsapp</button>
                    </div>
                    <div className="flex items-center py-3 px-4 gap-5  bg-[#FFEDD5] border border-[#FED7AA] rounded-lg">
                        <p className="text-[#EA580C] font-bold text-lg">Special Offer: </p>
                        <div className="flex items-center gap-1">
                            <p className="w-[40px] aspect-square flex items-center justify-center bg-[#FFEDD5] border border-[#FED7AA] rounded-lg text-[#C2410C] font-semibold">81</p>
                            <p className="w-[40px] aspect-square flex items-center justify-center bg-[#FFEDD5] border border-[#FED7AA] rounded-lg text-[#C2410C] font-semibold">06</p>
                            <p className="w-[40px] aspect-square flex items-center justify-center bg-[#FFEDD5] border border-[#FED7AA] rounded-lg text-[#C2410C] font-semibold">50</p>
                            <p>:</p>
                            <p className="w-[40px] aspect-square flex items-center justify-center bg-[#FFEDD5] border border-[#FED7AA] rounded-lg text-[#C2410C] font-semibold">02</p>
                        </div>
                        <p className="text-[#6B7280]">Remains until the end of the offer.</p>
                    </div>
                    <div className="flex items-center h-[48px] gap-[10px] my-4">
                        <div className="flex items-center h-full border border-[#D1D5DB] rounded-lg">
                            <button className="h-full px-5">-</button>
                            <p>1</p>
                            <button className="h-full px-5">+</button>
                        </div>
                        <div className="h-full px-9 flex items-center text-[#ffffff] bg-[#16A34A] rounded-lg">
                            <i className="fa fa-"></i>
                            <p className="font-bold text-base">Add to cart</p>
                        </div>
                        <div className="h-full px-9 flex items-center text-[#ffffff] bg-[#212529] rounded-lg">
                            <i className="fa fa-"></i>
                            <p className="font-bold text-base">Buy Now</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="border border-[#E5E7EB] rounded-xl my-5">
                        <div className="flex p-5 gap-10 border-b">
                            <div className="text-3xl">
                                <i className="fa fa-shopping-cart"></i>
                            </div>
                            <p className="text-[#6B7280]"><span className="text-lg font-semibold text-[#5a5f69]">Payment.</span>Payment upon receipt of goods, Payment by card in the department, Google Pay, Online card, -5% discount in case of payment</p>
                        </div>
                        <div className="flex p-5 gap-10">
                            <div className="text-3xl">
                                <i className="fa fa-shopping-cart"></i>
                            </div>
                            <p className="text-[#6B7280]"><span className="text-lg font-semibold text-[#5a5f69]">Warranty.</span> The Consumer Protection Act does not provide for the return of this product of proper quality.</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-[50px] aspect-square flex justify-center items-center border border-[#E5E7EB] rounded-xl text-2xl">
                                <i className="fa fa-heart"></i>
                            </div>
                            <p className="text-lg">Add to Wishlist</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-[50px] aspect-square flex justify-center items-center border border-[#E5E7EB] rounded-xl text-2xl">
                                <i className="fa fa-heart"></i>
                            </div>
                            <p className="text-lg">Share This Product</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-[50px] aspect-square flex justify-center items-center border border-[#E5E7EB] rounded-xl text-2xl">
                                <i className="fa fa-heart"></i>
                            </div>
                            <p className="text-lg">Compare</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail