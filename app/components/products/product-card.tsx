import { tempProductDef } from "@/app/library/definitions/temp-products-def"
import Image from "next/image";
import { FormatCurrency } from "@/app/library/utils/format-currency";
import {
    ShoppingBagIcon,
    ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import Rating from "./product-rating";

export default function ProductCard(product: tempProductDef) {
    return (
    <div key={product.id} className="shadow-lg rounded-lg border border-solid">
        <div className="relative">
            <Image 
                src="/products/chips.jpg" 
                alt="product" 
                width={420} 
                height={420} 
                className="rounded-t-lg object-cover"
            />
            <label className="text-xs p-1 rounded-md bg-neutral-300 text-black absolute top-0 left-0 m-2 hover:bg-neutral-200">
                {product.barcode}
            </label>
        </div>
        <div className="flex flex-col py-2 px-4 gap-1">
            <text className="md:text-lg text-md">
                {product.name}
            </text>
            <div className="flex flex-row gap-2">
                <text className="text-xs font-medium text-gray-500">
                    {product.brand.toUpperCase()}
                </text>
            </div>
            <Rating rating={product.rating} />
            <div className="flex flex-row gap-2 items-center mt-1">
                <div className="flex flex-row gap-1">
                    <ShoppingBagIcon className="w-4 h-4" />
                    <text className="text-xs font-medium">
                        {product.category.toUpperCase()}
                    </text>
                </div>
                <div className="flex flex-row gap-1">
                    <ShoppingCartIcon className="w-4 h-4" />
                    <text className="text-xs font-medium">
                        {product.sku}
                    </text>
                </div> 
            </div>
            <text className="text-xl font-semibold text-red-500 mt-2">
                {FormatCurrency(product.price)}
            </text>
        </div>
    </div>
    )
}