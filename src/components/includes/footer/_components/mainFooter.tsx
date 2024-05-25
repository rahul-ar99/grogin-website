"use client"
import Image from "next/image"
import footerImage1 from '../../../../../public/assets/images/facebook.png'
import footerImage2 from '../../../../../public/assets/images/twitter.png'
import footerImage3 from '../../../../../public/assets/images/instagram.png'
import footerImage4 from '../../../../../public/assets/images/linkedin.png'
import googlePlay from '../../../../../public/assets/images/googleplay.jpg'
import appStore from '../../../../../public/assets/images/appstore.jpg'

const MainFooter = () =>{
    return <div className="w-full">
            <div className="wrapper">
                <div className="flex justify-between text-base py-12 border-b flex-wrap gap-y-10 max-640:gap-y-5">
                    <div className="w-[20%] max-980:w-[30%] max-640:w-[50%] max-480:w-full flex flex-col gap-2 max-[980px]:w-[50%]  max-1280:text-sm">
                        <h6 className="text-xl font-semibold text-black">Do You Need Help?</h6>
                        <p>Autoseligen syr. Nek diarask fröbomba. Nörantipol kynoda nynat. Pressa fåmoska.</p>
                        <div className="flex flex-col gap-5 mt-4">
                            <div  className="flex items-center">
                                <div className="mr-4">
                                    <i className="fa fa-phone" style={{fontSize: '30px'}}></i>
                                </div>
                                <div>
                                    <p>Monday-Friday: 08am-9pm</p>
                                    <p className="font-black text-semibold text-xl">0 800 300-353</p>
                                </div>
                            </div>
                            <div className="flex items-c    enter">
                                <div className="mr-4">
                                    <i className="fa fa-envelope-o" style={{fontSize: '30px'}}></i>
                                </div>
                                <div>
                                    <p>Need help with your order</p>
                                    <p className="font-black text-semibold">info@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[20%]  max-980:w-[30%] max-640:w-[50%] max-480:w-full flex flex-col gap-2 max-[980px]:hidden max-1280:text-sm">
                        <h6 className="text-xl font-semibold text-black">Make Money with Us</h6>
                        <a href="">sell on Grogin</a>
                        <a href="">Sell Your Service on Grogin</a>
                        <a href="">Sell on Grogin Business </a>
                        <a href="">Sell Your Apps on Grogin </a>
                        <a href="">Become an Affilate </a>
                        <a href="">Advertise Your Products </a>
                        <a href="">Sell-Publish with Us </a>
                        <a href="">Become an Blowwe Vendor</a>
                    </div>
                    <div className="w-[20%]  max-980:w-[30%] max-640:w-[50%] max-480:w-full flex flex-col gap-2 max-[980px]:hidden  max-1280:text-sm">
                        <h6 className="text-xl font-semibold text-black">Let Us Help You</h6>
                        <a href="">Accessibility Statement </a>
                        <a href="">Your Orders </a>
                        <a href="">Returns & Replacements </a>
                        <a href="">Shipping Rates & Policies </a>
                        <a href="">Refund and Returns Policy </a>
                        <a href="">Privacy Policy </a>
                        <a href="">Terms and Conditions </a>
                        <a href="">Cookie Settings </a>
                        <a href="">Help Center</a>
                    </div>
                    <div className="w-[20%]  max-980:w-[30%] max-640:w-[50%] max-480:w-full flex flex-col gap-2 max-[980px]:hidden  max-1280:text-sm">
                        <h6 className="text-xl font-semibold text-black">Get to Know Us</h6>
                        <a href="">Career for Grogin </a>
                        <a href="">About Grogin </a>
                        <a href="">Investor Relations </a>
                        <a href="">Grogin Devices </a>
                        <a href="">Customer reviews </a>
                        <a href="">Social Responsibility </a>
                        <a href="">Store Locations</a>
                    </div>
                    <div className="w-[20%]  max-980:w-[30%] max-640:w-[50%] max-480:w-full flex flex-col gap-2  max-[980px]:w-[50%]  max-1280:text-sm">
                        <h6 className="text-xl font-semibold text-black">Download our App </h6>
                        <div className="flex">
                            <div>
                                <Image src={appStore} alt="Get in AppStore" />
                            </div>
                            <div>
                                <p>Download app get</p>
                                <p>-10% Discount</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div>
                                <Image src={googlePlay} alt="" />
                            </div>
                            <div>
                                <p>Download app get</p>
                                <p>-20% Discount</p>
                            </div>
                        </div>
                        <div>
                            <p>Follow on social media</p>
                            <div className="flex gap-4">
                                <a href="https://www.facebook.com/" className="w-[50px] aspect-square bg-slate-300 flex justify-center items-center rounded-xl"  target="_blank">
                                    <Image className="w-[20px]" src={footerImage1} alt="facebook"/>
                                </a>
                                <a href="https://x.com/?lang=en" className="w-[50px] aspect-square bg-slate-300 flex justify-center items-center rounded-xl" target="_blank">
                                    <Image className="w-[20px]" src={footerImage2} alt="twitter"/>
                                </a>
                                <a href="https://www.instagram.com/" className="w-[50px] aspect-square bg-slate-300 flex justify-center items-center rounded-xl" target="_blank">
                                    <Image className="w-[20px]" src={footerImage3} alt="instagram"/>
                                </a>
                                <a href="https://www.linkedin.com/" className="w-[50px] aspect-square bg-slate-300 flex justify-center items-center rounded-xl" target="_blank">
                                    <Image className="w-[20px]" src={footerImage4} alt="linkedin"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
}

export default MainFooter