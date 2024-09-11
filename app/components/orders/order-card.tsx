import { tempOrdersDef } from "@/app/library/definitions/temp-orders-def";
import { formatDate } from "@/app/library/utils/format-date";
import { formatCurrency } from "@/app/library/utils/format-currency";
import OrderBadge from "./order-badge";
import {
    CalendarDateRangeIcon,
    ChartBarIcon,
    TagIcon,
    ArchiveBoxIcon,
    BoltIcon
} from '@heroicons/react/24/outline';

interface OrderCardProps {
    order: tempOrdersDef;
}

export default function OrderCard({ order }: OrderCardProps) {
    return (
        <div className="shadow-lg rounded-lg border border-solid">
            <div className="flex flex-col py-2 px-4 gap-0.5">
                <div className="flex flex-col gap-0.5">
                    <label className="text-xs p-0.5 rounded-sm px-1 self-start bg-neutral-200 text-black">
                        {order.id}
                    </label>
                    <h1 className="text-lg font-medium mb-3">{order.name}</h1>
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-row items-center gap-1">
                            <ArchiveBoxIcon className="w-4 h-4" />
                            <p className="text-xs">(10)</p>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <BoltIcon className="w-4 h-4" />
                            <p className="text-xs">Medium</p>
                        </div>
                    </div>

                </div>
                <div className="flex flex-row gap-1 items-center">
                    <CalendarDateRangeIcon className="w-4 h-4" />
                    <p className="text-md font-mono">{formatDate(order.date)}</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <TagIcon className="w-4 h-4" />
                    <OrderBadge text={order.status} type='status'/>
                    <OrderBadge text={order.type} type='type'/>
                </div>
                <p className="text-xl font-bold text-red-500 mt-3">{formatCurrency(order.total)}</p>
            </div>
        </div>
    )
}