
import { useContext } from "react"
import CustomerItem from "./CustomerItem"
import { ContextPage } from "../context"

export default function CustomerList() {
  const { customers } = useContext(ContextPage)


  return (
    <>
      <ul className="list-customer">
        {customers.map((customer) => (
          <CustomerItem key={customer.id} customer={customer} />
        ))}
      </ul>
    </>
  )
}