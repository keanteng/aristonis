import OrderTable from "@/app/components/orders/order-table"

interface OrdersProps {
    searchParams: {
        filter?: string;
    }
}

export default function Orders({searchParams}: OrdersProps) {
    const currentFilterParams = searchParams.filter ?? 'all';
    console.log(currentFilterParams);
    return (
        <main>
            <div className="flex flex-col px-3 rounded-lg py-2 lg:mx-12 xl:mx-80">
                <div className="flex flex-col gap-0.5">
                    <h1 className="text-3xl font-semibold">Orders</h1>
                    <p className="text-sm text-neutral-500">Manage your orders here</p>
                </div>
            </div>
            <div className="flex flex-col py-5">
                    <OrderTable currentFilterParams={currentFilterParams} />
                </div>
        </main>
    )
}