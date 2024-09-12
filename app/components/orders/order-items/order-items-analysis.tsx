import { tempOrderItems } from "@/app/library/data/temp-order-items"
import { tempOrderItemsDef } from "@/app/library/definitions/temp-order-items-def";
import {
    BuildingStorefrontIcon,
    ShoppingCartIcon,
    ClockIcon
} from '@heroicons/react/24/outline'
import LineChart from "./charts/line-chart";
import RadarChart from "./charts/radar-chart";

// totalprice = price * quantity
function getTotalPrice(data: tempOrderItemsDef[]) {
    return data.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

// function to count how many items are in the order
// basically just check how many id are there
function countItems(data: tempOrderItemsDef[]) {
    return data.length;
}

export default function OrderItemsAnalysis() {
    const data = tempOrderItems;
    return (
        <main>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
                <div className="flex flex-col lg:flex-row md:flex-row border-2 border-solid p-2 rounded-lg shadow-sm">
                    <div className="flex flex-col justify-center items-center w-full gap-0.5">
                        <BuildingStorefrontIcon className="h-6 w-6" />
                        <p className="text-2xl font-medium">
                            {getTotalPrice(data)}
                        </p>
                        <p className="text-sm">
                            Sales (RM)
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row md:flex-row border-2 border-solid p-2 rounded-lg shadow-sm">
                    <div className="flex flex-col justify-center items-center w-full gap-0.5">
                        <ShoppingCartIcon className="h-6 w-6" />
                        <p className="text-2xl font-medium">
                            {countItems(data)}
                        </p>
                        <p className="text-sm">
                            Total Items
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row md:flex-row border-2 border-solid p-2 rounded-lg shadow-sm">
                    <div className="flex flex-col justify-center items-center w-full gap-0.5">
                        <ClockIcon className="h-6 w-6" />
                        <p className="text-2xl font-medium">
                            3 days
                        </p>
                        <p className="text-sm text-center">
                            Time Between Purchase
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-4 grid grid-cols-2">
                <div>
                    <LineChart />
                </div>
                <div>
                    <RadarChart />
                </div>
            </div>
        </main>
    )
}