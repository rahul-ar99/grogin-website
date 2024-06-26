

const NewsLetter = () =>{
    return <div className="w-full">
        <div className="wrapper">
            <div className="flex justify-between items-center py-8 border-b gap-y-5 max-[640px]:text-sm max-786:flex-col max-786:items-start ">
                <div className="w-min">
                    <h5 className="whitespace-nowrap text-xl font-bold mb-2">Join our newsletter for £10 offs</h5>
                    <p className="text-xs">Register now to get latest updates on promotions & coupons.Dont worry, we not spam!</p>
                </div>
                <div className="w-max flex flex-col items-end max-786:items-start max-[640px]:items-start">
                    <div className="flex border rounded-xl overflow-hidden ">
                        <div className="p-3">
                            <i className="fa fa-envelope"></i>
                            <input type="text"  className="outline-none w-[300px] text-base mx-3 max-640:w-[200px] max-640:text-sm bg-transparent" placeholder="Enter your email address"/>
                        </div>
                        <button className=" bg-[#634C9F] text-white px-4 font-bold max-[640px]:text-sm">SENT</button>
                    </div>
                    <div>
                        <p className="text-xs flex max-480:flex-col">By subscribing you agree to our <a href="" className="text-[#634C9F]"> Terms & Conditions and Privacy & Cookies Policy.</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default NewsLetter