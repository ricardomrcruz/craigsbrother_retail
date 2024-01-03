"use client"

import ProductComp from './Product';
import {BiLoader} from 'react-icons/bi';


export default function SimilarProducts(){

    const products = [

        {
          id:1, 
          title:"brown leather bag", 
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
          url:"https://picsum.photos/id/2",
          price: 250
        },
        {
          id:2, 
          title:"bycle veyroy", 
          description: "Lorem Ipsum is sbycuile to rtide in sidewalks yuou know nd typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
          url:"https://picsum.photos/id/67",
          price: 1990
        },
        {
          id:3, 
          title:"random item", 
          description: "Lorem Ipsum is sbycuile to rtide in sidewalks yuofdkgjhfdkhgdikjdfdfdgnsbfgjhsu know nd typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
          url:"https://picsum.photos/id/10",
          price: 177
        },
    
    
      ]

    return (
        <>
        
        
            <div>
                
                <div className="border-b py-1 max-w-[1200px] mx-auto"/>

                <div className="max-w-[1200px] mx-auto">
                    <div className="font-bold text-2xl py-2 mt-4">Similar sponsored items</div>

                    {products.length > 0 ?
                            <div className="grid grid-cols-5 gap-4">
                                {products.map(product => (

                                        <ProductComp key={product.id} product={product} />

                                ))}    
                            </div>
                        : <div className='flex items-center justify-center'>
                            <div className='flex items-center justify-center gap-4 font-semibold' >
                                <BiLoader size={30} className='text-blue-400 animate-spin'/> 
                                Loading Products...
                            </div>
                        </div>}
                    
                </div>



            </div>
        
        

        </>
       
    )
}