'use client';

import { useState, useEffect } from "react";

export default function OrderCreateForm() {
    const [uuid, setUuid] = useState<string>('');

    useEffect(() => {
        const generatedUuid = crypto.randomUUID().replace(/-/g, '').slice(0, 5);
        setUuid(generatedUuid);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        date: '',
        total: '',
        status: 'pending'
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
            <div className="flex flex-col gap-2 lg:w-2/5 w-3/5">
                <div className="flex flex-col gap-0.5 mb-3">
                    <p className="text-sm text-neutral-500">
                    Creating order with ID: {uuid}
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-xs px-1 text-neutral-500 font-medium">Customer</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="border-2 py-1 px-2 rounded-lg bg-white"
                        required
                        onChange={handleChange}
                        value={formData.name}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="date" className="text-xs px-1 text-neutral-500 font-medium">Date</label>
                    <input 
                        type="date" 
                        id="date" 
                        name="date"  
                        className="border-2 py-1 px-2 rounded-lg bg-white"
                        required
                        onChange={handleChange}
                        value={formData.date}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="total" className="text-xs px-1 text-neutral-500 font-medium">Total (RM)</label>
                    <input 
                        type="number" 
                        id="total" 
                        name="total" 
                        className="border-2 py-1 px-2 rounded-lg bg-white"
                        required
                        onChange={handleChange}
                        value={formData.total}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="status" className="text-xs px-1 text-neutral-500 font-medium">Status</label>
                    <select 
                        id="status" 
                        name="status" 
                        className="border-2 py-1 px-2 rounded-lg bg-white"
                        required
                        onChange={handleChange}
                        value={formData.status}
                    >
                        <option value="pending">Pending</option>
                        <option value="fulfilled">Fulfilled</option>
                        <option value="declined">Declined</option>
                    </select>
                </div>
                <div className="flex flex-row">
                    <button 
                        type="submit" 
                        className=" mt-6 py-2 px-3 rounded-lg bg-neutral-300 hover:bg-neutral-200"
                    >
                        Create Order
                    </button>
                </div>
            </div>

        </form>
    )
}