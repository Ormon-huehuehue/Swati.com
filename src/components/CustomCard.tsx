"use client";

import React, {useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCartPlus } from "react-icons/fa6";

import { ProductNode } from '@/config/interface';
import { useRecoilState, useRecoilValue } from "recoil";

const CustomCarousel = ({ product }: { product: ProductNode }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const imageUrl = product.images.edges[0].node.url;

  const rawHTML = product.descriptionHtml;
  const description = rawHTML.replace(/<\/?p>/g, '');
  const id = product.id


  const addToCart = () => {
    let productArrayString = localStorage.getItem("products");
    const productArray = productArrayString ? JSON.parse(productArrayString) : [];
  
    console.log("ProductArray:", productArray);
  
    // Check if the product already exists in the cart
    const productExists = productArray.some((product: ProductNode) => product.id === id);
    if (productExists) {
      console.log("Product is already in cart");
      return;
    }
  
    // Add the product to the cart
    productArray.push(product);
  
    // Save the updated array back to localStorage
    localStorage.setItem("products", JSON.stringify(productArray));
  
    console.log("Product added to cart");
  };


  return (
    
    <motion.div
      className="relative w-full max-w-xl flex items-center justify-center overflow-hidden bg-gray-100 rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        width: 300,
        height: 288,
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      {/* Image container */}
      <motion.div
        className="w-full h-full flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          duration: 0.5,
        }}
      >
        <motion.img
          src={imageUrl}
          alt="Carousel image"
          className={`absolute w-full h-full object-cover ${isHovered ? "opacity-0" : "opacity-100"}  transition-all duration-200`}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Title */}
      <AnimatePresence>
        {!isHovered && (
          <motion.h1
            className="absolute top-3 left-3 font-semibold text-gray-700 font-montserrat text-wrap w-[80%] text-[13px]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {product.title}
          </motion.h1>
        )}
      </AnimatePresence>

      {/* Description Overlay */}
      <AnimatePresence>
  {isHovered && (
    <motion.div
      className="absolute inset-0 items-center justify-center bg-black bg-opacity-[0.2] text-[12px] text-center px-4 py-5 rounded-lg pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0}}
      transition={{ duration: 0.1, delay:0.1}} 
    >
      <p className="text-sm">{description}</p>
    </motion.div>
  )}
</AnimatePresence>


      {/* Hover button */}
      {isHovered && (
        <motion.button
          className="absolute flex bottom-8 md:text-[1vw] text-[0.6rem] rounded-md hover:bg-grayish font-montserrat px-2 py-2 justify-center items-center gap-2 bg-checkoutButton text-white"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.3 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.5,
          }}
          onClick={addToCart}
        >
            Add to cart
          <FaCartPlus />
        </motion.button>
      )}
    </motion.div>
  );
};

export default CustomCarousel;
