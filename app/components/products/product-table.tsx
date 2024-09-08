'use client';

import { useEffect, useState } from "react";
import ProductCard from "./product-card";
import { tempProductDef } from "@/app/library/definitions/temp-products-def";
import ProductSearch from "./product-search";
import ProductPagination from "./product-pagination";

export default function ProductTable({data}: {data: tempProductDef[]}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const currentData = data.slice(startIndex, startIndex + itemsPerPage);

    const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1);
    }

    return (
        <main className="flex flex-col px-2 md:px-10 xl:px-80 border-2 border-solid py-2">
            <ProductSearch />
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 p-1">
                {currentData.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
            <div className="flex flex-row gap-4 items-center justify-center py-3">
                <ProductPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />

                <select value={itemsPerPage} onChange={handleItemsPerPageChange} className="border rounded-md text-sm">
                <option value={12}>12 Items</option>
                <option value={40}>40 Items</option>
                <option value={100}>100 Items</option>
                </select>
            </div>
        </main>
    )
}