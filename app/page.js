"use client"

import MainLayout from './layouts/MainLayout';
import CarouselComp from './components/CarouselComp';
import Product from './components/Product';

export default function Home() {
  
  
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
    <MainLayout>
      <CarouselComp />
      <div className="
      max-w-[1200px] mx-auto
      ">

                <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>

                <div className="grid  grid-cols-5 gap-4">
                  {products.map(product =>( 
                    <Product key={product.id} product={product} /> 
                  ))}
                </div>
      </div>
    </MainLayout>
    )
    
  
}
