import { tempOrderItems } from "@/app/library/data/temp-order-items"
import { tempOrderItemsDef } from "@/app/library/definitions/temp-order-items-def";
import { get } from "http";

// totalprice = price * quantity
function getTotalPrice(data: tempOrderItemsDef[]) {
    return data.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

export default function OrderItemsAnalysis() {
    const data = tempOrderItems;
    return (
        <div>
            {getTotalPrice(data)}
        </div>
    )
}