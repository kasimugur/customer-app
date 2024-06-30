import { useContext } from "react"
import { ContextPage } from "../context"
import { ImBin } from "react-icons/im";
export default function CustomerItem({customer}) {
  const { setCustomers ,customers } = useContext(ContextPage)
  
  const deleteItem = (item) => {
    setCustomers(customers.filter(customerss => customerss.id !== item.id))
  }
  return (
    <>
      <li className="customer-Item">
        <div className="Item-custmr">
            <img className="img-avatar" src="https://i.pravatar.cc/100" alt="" />
            <span >{customer.customerName}</span>
        </div>
            <button onClick={() => deleteItem(customer)}  ><ImBin /></button>
      </li>
    </>
  )
}