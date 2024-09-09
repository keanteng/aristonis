'use client';

import { useParams } from 'next/navigation';

export default function ProductsEditPage() {
    const { id } = useParams();

    return (
        <div>
            <h1>Edit Product {id}</h1>
        </div>
    );
}