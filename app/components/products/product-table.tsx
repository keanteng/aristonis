'use client';

import { useState } from "react";
import ProductCard from "./product-card";
import { tempProductDef } from "@/app/library/definitions/temp-products-def";
import ProductSearch from "./product-search";
import ProductPagination from "./product-pagination";
import ProductDrawer from "./product-drawer";

interface ProductTableProps {
    data: tempProductDef[];
    currentFilterParams: string;
}

export default function ProductTable({ data, currentFilterParams }: ProductTableProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [selectedProduct, setSelectedProduct] = useState<tempProductDef | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const currentData = data.slice(startIndex, startIndex + itemsPerPage);

    const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1);
    }

    const handleProductSelect = (product: tempProductDef) => {
        console.log(product.name);
        setSelectedProduct(product);
        setIsDrawerOpen(true);
    }

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    }
    
    return (
        <main className="flex flex-col px-2 md:px-4 lg:px-12 xl:px-80 py-2 rounded-lg max-w-full gap-2">
            <ProductSearch currentFilterParams={currentFilterParams}/>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {currentData.map((product) => (
                    <div key={product.id} onClick={() => handleProductSelect(product)}>
                        <ProductCard {...product}/>
                    </div>
                ))}
            </div>
            <div className="flex md:flex-row flex-col gap-4 items-center justify-center py-3">
                <ProductPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />

                <select value={itemsPerPage} onChange={handleItemsPerPageChange} className="border rounded-md text-base">
                    <option value={12}>12 Items</option>
                    <option value={40}>40 Items</option>
                    <option value={100}>100 Items</option>
                </select>
            </div>
            {selectedProduct && <ProductDrawer product={selectedProduct} isOpen={isDrawerOpen} onClose={handleDrawerClose} />}
        </main>
    )
}