
import { useContext } from "react"
import CustomerItem from "./CustomerItem"
import { ContextPage } from "../context"

export default function CustomerList() {
  const { customers} = useContext(ContextPage)

  const deleteItem = (item) => {
    console.log(item)
  }

  return (
    <>
    <ul>
    {customers.map((customer) => (
      <CustomerItem key={customer.id} customer={customer} />
    ))}
    </ul>
    </>
  )
}