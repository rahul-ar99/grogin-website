const TopBar = () =>{
    return <div className="w-full border-b-gray-700 border-b">
                <div className="wrapper">
                    <div className="flex justify-between py-3">
                        <div className="flex">
                            <div className="flex gap-x-5">
                                <a href="">About Us</a>
                                <a href="">My Account</a>
                                <a href="">Wishlist</a>
                            </div>
                            <span className="mx-3">|</span>
                            <p>We deliver to you every day from <span>7:00 to 23:00</span></p>
                        </div>
                        <div>
                            <select name="language" id="languageSelect" className='bg-transparent'>
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                            </select>
                            <select name="money" id="moneyFormat" className="bg-transparent">
                                <option value="usd">USD</option>
                                <option value="inr">INR</option>
                            </select>
                            <a href="">Order Tracking</a>
                        </div>
                    </div>
                </div>
            </div>
}

export default TopBar