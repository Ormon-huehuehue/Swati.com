import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
      console.log("product api called");

      const body = req.body
      console.log("Body :", body)
  
      const response = await axios.post(
        'https://swaticosmetics-test.myshopify.com/api/2023-10/graphql.json',
        {
            "query": "query { products(first: 12) { edges { node { id title descriptionHtml images(first: 5) { edges { node { url } } } variants(first: 5) { edges { node { id title price { amount currencyCode } } } } } } } }"
        },
        {
          headers: {
            'X-Shopify-Storefront-Access-Token':process.env.STOREFRONT_ACCESS_TOKEN,
            'Content-Type': 'application/json',
          }
        }
      );
  
      console.log("response.data : ", response.data);
  
      return NextResponse.json(response.data, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error("Error in products route : ", error);
      return NextResponse.json({
        error: "An error occurred while fetching product data"
      });
    }
  }
  
