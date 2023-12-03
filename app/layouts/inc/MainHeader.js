"use client"
import Link from "next/link"
import { BiLoaderCircle } from "react-icons/bs"
import { AiOutlineSearch } from "react-icons/ai"

export default function MainHeader () {
    return (
        <>
        
        <div id="MainHeader" className="border-b">
            <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                <div className="flex items-center w-full bg-white">
                    <div className="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full mx-auto px-3 py-5 ">
                        <Link href="/">
                            <img src="/images/logo.svg" width="120" alt="" />
                        </Link>
                    </div>

                </div>
               

                
            </div>
        </div>
        
        </>
    )

}