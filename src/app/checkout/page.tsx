"use client"

import Discount from "@/components/Discount";
import Cart from "@/components/Cart";
import Image from "next/image";
import BundleBar from "@/components/BundleBar";




export default function Home() {
  return ( 
    <div className="min-h-screen pb-[70px]">
      <section>
        <Cart/>
      </section>
      <BundleBar/>  
    </div>
  );
}
