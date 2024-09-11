'use client';

import { tempOrderItems } from "@/app/library/data/temp-order-items"
import { useState } from "react";
import OrderItemsDrawer from "./order-items-drawer";
import { tempOrderItemsDef } from "@/app/library/definitions/temp-order-items-def";
import { PlusCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import OrderItemsCreateDrawer from "./order-items-create-drawer";

export default function OrderItemsTable() {
    const orderItems = tempOrderItems;
    const [selectedOrderItem, setSelectedOrderItem] = useState<tempOrderItemsDef | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isAddItemOpen, setIsAddItemOpen] = useState(false);

    const handleOrderItemSelect = (orderItem: tempOrderItemsDef) => {
        setSelectedOrderItem(orderItem);
        setIsDrawerOpen(true);
    }

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    }

    const handleAddItemsDrawerOpen = () => {
        setIsAddItemOpen(true);
    }

    const handleAddItemsDrawerClose = () => {
        setIsAddItemOpen(false);
    }

    return (
        <div>
            <div className="flex flex-row gap-2 items-center">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search items..."
                        className="border rounded-lg px-2 py-1 pl-8"
                    />
                    <MagnifyingGlassIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                </div>
                <button className="flex flex-row items-center" title='Add Item' onClick={() => handleAddItemsDrawerOpen()}>
                    <PlusCircleIcon className="h-6 w-6" />
                </button>
            </div>
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700 mt-2">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                        <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Quantity</th>
                        <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Price (RM)</th>
                        <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Packaging Type</th>
                        <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                    {orderItems && orderItems.map((orderItem) => (
                        <tr key={orderItem.id} className="hover:bg-gray-50 hover:text-black" onClick={() => handleOrderItemSelect(orderItem)}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{orderItem.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{orderItem.quantity}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{orderItem.price}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{orderItem.packagingType}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button className="px-2 py-1 text-blue-500">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedOrderItem && <OrderItemsDrawer orderItem={selectedOrderItem} isOpen={isDrawerOpen} onClose={handleDrawerClose} />}
            {isAddItemOpen && <OrderItemsCreateDrawer isOpen={isAddItemOpen} onClose={handleAddItemsDrawerClose} />}
        </div>
    )
}