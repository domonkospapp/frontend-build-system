import { h } from "preact"
import { useEffect } from "preact/hooks"
import useOrder from "../../utils/orders/useOrder"
import OrderComponent from "./components/OrderComponent"

const OrderListPage = ():JSX.Element => {
    const {orders, getOrders} = useOrder()

    useEffect(() => {
        getOrders()
      }, [])
    
    return <div>
        <h1>Orders</h1>
        {orders.map(order => <OrderComponent order={order}/>)}
    </div> 

}

export  default OrderListPage