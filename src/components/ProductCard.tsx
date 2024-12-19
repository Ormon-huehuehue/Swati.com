import { ProductNode } from '@/config/interface';
import { GoPlus } from "react-icons/go";
import { motion } from 'framer-motion';

export function ProductCard({ product }: { product: ProductNode }) {
  const imageUrl = product.images.edges[0].node.url;

  return (
    <div className="flex flex-col h-[300px] w-[180px] my-3"> 
      <div className="relative overflow-hidden bg-gray-100 w-full rounded-xl h-[200px]">
        <motion.img
          src={imageUrl}
          alt={product.title}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.4 }}  
          transition={{ duration: 0.2 }} 
          className="absolute top-[-40px] left-0 object-cover h-[120%]" // Properly centers and layers the image
        />
        <div className="flex justify-center">
          <button
            className="absolute bottom-4 right-[70px] rounded-full bg-white p-2 shadow-md hover:bg-gray-100"
            aria-label={`Add ${product.title} to selection`}
          >
            <GoPlus size={20} />
          </button>
        </div>
      </div>
      <div className="mt-4 flex flex-col">
        <h3 className="text-sm text-gray-700">{product.title}</h3>
      </div>
    </div>
  );
}
