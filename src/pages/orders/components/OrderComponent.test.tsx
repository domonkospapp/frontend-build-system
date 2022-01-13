import { render, screen } from "@testing-library/preact"
import { h } from "preact"
import { Order } from "./Order"
import OrderComponent from "./OrderComponent"

const testOrder: Order = {
    ticker: "TSLA",
    amount: 12,
    date: new Date(2021, 10, 20)
}

test("render order with one ticker",()=>{
    render(<OrderComponent order={testOrder} />)
    const ticker = screen.getByText(/Ticker:/)
    expect(ticker.textContent).toContain("TSLA")
})

test("render order with other ticker",()=>{
    const dbxOrder = {ticker:"DBX", amount: 1, date: new Date(Date.now())}
    render(<OrderComponent order={dbxOrder} />)
    const ticker = screen.getByText(/Ticker:/)
    expect(ticker.textContent).toContain("DBX")
})

test("render order with amount",()=>{
    render(<OrderComponent order={testOrder} />)
    const amount = screen.getByText(/Amount:/)
    expect(amount.textContent).toContain("12")
})

test("render order with date",()=>{
    render(<OrderComponent order={testOrder} />)
    const amount = screen.getByText(/Date:/)
    expect(amount.textContent).toContain("20.11.2021")
})
