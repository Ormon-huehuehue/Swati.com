"use client"

import Discount from "@/components/Discount";
import Products from "@/components/Products";
import Image from "next/image";
import BundleBar from "@/components/BundleBar";


const DISCOUNT_TIERS = [
  { minItems: 3, percentage: 33 },
  { minItems: 6, percentage: 44 },
  { minItems: 9, percentage: 50 },
]

export default function Home() {
  return ( 
    <div className="min-h-screen pb-[70px]">
      <section className=  'bg-background flex flex-col py-5 sm:mx-[100px] rounded-lg h-auto'>
        <h1 className="text-center w-full text-[3vw] sm:text-[1.5vw] xl:text-[1vw] mt-2 font-palanquin"> THE MORE YOU ADD, THE MORE YOU SAVE</h1>
        <h1 className="font-bold text-center w-full sm:text-[5vw] text-[7vw] font-montserrat"> BUILD A CUSTOM PACK</h1>
        <div className = 'flex justify-center gap-[8vw] w-auto'>
          {DISCOUNT_TIERS.map((item, index)=>((
            <Discount items={item.minItems} discount={item.percentage} key={index}/>
          )))}
        </div>
      </section>

      <section>
        <Products/>
      </section>
      <BundleBar/>  
    </div>
  );
}
