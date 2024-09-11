import { tempOrders } from "@/app/library/data/temp-orders";
import OrderCard from "./order-card";
import OrderSearch from "./order-search";

export default function OrderTable() {
    const orders = tempOrders;
    return (
        <main className="flex flex-col px-2 md:px-4 lg:px-12 xl:px-80 py-2 rounded-lg max-w-full gap-2">
            <OrderSearch />
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {orders.map((order) => (
                    <OrderCard key={order.id} order={order} />
                ))}
            </div>
        </main>
    );
}