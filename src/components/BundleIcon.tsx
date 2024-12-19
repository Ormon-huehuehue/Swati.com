"use client"

import { ProductNode } from '@/config/interface'
import React from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from 'framer-motion';




const BundleIcon = ({product} : {product : ProductNode}) => {

    const imageUrl = product.images.edges[0].node.url;

    const rawHTML = product.descriptionHtml;
  
    const id = product.id

    const removeFromCart = () => {
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
    
  return (
    <div className= 'flex max-h-[50px] overflow-clip relative justify-center items-center'>
        <img src={imageUrl} className="object-cover w-auto h-[100px] top-0" />
        <motion.button className= 'absolute top-0 right-5'
        onClick={removeFromCart}
        >
            {/* <RxCrossCircled color={"#504137"}/> */}
            <IoIosCloseCircle color={"#504137"}/>

        </motion.button>

    </div>
  )
}

export default BundleIcon