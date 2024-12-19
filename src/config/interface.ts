import Products from "@/components/Products";

// Interface for price
interface Price {
    amount: string;
    currencyCode: string;
  }
  
  // Interface for product variant
  interface ProductVariant {
    id: string;
    title: string;
    price: Price;
  }
  
  // Interface for image node
  interface ImageNode {
    url: string;
  }
  
  // Interface for image edges
  interface ImageEdge {
    node: ImageNode;
  }
  
  // Interface for variant edges
  interface VariantEdge {
    node: ProductVariant;
  }
  
  // Interface for images
  export interface Images {
    edges: ImageEdge[];
  }
  
  // Interface for variants
  export interface Variants {
    edges: VariantEdge[];
  }
  
  // Interface for product node
  export  interface ProductNode {
    id: string;
    title: string;
    descriptionHtml: string;
    images: Images;
    variants: Variants;
  }
  
  // Interface for product edges
  export interface ProductInterface {
    node: ProductNode;
  }
  
  export interface Products{
    products : ProductInterface[]
  }
