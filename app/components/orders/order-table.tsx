'use client';

import { useRouter } from 'next/navigation';
import { tempOrders } from '@/app/library/data/temp-orders';
import { formatDate } from '@/app/library/utils/format-date';
import OrderBadge from './order-badge';
import OrderSearch from './order-search';

interface OrderTableProps {
    currentFilterParams: string;
}

export default function OrderTable({ currentFilterParams }: OrderTableProps) {
    const router = useRouter();
    const orders = tempOrders;

    function handleClick(value: string) {
        router.push(`/home/orders/edit/${value}`);
    }

    return (
        <main className="flex flex-col px-2 md:px-4 lg:px-12 xl:px-80 py-2 rounded-lg max-w-full gap-2">
            <OrderSearch currentFilterParams={currentFilterParams} />
            <div className="overflow-x-auto rounded-md border">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Customer</th>
                            <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Order Date</th>
                            <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Order Status</th>
                            <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50 hover:text-black" onClick={() => handleClick(order.id)}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{order.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{formatDate(order.date)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <OrderBadge text={order.status} type='status' />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button className="px-2 py-1 text-blue-500">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}