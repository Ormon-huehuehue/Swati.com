"use client"
import React, { useEffect, useState } from 'react'
import CheckoutButton from './CheckoutButton'
import { ProductNode } from '@/config/interface'
import BundleIcon from './BundleIcon'
import { CiShoppingCart } from "react-icons/ci";


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
    products.map((item, index) => (
      <BundleIcon product = {item} key={item.id}/>
    ))
  ) : (
    
    <p className= ' flex justify-center items-center gap-2 font-montserrat'><CiShoppingCart />
Cart empty</p>
  )}
</div>
    
        <CheckoutButton/>
      </div>
    </div>
  )
}

export default BundleBar