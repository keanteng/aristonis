'use client'

import { useState } from "react"

import OrderCreateForm from "@/app/components/orders/order-create-form"
import OrderItemsCreateTable from "@/app/components/orders/order-items/order-items-create-table";

export default function CreateOrder() {
    const [activeTab, setActiveTab] = useState<'create' | 'items'>('create');

    const handleTabChange = (tab: 'create' | 'items') => {
        setActiveTab(tab);
    };

    return (
        <main>
            <div className="flex flex-col px-3 rounded-lg py-2 lg:mx-12 xl:mx-80">
                <div className="flex flex-col gap-0.5">
                    <h1 className="text-3xl font-bold">Create Order</h1>
                    <p className=" text-sm text-neutral-500">Fill in the details of the new order</p>
                </div>
                <div className="container mt-4">
                    <div className="flex border-b mb-4">
                        <button
                            className={`px-4 py-2 ${activeTab === 'create' ? 'border-b-2 border-neutral-500' : ''}`}
                            onClick={() => handleTabChange('create')}
                        >
                            Create
                        </button>
                        <button
                            className={`px-4 py-2 ${activeTab === 'items' ? 'border-b-2 border-neutral-500' : ''}`}
                            onClick={() => handleTabChange('items')}
                        >
                            Order Items
                        </button>
                    </div>
                    <div>
                        {activeTab === 'create' && <OrderCreateForm />}
                        {activeTab === 'items' && <OrderItemsCreateTable />}
                    </div>
                </div>
            </div>
        </main>
    )
}