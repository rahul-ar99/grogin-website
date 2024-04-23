import Image from "next/image"
import logo from '../../../../../public/assets/images/logo.png'

const MainHeader = () =>{
    return <div className="w-full border-b border-b-gray-500">
        <div className="wrapper">
            <div className="flex justify-between max-w-full py-7">
                <div className="flex gap-10">
                    <h1>
                        <a href="">
                            <Image  src={logo}
                                    width={200}
                                    alt="Logo"/>
                        </a>
                    </h1>
                    <div className="flex">
                        <div className="bg-gray-200 rounded-full  w-[60px] aspect-square flex items-center justify-center">
                            <i className="fa fa-map-marker" style={{ fontSize: '30px' }}></i>
                        </div>
                        <div>
                            <p>Deliver To</p>
                            <p>All</p>
                        </div>
                    </div>
                </div>
                <div className='flex w-[50%]  bg-gray-200 items-center rounded-xl px-3'>
                    <input type="text" className='w-[95%] bg-transparent h-full outline-none text-xl' placeholder="Search for products, categories or brands..."/>
                    <div className="p-4">
                        <i className="fa fa-search" style={{ fontSize: '24px' }}></i>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <div>
                        <a href=""  className="flex flex-col items-center">
                            <i className="fa fa-user-o" style={{fontSize: '24px'}}></i>
                            <p>Account</p>
                        </a>
                    </div>
                    <div>
                        <a href=""  className="flex flex-col items-center">
                            <i className="fa fa-heart-o" style={{fontSize: '24px'}}></i>
                            <p>Wishlist</p>
                        </a>
                    </div>
                    <div>
                        <a href=""  className="flex flex-col items-center">
                            <i className="fa fa-shopping-cart" style={{fontSize: '24px'}}></i>
                            <p>Your Cart</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default MainHeader