'use client';

import { useParams } from "next/navigation";
import OrderEditForm from "@/app/components/orders/order-edit-form";
import OrderItemsTable from "@/app/components/orders/order-items/order-items-table";
import OrderItemsAnalysis from "@/app/components/orders/order-items/order-items-analysis";
import { useState } from "react";

export default function OrderEditPage() {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState<'edit' | 'items' | 'analysis'>('edit');

    const handleTabChange = (tab: 'edit' | 'items' | 'analysis') => {
        setActiveTab(tab);
    };

    return (
        <main>
            <div className="flex flex-col px-3 rounded-lg py-2 lg:mx-12 xl:mx-80">
                <div className="flex flex-col gap-0.5">
                    <h1 className="text-3xl font-semibold">Edit Order</h1>
                    <p className="text-sm text-neutral-500">
                        Viewing order with ID: {id}
                    </p>
                </div>
            <div className="container mt-4">
                <div className="flex border-b mb-4">
                    <button
                        className={`px-4 py-2 ${activeTab === 'edit' ? 'border-b-2 border-neutral-500' : ''}`}
                        onClick={() => handleTabChange('edit')}
                    >
                        Edit Order
                    </button>
                    <button
                        className={`px-4 py-2 ${activeTab === 'items' ? 'border-b-2 border-neutral-500' : ''}`}
                        onClick={() => handleTabChange('items')}
                    >
                        Order Items
                    </button>
                    <button
                        className={`px-4 py-2 ${activeTab === 'analysis' ? 'border-b-2 border-neutral-500' : ''}`}
                        onClick={() => handleTabChange('analysis')}
                    >
                        Analysis
                    </button>
                </div>
                <div>
                    {activeTab === 'edit' && <OrderEditForm currentOrderId={id.toString()} />}
                    {activeTab === 'items' && <OrderItemsTable />}
                    {activeTab === 'analysis' && <OrderItemsAnalysis />}
                </div>
            </div>
            </div>
        </main>
    )
}