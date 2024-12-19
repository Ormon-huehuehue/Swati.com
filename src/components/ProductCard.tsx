
import { ProductInterface, Images, Variants } from '@/config/interface'
import { AiTwotonePlusCircle } from "react-icons/ai";



export interface ProductCardProps {
    id: string;
    title: string;
    descriptionHtml: string;
    images: Images;
    variants: Variants;
}

export function ProductCard({product}: {product : ProductCardProps}) {

    const imageUrl = product.images.edges[0].node.url

  return (
    <div className="group relative flex flex-col h-auto w-[10vw]">
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={product.title}
          className="h-full w-full object-cover object-center"
        />
        <button
          className="absolute bottom-4 right-4 rounded-full bg-white p-2 shadow-md hover:bg-gray-100"
          aria-label={`Add ${product.title} to selection`}
        >
          <AiTwotonePlusCircle size={20} />

        </button>
      </div>
      <div className="mt-4 flex flex-col">
        <h3 className="text-sm text-gray-700">{product.title}</h3>
        {/* <div className="mt-2 flex items-center gap-1">
          {product.quantity && (
            <span className="ml-2 text-sm text-gray-500">+{product.quantity}</span>
          )}
        </div> */}
      </div>
    </div>
  )
}

