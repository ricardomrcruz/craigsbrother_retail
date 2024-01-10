"use client";

import MainLayout from "../layouts/MainLayout";
import CheckoutItem from "../components/CheckoutItem";

export default function Checkout() {


  return (
    <>
      <MainLayout>
        <div id="CheckoutPage" className="mt-4 max-w-[1100px] mx-auto">
          <div className="text-2xl font-bold mt-4 mb-4">Checkout</div>

          <div className="relative flex items-baseline gap-4 justify-between mx-auto w-full">
            <div className="w-[45%]">
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-xl font-semibold mb-2">
                  Shipping Address
                </div>
              </div>

              <div>
                <ul className="text-sm mt-2">
                  <li>Name: Test</li>
                  <li>Address: Test</li>
                  <li>Zipcode: Test</li>
                  <li>City: Test</li>
                  <li>Country: Test</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg mt-4">
                <CheckoutItem key={product.id} product={product} />
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
