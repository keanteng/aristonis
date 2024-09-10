import { tempProducts } from "@/app/library/data/temp-products";
import ProductTable from "@/app/components/products/product-table";
import Link from "next/link";
import {
   PlusCircleIcon
} from '@heroicons/react/24/outline';

interface ProductsProps {
    searchParams: {
        filter?: string;
    }
}

export default function Products({searchParams}: ProductsProps) {
    let currentFilterParams = searchParams.filter ?? 'newest';
    const products = tempProducts;
    console.log(currentFilterParams);
    
    return (
        <main>
            <div className="flex flex-row px-3 rounded-lg py-2 lg:mx-12 xl:mx-80 items-center">
                <div className="flex flex-row items-center gap-1">
                    <h1 className="text-3xl font-semibold">Products</h1>
                </div>
                <Link 
                    href="/home/products/create"
                    className="flex flex-row items-center gap-2 ml-auto bg-neutral-300 p-2 px-3 rounded-lg text-black hover:bg-neutral-400 shadow-sm"
                >
                    <span>Create</span> <PlusCircleIcon className="h-5 w-5" />
                </Link>
            </div>
            <ProductTable data={products} currentFilterParams={currentFilterParams}/>
        </main>
    )
}