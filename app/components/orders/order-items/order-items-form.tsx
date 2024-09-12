'use client';

import { useState } from "react";
import { tempOrderItemsDef } from "@/app/library/definitions/temp-order-items-def";

interface OrderItemsFormProps {
    orderItem: tempOrderItemsDef;
}

export function OrderItemsForm({ orderItem }: { orderItem: tempOrderItemsDef }) {
    const [formData, setFormData] = useState<tempOrderItemsDef>({
        id: orderItem.id,
        name: orderItem.name,
        quantity: orderItem.quantity,
        price: orderItem.price,
        packagingType: orderItem.packagingType
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <form className="text-black" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 mb-6">
                <div className="flex flex-col gap-0.5">
                    <h1 className="text-lg font-medium">Order Item</h1>
                    <p className="text-sm text-neutral-500">
                    Viewing item with ID: {orderItem.id}
                    </p>
                    <hr className="border-t border-neutral-300 my-4" />
                </div>
                <div className="flex flex-col gap-0.5 w-full">
                    <label htmlFor="name" className="text-xs px-1 text-neutral-500 font-medium">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        className="border-2 py-1 px-2 rounded-lg bg-white w-full"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col gap-0.5 w-full">
                    <label htmlFor="quantity" className="text-xs px-1 text-neutral-500 font-medium">Quantity</label>
                    <input 
                        type="number"
                        id="quantity" 
                        name="quantity" 
                        value={formData.quantity}  
                        className="border-2 py-1 px-2 rounded-lg bg-white w-full"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col gap-0.5 w-full">
                    <label htmlFor="price" className="text-xs px-1 text-neutral-500 font-medium">Price</label>
                    <input 
                        type="number" 
                        id="price" 
                        name="price" 
                        value={formData.price} 
                        className="border-2 py-1 px-2 rounded-lg bg-white w-full"
                        required
                        onChange={handleChange}
                    />
                </div>
                {/*Select between carton, packet, outer */}
                <div className="flex flex-col gap-0.5 w-full">
                    <label htmlFor="packagingType" className="text-xs px-1 text-neutral-500 font-medium">Packaging Type</label>
                    <select 
                        id="packagingType" 
                        name="packagingType" 
                        value={formData.packagingType} 
                        className="border-2 py-1 px-2 rounded-lg bg-white w-full"
                        required
                        onChange={handleChange}
                    >
                        <option value="carton">Carton</option>
                        <option value="packet">Packet</option>
                        <option value="outer">Outer</option>
                    </select>
                </div>
                <div className="flex flex-row gap-2 m-2">
                    <button className="flex flex-row-reverse p-2 bg-neutral-300 self-start rounded-lg hover:bg-neutral-200 ml-auto">
                        Save Edits
                    </button>
                    <button className="flex flex-row-reverse p-2 bg-neutral-300 self-start rounded-lg hover:bg-neutral-200">
                        Delete
                    </button>
                </div>
            </div>
        </form>
    )
}