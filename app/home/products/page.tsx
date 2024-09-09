import { tempProducts } from "@/app/library/data/temp-products";
import ProductTable from "@/app/components/products/product-table";
import Link from "next/link";
import {
    QueueListIcon,
    PlusIcon
} from '@heroicons/react/24/outline';

interface ProductsProps {
    searchParams: {
        filter?: string;
    }
}

export default function Products({searchParams}: ProductsProps) {
    let currentFilterParams = searchParams.filter ?? 'new';
    const products = tempProducts;
    console.log(currentFilterParams);
    
    return (
        <main>
            <div className="flex flex-row px-3 mb-4 border rounded-lg py-2">
                <div className="flex flex-row items-center gap-2">
                    <QueueListIcon className="h-7 w-7" />
                    <h1 className="text-3xl font-semibold">Products</h1>
                </div>
                <Link 
                    href="/products/new"
                    className="flex flex-row items-center gap-2 ml-auto self-start bg-neutral-300 p-2 px-2 rounded-lg text-black hover:bg-neutral-400 shadow-md"
                >
                    <span>Create Product</span> <PlusIcon className="h-5 w-5" />
                </Link>
            </div>
            <ProductTable data={products} currentFilterParams={currentFilterParams}/>
        </main>
    )
}