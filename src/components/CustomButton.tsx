import React from 'react'
import { motion } from 'framer-motion'

const CustomButton = ({label} : {label : string})  => {
  return (
    <motion.div 
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        className= 'bg-weed text-grayish font-medium rounded-sm justify-center items-center w-[4rem] md:w-[7rem] xl:w-[10rem] py-3 text-[10px] md:text-xl'
    >
        {label}
    </motion.div>
  )
}

export default CustomButton