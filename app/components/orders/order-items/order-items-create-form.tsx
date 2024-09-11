'use client';

import { useEffect, useState } from "react";


export function OrderItemsCreateForm() {
    const [uuid, setUuid] = useState<string>('');

    useEffect(() => {
        const generatedUuid = crypto.randomUUID().replace(/-/g, '').slice(0, 5);
        setUuid(generatedUuid);
    }, []);

    return (
        <form>
            <div className="flex flex-col gap-2 mb-6">
                <div className="flex flex-col gap-0.5">
                    <h1 className="text-lg font-medium">Order Item</h1>
                    <p className="text-sm text-neutral-500">
                    Creating item with ID: {uuid}
                    </p>
                    <hr className="border-t border-neutral-300 my-4" />
                </div>
                <div className="flex flex-col gap-0.5 w-full">
                    <label htmlFor="name" className="text-xs px-1 text-neutral-500 font-medium">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="border-2 py-1 px-2 rounded-lg bg-white w-full"
                        required
                    />
                </div>
                <div className="flex flex-col gap-0.5 w-full">
                    <label htmlFor="quantity" className="text-xs px-1 text-neutral-500 font-medium">Quantity</label>
                    <input 
                        type="number"
                        id="quantity" 
                        name="quantity" 
                        className="border-2 py-1 px-2 rounded-lg bg-white w-full"
                        required
                    />
                </div>
                <div className="flex flex-col gap-0.5 w-full">
                    <label htmlFor="price" className="text-xs px-1 text-neutral-500 font-medium">Price</label>
                    <input 
                        type="number" 
                        id="price" 
                        name="price" 
                        className="border-2 py-1 px-2 rounded-lg bg-white w-full"
                        required
                    />
                </div>
                {/*Select between carton, packet, outer */}
                <div className="flex flex-col gap-0.5 w-full">
                    <label htmlFor="packagingType" className="text-xs px-1 text-neutral-500 font-medium">Packaging Type</label>
                    <select 
                        id="packagingType" 
                        name="packagingType" 
                        className="border-2 py-1 px-2 rounded-lg bg-white w-full">
                        <option value="carton">Carton</option>
                        <option value="packet">Packet</option>
                        <option value="outer">Outer</option>
                    </select>
                </div>
                <div className="flex flex-row gap-2 m-2">
                    <button className="flex flex-row-reverse p-2 bg-neutral-300 self-start rounded-lg hover:bg-neutral-200 ml-auto">
                        Add Item
                    </button>
                </div>
            </div>
        </form>
    )
}