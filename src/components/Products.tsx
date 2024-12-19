"use client"

import React, { useEffect, useState } from 'react';
import {  ProductInterface, Products as ProductArray} from '@/config/interface'
import axios from 'axios';
import { ProductCard } from './ProductCard';
import CustomButton from './CustomButton';
import {CATEGORIES_CONFIG} from "../config/constants"
import CustomCarousel from './CustomCard';
import { motion } from 'framer-motion';



const Products = () => {
  const [products, setProducts] = useState<ProductInterface[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("6")

    const onClickHandler= (category:string)=>{

        console.log("Category -", category)
        setCategory(category)
    }

  useEffect(() => {
    
    const fetchProducts = async () => {
        try {
            const response = await axios.post('/api/shopify/products', {
                category
              });
      
          console.log('Products:', response.data.data.products.edges);
          
        
          setProducts(response.data.data.products.edges)
          
        } catch (error) {
          console.error('Error fetching products:', error);
          return null;
        }
      };

      fetchProducts()

  }, [category]);


  return (
    <div className= 'flex flex-col mb-50'>
      <h1 className= "font-bold text-4xl font-palanquin text-center py-5">CATEGORIES</h1>

      <div className='flex justify-center md:gap-10 gap-2 flex-wrap px-5 py-2'>
        {CATEGORIES_CONFIG.map((category, index)=>((
            <div key={index}>
                <motion.button 
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    onClick={()=>onClickHandler(category.value)}
                    className= 'bg-weed text-grayish font-medium rounded-sm justify-center items-center w-[4rem] md:w-[7rem] xl:w-[10rem] py-3 text-[10px] md:text-xl'
                >
                    {category.label}
                </motion.button>
            </div>
        )))}
      </div>
      <h6 className= 'font-bold md:text-4xl font-montserrat text-start py-2 md:py-5 pl-[8vw] mt-2 md:mt-5 text-md'>FIRST {category} PRODUCTS</h6>

      <ul className= 'flex md:py-7 py-4 flex-wrap gap-5 justify-center px-4'>
        {/* {products?.map(product=>((
            <ProductCard product={product.node} key={product.node.id}/>
        )))} */}
         {products?.map(product=>((
            <CustomCarousel product={product.node} key={product.node.id}/>
        )))}
      </ul>
    </div>
  );
};

export default Products;
