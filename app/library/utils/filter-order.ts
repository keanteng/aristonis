import { tempOrders } from "../data/temp-orders";

// create a funtion to filter the orders and return the order based on id

export function filterOrderById(id: string) {
    return tempOrders.find((order) => order.id === id);
}