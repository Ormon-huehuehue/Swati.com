"use client"

import React, { useEffect, useState } from 'react';

import { ProductNode } from '@/config/interface'
import { IoCaretBackCircle } from "react-icons/io5";
import Link from 'next/link';

import CustomCarousel from './CustomCard';




const Cart = () => {
    const [products, setProducts] = useState<ProductNode[]>([])
  const [loading, setLoading] = useState(false);

  const removeFromCart = (id:string) => {
    let productArrayString = localStorage.getItem("products");
    const productArray = productArrayString ? JSON.parse(productArrayString) : [];
  
    console.log("ProductArray:", productArray);
  
    // Check if the product exists in the cart
    const updatedProductArray = productArray.filter(
      (storedProduct: ProductNode) => storedProduct.id !== id
    );
  
    // Save the updated array back to localStorage
    localStorage.setItem("products", JSON.stringify(updatedProductArray));
  
    console.log("Product removed from cart");
  };


    useEffect(()=>{
        setInterval(()=>{
          const productsInCart = localStorage.getItem("products");
          const productArray = productsInCart? JSON.parse(productsInCart) : []
          setProducts(productArray)
        },1000)
      },[])

      if(products)
  return (
    <div className= 'h-screen w-screen flex flex-col p-10'>
        <div className='absolute top-5 left-5'>
            <Link href="/">
                <IoCaretBackCircle size={40} />
            </Link>
        </div>  
        <h1 className="text-sm md:text-xl font-bold font-montserrat mt-[50px]">CART</h1>
    <ul className= 'flex md:py-7 py-4 flex-wrap gap-5 justify-start px-4'>
        {/* {products?.map(product=>((
            <ProductCard product={product.node} key={product.id}/>
        )))} */}
         {products?.map((product,index)=>((
            <div key={index} className = 'flex'>
                <CustomCarousel product={product} key={index}/>
                <div className= ' flex flex-col'>
                    <button onClick={()=>removeFromCart(product.id)} className = "bg-grayish py-3 px-8 ml-10 text-white rounded-lg">
                        REMOVE FROM CART
                    </button>
                </div>
            </div>
        )))}
      </ul>
    </div>
  );
  else{
    null
  }
};

export default Cart;
