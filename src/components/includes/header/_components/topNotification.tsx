'use client'

import { useEffect, useState } from "react"

const Notification = ()=>{

    const futureDate = new Date('2024-07-28T00:00:00');
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = futureDate.getTime() - now.getTime();
  
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
  
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      } else {
        // If the future date is in the past, reset everything to 0
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    };
  
    useEffect(() => {
      const timerId = setInterval(calculateTimeLeft, 1000);
  
      // Clear interval on component unmount
      return () => clearInterval(timerId);
    }, []);






    return <div className='w-full bg-[#634C9F] text-white'>
        <div className="wrapper">
            <div className="w-full text-sm flex flex-wrap justify-around py-3 max-980:text-xs">
                <p>FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.</p>
                <p>Until the and of the sale <span className="font-bold mx-2 text-base max-640:mx-0">{days}</span> days <span className="font-bold mx-2 text-base max-640:mx-0">{hours}</span> hours <span className="font-bold mx-2 text-base max-640:mx-0">{minutes}</span> minutes <span className="font-bold mx-2 text-base max-640:mx-0">
                   {seconds}</span> sec</p>
            </div>
        </div>
    </div>
}

export default Notification