"use client"

import React, { useEffect, useState } from 'react';
import {  ProductInterface, Products as ProductArray} from '@/config/interface'
import axios from 'axios';
import { ProductCard } from './ProductCard';
import CustomButton from './CustomButton';
import {CATEGORIES_CONFIG} from "../config/constants"


const Products = () => {
  const [products, setProducts] = useState<ProductInterface[] | null>(null);
  const [loading, setLoading] = useState(false);

 

  useEffect(() => {
    
    const fetchProducts = async () => {
        try {
          const response = await axios.post(
            '/api/shopify/products',
            {
                "query": "query { products(first: 10) { edges { node { id title descriptionHtml images(first: 5) { edges { node { url } } } variants(first: 5) { edges { node { id title price { amount currencyCode } } } } } } } }"
            }
          );
      
          console.log('Products:', response.data.data.products.edges);
          
        
          setProducts(response.data.data.products.edges)
          
        } catch (error) {
          console.error('Error fetching products:', error);
          return null;
        }
      };

      fetchProducts()

  }, []);


  return (
    <div className= 'flex flex-col '>
      <h1 className= "font-bold text-xl font-montserrat">Categories</h1>
      <div className='flex justify-center gap-10'>
        {CATEGORIES_CONFIG.map((category, index)=>((
            <CustomButton label={category} key={index}/>
        )))}
      </div>
      <ul className= 'flex py-5 flex-wrap gap-5 justify-start px-4'>
        {products?.map(product=>((
            <ProductCard product={product.node} key={product.node.id}/>
        )))}
      </ul>
    </div>
  );
};

export default Products;
