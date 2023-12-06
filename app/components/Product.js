"use client"

import Link from "next/link"


export default function Product({product}){

    return (
        <>
        
        
        <Link 

            href={`/product/${product.id}`}
            className="max-w-[200px] p-1.5 border border-gray-50 hover:border-gray-200 hover:shadow-xl"

        >



        </Link>
        
        
        
        
        
        
        
        
        
        
        </>
       
    )
}