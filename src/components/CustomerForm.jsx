import { useContext } from "react"
import { ContextPage } from "../context"
import { FaCirclePlus } from "react-icons/fa6";
export default function CustomerForm() {
  const { setCustomerName,setCustomers, customerName, customers } = useContext(ContextPage)
  const addNewItem = (newCustomers) => {
    if (!customerName) {
      alert('bir şeyler giriniZ')
    }
    setCustomers([newCustomers, ...customers])
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = {
      id: Math.floor(Math.random() * 1000),
      customerName
    }
    addNewItem(newCustomer)
    setCustomerName('')
  }

  return (
    <>
      <form className="customer-form" onSubmit={handleSubmit} >
        <h2>customer manage system</h2>
        <input o type="text" value={customerName}
          onChange={(e) => setCustomerName(e.target.value)} placeholder="add a new customer" />
        <button ><FaCirclePlus /></button>
      </form>
    </>
  )
}