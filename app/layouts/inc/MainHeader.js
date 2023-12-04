"use client"
import Link from "next/link"
import { BiLoaderCircle } from "react-icons/bs"
import { AiOutlineSearch } from "react-icons/ai"

export default function MainHeader () {
    return (
        <>
        
        <div id="MainHeader" className="border-b ">
            <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                <div className="flex items-center w-full bg-[#e2cfea]">
                    <div className="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full mx-auto px-3 py-5 ">
                        <Link href="/">
                            <img src="/images/logo.svg" width="120" alt="" />
                        </Link>
                        <div className="w-full">
                            <div className="relatove">
                                <div className="flex items-center">
                                    <div className="relative flex items-center border-2  border-gray-500 w-full p-2">
                                        <button className="flex items-center">
                                                <AiOutlineSearch size={22}/>
                                       </button>

                                       <input type="text "
                                       className="w-full
                                       placeholder-gray-400
                                       text-sm
                                       pl-3
                                       focus:outline-none
                                       bg-[#e2cfea]"
                                       placeholder="Search"

                                        />
                        
                                    </div>

                                    <button className="flex items-center bg-[#212121] text-sm font-semibold text-white p-[11px] ml-2 px-14">
                                            Search
                                    </button>
                                    <div className="text-xs px-2 hover:text-blue-500 cursor-pointer">
                                        Advanced
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
               

                
            </div>
        </div>
        
        </>
    )

}