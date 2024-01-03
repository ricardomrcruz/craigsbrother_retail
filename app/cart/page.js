"use client";

import MainLayout from "../layouts/MainLayout";
import SimilarProducts from "../components/SimilarProducts";
import 

export default function Cart() {
  return (
    <>


      <MainLayout>
            <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]" >
                <div className="text-2xl font-bold my-4">Shopping Cart</div>
                <div className="relative flex items-baseline justify-between gap-2">
                    <div className="w-[60%]">
                            <CartItem key>
                    </div>
                </div>

            </div>



        <SimilarProducts />
      </MainLayout>
    </>
  );
}
