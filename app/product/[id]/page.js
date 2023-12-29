"use client"

import MainLayout from "@/app/layouts/MainLayout"


export default function Product({ params }) {

        
    const product = {

        
          id:1, 
          title:"brown leather bag", 
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
          url:"https://picsum.photos/id/2",
          price: 250
        
    
     }
    
    
    
    return (
            <>
            
                <MainLayout>
                    <div className="max-w-width[1200px] mx-auto">
                        <div className="flex px-4 py-10" >

                            { product?.url 
                            ? <img className="w-[40%] rounded-lg" src={product?.url+'/280'} /> 
                            : <div className="w-[40%] rounded-lg" ></div>  
                            }

                        <div className="px-4 w-full" >
                            <div className="font-bold text-xl">{product?.title}</div>
                            <div className="text-gray-700 text-sm pt-2">Used on Occasion</div>

                            <div className="border-b py-1"></div>

                            <div className="pt-3 pb-2">
                                <div className="flex items-center">
                                    Condition: <span className="font-bold text-[17px] ml-2">New</span>
                                </div>
                            </div>

                            <div className="border-b py-1"></div>

                            <div className="pt-3">
                                <div className="w-full flex items-center justify-between">
                                    <div className="flex items-center">
                                        Price: 
                                        {product?.price 
                                        ? <div className="font-bold text-[17px] ml-2">
                                            EUR € {(product?.price/ 100).toFixed(2)}
                                        </div>
                                        :  null }
                                        
                                    </div>

                                    
                                    <button className=" bg-[#3498C9]
                                     text-white py-2 px-20 rounded-full cursor-pointer">
                                            Add to Cart
                                    </button>
                                </div>
                            </div>

                            <div className="border-b py-1" />
                                    
                                    <div className="pt-3">
                                            <div className="font-semibold pb-1">
                                                Description:
                                            </div>
                                            <div className=" text-gray-700 text-sm pt-2">{product?.description}</div>
                                    </div>


                        </div>


                            

                        </div>


                        </div>
                    
                

                </MainLayout>
            
            
            
            
            </>
        )

}