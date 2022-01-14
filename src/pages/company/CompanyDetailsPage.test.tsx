import { render, screen } from "@testing-library/preact"
import { h } from "preact"
import CompanyDetailsPage from "./CompanyDetailsPage"

test("render title",()=>{
    render(<CompanyDetailsPage company={{name: "Dropbox Inc.", shares:15}} />)
    const header = screen.getByRole("heading")
    expect(header.textContent).toEqual("Dropbox Inc.")
})

test("render title 2",()=>{
    render(<CompanyDetailsPage company={{name: "Tesla Inc.", shares:50}} />)
    const header = screen.getByRole("heading")
    expect(header.textContent).toEqual("Tesla Inc.")
})

test("render outstanding shares",()=>{
    render(<CompanyDetailsPage company={{name: "Tesla Inc.", shares:100}} />)
    const shares = screen.getByText(/Shares: /)
    expect(shares.textContent).toContain("100")
})
