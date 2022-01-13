import { h } from "preact"
import { Order } from "./Order"



const OrderComponent = ({order}:{order:Order}) => {

    const renderDate = (date:Date) => {
        const day = date.getDate()
        const month = date.getMonth()+1
        const year = date.getFullYear()
        return `${day}.${month}.${year}`
    }

    return (
        <div>
            <p>Ticker: {order.ticker}</p>
            <p>Amount: {order.amount}</p>
            <p>Date: {renderDate(order.date)}</p>
        </div>
    )
}

export default OrderComponent