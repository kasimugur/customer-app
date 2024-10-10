import { useState } from 'react'
import './App.css'
import CustomerForm from './components/CustomerForm'
import CustomerList from './components/CustomerList'
import { ContextPage } from './context'
import './customerItem.scss'
import './customerStyle.scss'
function App() {

  const [customerName, setCustomerName] = useState('')
  const [customers, setCustomers] = useState([])

  const addNewCustomers = (newCustomers) => {
    setCustomers([...customers, newCustomers])
  }
  const data = {
    addNewCustomers,
    customers,
    customerName,
    setCustomerName,
    setCustomers
  }
  return (
    <>
      <ContextPage.Provider value={data}>
        <CustomerForm />
        <CustomerList />
      </ContextPage.Provider>
    </>
  )
}

export default App
