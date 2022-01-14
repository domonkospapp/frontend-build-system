import { h } from "preact"
import { Company } from "./Company"

const CompanyDetailsPage = ({company}:{company:Company}):JSX.Element => {
    
    return <div>
        <h1>{company.name}</h1>
        <p>Shares: {company.shares}</p>
    </div>

}

export  default CompanyDetailsPage