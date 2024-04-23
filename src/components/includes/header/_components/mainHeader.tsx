import Image from "next/image"

const MainHeader = () =>{
    return <div className="w-full">
        <div className="wrapper">
            <div className="flex justify-between max-w-full py-3
            ">
                <div className="flex">
                    <h1>
                        <a href="">
                            <Image  src={require('../../../../../public/assets/images/logo.png')}
                                    width={200}
                                    alt="Logo"/>
                        </a>
                    </h1>
                    <div>
                        <div>
                            <i></i>
                        </div>
                        <div>
                            <p>Deliver To</p>
                            <p>All</p>
                        </div>
                    </div>
                </div>
                <div className='min-w-max'>
                    <input type="text" className='min-w-max'/>
                </div>
                <div className="flex gap-4">
                    <div>
                        <a href="">
                            <i></i>
                            <p>Account</p>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <i></i>
                            <p>Wishlist</p>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <i></i>
                            <p>Your Cart</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default MainHeader