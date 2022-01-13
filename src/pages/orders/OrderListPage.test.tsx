import { render, screen } from "@testing-library/preact"
import { h } from "preact"
import OrderListPage from "./OrderListPage"

test("render title",()=>{
    render(<OrderListPage />)
    const title = screen.getByRole("heading")
    expect(title.textContent).toBe("Orders")
})

test("render orders",()=>{
    render(<OrderListPage />)
    const tickers = screen.getAllByText(/Ticker:/)
    expect(tickers.length).toBe(2)
    expect(tickers[0]?.textContent).toContain("TSLA")
    expect(tickers[1]?.textContent).toContain("DBX")
})