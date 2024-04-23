import Image from "next/image"
import footerLink1 from '../../../../../public/assets/images/footer-link-1.png'
import footerLink2 from '../../../../../public/assets/images/footer-link-2.png'
import footerLink3 from '../../../../../public/assets/images/footer-link-3.png'
import footerLink4 from '../../../../../public/assets/images/footer-link-4.png'
import footerLink5 from '../../../../../public/assets/images/footer-link-5.png'

const Bottom = () =>{
    return <div className="w-full">
        <div className="wrapper">
            <div className="flex justify-between py-12 text-xs">
                <div className="">
                    <p className="mb-8">Copyright 2024 © Grogin WooCommerce WordPress Theme. All right reserved. Powered by <span className="text-[#634C9F]">KLBTheme.</span></p>
                    <div className="flex gap-2">
                        <Image src={footerLink1}
                                height={15}
                                alt="collaborationCompanies"/>
                        <Image src={footerLink2}
                                height={15}
                                alt="collaborationCompanies"/>
                        <Image src={footerLink3}
                                height={15}
                                alt="collaborationCompanies"/>
                        <Image src={footerLink4}
                                height={15}
                                alt="collaborationCompanies"/>
                        <Image src={footerLink5}
                                height={15}
                                alt="collaborationCompanies"/>
                    </div>
                </div>
                <div className="right">
                    <div className="flex gap-3">
                        <a className="underline" href="terms">Terms and Conditions</a>
                        <a className="underline" href="privacy">Privary Policy</a>
                        <a className="underline" href="tracking">Order Tracking</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Bottom