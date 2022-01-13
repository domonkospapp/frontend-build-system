import { useState } from "preact/hooks"
import { Order } from "../../pages/orders/components/Order"

const fakeOrders:Array<Order> = [
    {
        ticker: "TSLA",
        amount: 12,
        date: new Date(2021, 10, 20)
    },
    {
        ticker: "DBX",
        amount: 25,
        date: new Date(2021, 11, 14)
    }
]

const useOrder = () => {
    const[orders, setOrders]=useState<Array<Order>>([])

    const getOrders = () => {
        setOrders(fakeOrders)
    }


    return {
        orders,
        getOrders
    }
}
export default useOrder