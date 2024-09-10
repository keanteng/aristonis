'use client';

import { useEffect, useState } from "react";

export default function ProductCreateForm() {
    const [uuid, setUuid] = useState<string>('');

    useEffect(() => {
        const generatedUuid = crypto.randomUUID().replace(/-/g, '').slice(0, 5);
        setUuid(generatedUuid);
    }, []);

    return (
        <form>
            <div className="flex flex-col gap-0.5">
                <h1 className="text-lg font-medium">New</h1>
                <p className="text-sm text-neutral-500">
                    Creating product with ID (unchangeable): {uuid} 
                </p>
                <hr className="border-t border-neutral-300 my-4" />
            </div>
            <div className="flex flex-col gap-2 text-black">
                <div className="flex flex-col gap-0.5 w-full">
                    <label htmlFor="name" className="text-xs px-1 text-neutral-500 font-medium">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="border-2 py-1 px-2 rounded-lg bg-white w-3/5 lg:w-2/5"
                        required
                    />
                </div>
                <div className="flex flex-col gap-0.5 w-full">
                    <label htmlFor="brand" className="text-xs px-1 text-neutral-500 font-medium">Brand</label>
                    <input
                        type="text"
                        id="brand"
                        name="brand"
                        className="border-2 py-1 px-2 rounded-lg bg-white w-3/5 lg:w-2/5"
                        required
                    />
                </div>
                <div className="flex flex-col gap-0.5 w-full">
                    <label htmlFor="category" className="text-xs px-1 text-neutral-500 font-medium">Category</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        className="border-2 py-1 px-2 rounded-lg bg-white w-3/5 lg:w-2/5"
                        required
                    />
                </div>
                <div className="flex flex-col gap-0.5 w-full">
                    <label htmlFor="price" className="text-xs px-1 text-neutral-500 font-medium">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        className="border-2 py-1 px-2 rounded-lg bg-white w-3/5 lg:w-2/5"
                        required
                    />
                </div>
                <hr className="border-t border-neutral-300 my-4" />
                <div className="flex flex-col gap-0.5 w-full">
                    <label htmlFor="weight" className="text-xs px-1 text-neutral-500 font-medium">Weight</label>
                    <input
                        type="number"
                        id="weight"
                        name="weight"
                        className="border-2 py-1 px-2 rounded-lg bg-white w-3/5 lg:w-2/5"
                        required
                    />
                </div>
                <div className="flex flex-col gap-0.5 w-full">
                    <label htmlFor="dimensions" className="text-xs px-1 text-neutral-500 font-medium">Dimensions</label>
                    <input
                        type="text"
                        id="dimensions"
                        name="dimensions"
                        className="border-2 py-1 px-2 rounded-lg bg-white w-3/5 lg:w-2/5"
                        required
                    />
                </div>
                <div className="flex flex-col gap-0.5 w-full">
                    <label htmlFor="barcode" className="text-xs px-1 text-neutral-500 font-medium">Barcode</label>
                    <input
                        type="text"
                        id="barcode"
                        name="barcode"
                        className="border-2 py-1 px-2 rounded-lg bg-white w-3/5 lg:w-2/5"
                        required
                    />
                </div>
                <div className="flex flex-col gap-0.5 w-full">
                    <label htmlFor="rating" className="text-xs px-1 text-neutral-500 font-medium">Rating</label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        className="border-2 py-1 px-2 rounded-lg bg-white w-3/5 lg:w-2/5"
                        required
                    />
                </div>
            </div>
            <div className="flex flex-col mt-6 mr-2">
                <button
                    type="submit"
                    className=" ml-auto flex flex-row p-2 bg-neutral-300 self-start rounded-lg hover:bg-neutral-200"
                >
                    Create Product
                </button>
            </div>
        </form>
    );
}