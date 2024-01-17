"use client"

import Link from "next/link"


export default function TextInput({string, placeholder, error, onUpdate}){

    return (
        <>

                <input
                
                    placeholder={placeholder}
                    className="
                        w-full
                        bg-white
                        text-gray-800
                        border
                        text-sm
                        border-[#272727]
                        p-3
                        
                    "

                
                />
        
        
        
  
        </>
       
    )
}