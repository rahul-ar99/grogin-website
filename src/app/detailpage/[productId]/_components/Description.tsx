'use client'
import Image from "next/image"
import userImg from '../../../../../public/assets/images/user.png'
import { useState } from "react"


const Description = () =>{

    const [descState, setDescState] = useState(true)

    return <div className="py-20">
                    <div className="flex gap-7 mb-5 border-b-2 border-b-[#E5E7EB]   ">
                    <p className={`py-4 text-lg cursor-pointer ${descState?'border-b-2 border-[#030712]':''}`} onClick={()=>setDescState(true)}>Description</p>
                    <p className={`py-4 text-lg cursor-pointer ${!descState?'border-b-2 border-[#030712]':''}`} onClick={()=>setDescState(false)}>Reviews {'(2)'}</p>
                </div>
                {descState ?
                    <div className="flex flex-col gap-4">
                        <p>Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.</p>
                        <p>Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies cursus ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet consequat nulla felis pharetra lacus. Duis semper erat mauris, sed egestas purus commodo vel</p>
                    </div> 
                    :
                    <div className="">
                        <div className="flex gap-5 mb-3">
                            <div className="w-[50px]">
                                <Image src={userImg} alt="userImage" />
                            </div>
                            <div>
                                <p className="font-semibold">name</p>
                                <p>Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a.</p>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-3">
                            <div className="w-[50px]">
                                <Image src={userImg} alt="userImage" />
                            </div>
                            <div>
                                <p className="font-semibold">name</p>
                                <p>Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a.</p>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-3">
                            <div className="w-[50px]">
                                <Image src={userImg} alt="userImage" />
                            </div>
                            <div>
                                <p className="font-semibold">name</p>
                                <p>Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a.</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
}

export default Description