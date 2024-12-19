"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { ProductNode } from '@/config/interface';

const CustomCarousel = ({ product }: { product: ProductNode }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const imageUrl = product.images.edges[0].node.url;

  const rawHTML = product.descriptionHtml;
  const description = rawHTML.replace(/<\/?p>/g, '');

  return (
    <motion.div
      className="relative flex items-center justify-center overflow-hidden bg-gray-100 rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        width: isHovered ? 300 : 200,
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
          className="absolute w-full h-full object-cover"
          style={{ filter: "blur(0px) opacity(1)" }}
          whileHover={{ filter: "blur(1px) opacity(0.1)" }}
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
            transition={{ duration: 0.3 }}
          >
            {product.title}
          </motion.h1>
        )}
      </AnimatePresence>

      {/* Description Overlay */}
      <AnimatePresence>
  {isHovered && (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-[0.02] text-[12px] text-center px-4 py-2 rounded-lg pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0}}
      transition={{ duration: 0.2, delay: 0.2}} 
    >
      <p className="text-sm">{description}</p>
    </motion.div>
  )}
</AnimatePresence>


      {/* Hover button */}
      {isHovered && (
        <motion.button
          className="absolute top-3 right-3 font-bold font-sans text-white"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1.3 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaRegArrowAltCircleRight />
        </motion.button>
      )}
    </motion.div>
  );
};

export default CustomCarousel;
