'use client';

import { tempProductDef } from "@/app/library/definitions/temp-products-def";
import { XMarkIcon } from '@heroicons/react/24/outline';
import ProductForm from "./product-form";
import { useEffect } from "react";

interface ProductDrawerProps {
    product: tempProductDef;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProductDrawer({ product, isOpen, onClose }: ProductDrawerProps) {
    return (
        <div className={`fixed top-0 right-0 z-20 h-full transition-all duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} bg-white shadow-lg w-full sm:w-80 md:w-96`}>
            <div className="relative px-6 py-3 bg-neutral-300 text-black">
                <button onClick={onClose} className="absolute top-4 right-4 text-black hover:text-gray-700">
                    <XMarkIcon className="h-6 w-6" />
                </button>
                <div className="flex flex-col gap-0.5">
                    <p className="text-xs">Product Details</p>
                    <h2 className="text-lg font-semibold">View & Edit</h2>
                </div>
            </div>
            <div className="flex px-4 py-3"> 
                <ProductForm product={product} />
            </div>
        </div>
    );
}