"use client"
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion'

const CheckoutButton = () => {

     const label = "CHECK OUT"
  return (
    <motion.button 
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        className= 'font-medium justify-center items-center text-[10px] md:text-sm'
    >
       <div className= ' flex bg-checkoutButton rounded-sm py-3 md:px-8 px-4 font-medium text-white font-palanquin items-center gap-2'> 
            <FaArrowRightLong />
            {label}
        </div>
    </motion.button>
  )
}

export default CheckoutButton