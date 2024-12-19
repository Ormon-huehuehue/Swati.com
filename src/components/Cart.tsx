"use client"

import React, { useEffect, useState } from 'react';

import { ProductNode } from '@/config/interface'
import { IoCaretBackCircle } from "react-icons/io5";
import Link from 'next/link';

import CartCard from './CartCard';
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
    <div className= 'max-h-screen max-w-screen flex flex-col  '>
        <div className='flex flex-col w-fit py-4 pl-2'>
            <Link href="/">
                <IoCaretBackCircle size={40} />
            </Link>
            <h1 className="text-lg md:text-4xl font-bold font-montserrat h-fit  pl-1">CART</h1>
        </div>  
        
    <ul className= 'flex md:py-7 py-4 flex-wrap gap-5 md:justify-start'>
        {/* {products?.map(product=>((
            <ProductCard product={product.node} key={product.id}/>
        )))} */}
            <div  className= 'flex flex-col gap-5 md:mx-0 items-center justify-center md:justify-start md:items-start h-[70%] w-full md:pl-10'>
         {products?.map((product,index)=>((
                <div key={index} className = 'flex border-2 rounded-lg max-w-lg flex-col md:flex-row'>
                    <CustomCarousel product={product} key={index}/>
                    <div className= ' flex flex-col py-5 px-2 relative gap-5 items-center'>
                        <h1 className='text-sm md:text-xl font-semibold font-montserrat px-1 text-grayish'>{product.title}</h1>
                       
                        <button onClick={()=>removeFromCart(product.id)} className = " md:text-sm text-[10px] bg-grayish py- p-4 ml-5 text-white rounded-lg">
                            REMOVE FROM CART
                        </button>
                    </div>
                </div>
        )))}
        {products.length == 0 && (
            <div className='text-2xl text-black/20 flex mx-auto'>
                Cart Is Empty
            </div>
        )}
        </div>
      </ul>
    </div>
  );
  else{
    null
  }
};

export default Cart;

const DescriptionElement = ({product}:{product: ProductNode})=>{

    const rawHTML = product.descriptionHtml;
    const description = rawHTML.replace(/<\/?p>/g, '');

    return (
        <div>
            {description}
        </div>
    )
}
