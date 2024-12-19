import React from 'react'
import { motion } from 'framer-motion'

const CustomButton = ({label} : {label : string}) => {
  return (
    <motion.button 
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        className= 'bg-weed rounded-md justify-center items-center md:w-[7rem] xl:w-[10rem] py-3 text-xl'
    >
        {label}
    </motion.button>
  )
}

export default CustomButton