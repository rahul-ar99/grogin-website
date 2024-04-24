import Image from "next/image"
import banner from '../../../../../public/assets/images/banner.jpg'


const BannerSection = () =>{
    return  <div>
                <div className="relative">
                    <div className="rounded-xl overflow-hidden">
                        <Image src={banner} alt="banner"/>
                    </div>
                    <div className="absolute top-10 left-10">
                        <div>
                            <span className="text-xs bg-[#FFEDD5] p-1 rounded-xl">Only This Week</span>
                            <h3 className="text-3xl mt-5 mb-2">Grocery store with different <br /> treasures</h3>
                            <p className="mb-5">We have prepared special discounts for you on grocery <br />products...</p>
                            <a href="" className="py-2 px-4 rounded-3xl bg-white border">Shop Now <i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
}

export default BannerSection