import './App.css'
import CustomerForm from './components/CustomerForm'
import CustomerList from './components/CustomerList'
import { ContextPage } from './context'

function App() {

  const data = {

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
