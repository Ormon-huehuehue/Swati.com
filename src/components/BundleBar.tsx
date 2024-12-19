"use client"
import React, { useEffect, useState } from 'react'
import CheckoutButton from './CheckoutButton'
import { ProductNode } from '@/config/interface'
import BundleIcon from './BundleIcon'
import { CiShoppingCart } from "react-icons/ci";
import Link from 'next/link'


const BundleBar = () => {

  const [products, setProducts] = useState<ProductNode[]>([])

  useEffect(()=>{
    setInterval(()=>{
      const productsInCart = localStorage.getItem("products");
      const productArray = productsInCart? JSON.parse(productsInCart) : []
      setProducts(productArray)
    },1000)
  },[])

  return (
    <div className= 'fixed bottom-[-7px] w-full py-3 bg-bundlebar rounded-2xl'>
      <div className='flex justify-between px-10 w-screen'>
      <div className="flex">
      {products && products.length > 0 ? (
    <div className="flex">
     
      <p className="relative bottom-[-15px] md:bottom-[-7px] font-medium md:text-lg mb-4 flex text-[10px]">
        Total Products: {products.length}
      </p>
  
      {products.map((item) => (
        <BundleIcon product={item} key={item.id} />
      ))}
    </div>
  ) : (
    <p className="flex justify-center items-center gap-2 font-montserrat">
      <CiShoppingCart />
      Cart empty
    </p>
  )}
    </div>
      <Link href={'/checkout'}>
        <CheckoutButton/>
      </Link> 
      </div>
    </div>
  )
}

export default BundleBar