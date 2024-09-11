
import { filterOrderById } from "@/app/library/utils/filter-order";
import { tempOrdersDef } from "@/app/library/definitions/temp-orders-def";
import { formatDate } from "@/app/library/utils/format-date";

interface OrderEditFormProps {
    currentOrderId: string;
}

export default function OrderEditForm({currentOrderId}: OrderEditFormProps) {
    const order: tempOrdersDef = filterOrderById(currentOrderId)!;

    return (
        <form>
            <div className="flex flex-col gap-2 lg:w-2/5 w-3/5">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-xs px-1 text-neutral-500 font-medium">Customer</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={order.name} 
                        className="border-2 py-1 px-2 rounded-lg bg-white"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="date" className="text-xs px-1 text-neutral-500 font-medium">Date</label>
                    <input 
                        type="date" 
                        id="date" 
                        name="date" 
                        value={formatDate(order.date)} 
                        className="border-2 py-1 px-2 rounded-lg bg-white"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="total" className="text-xs px-1 text-neutral-500 font-medium">Total (RM)</label>
                    <input 
                        type="number" 
                        id="total" 
                        name="total" 
                        value={order.total} 
                        className="border-2 py-1 px-2 rounded-lg bg-white"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="status" className="text-xs px-1 text-neutral-500 font-medium">Status</label>
                    <select 
                        id="status" 
                        name="status" 
                        value={order.status} 
                        className="border-2 py-1 px-2 rounded-lg bg-white"
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
                        Update Order
                    </button>
                </div>
            </div>
        </form>
    )
}
