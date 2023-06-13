import {GlobalProvider} from './context/GlobalState'
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionForm from './components/TransactionForm'


function App () {
  return (
    <GlobalProvider>
      <Header/>
      <Balance/>
      <TransactionForm/>
      <div>Hello World  he regresado luego de un receso</div>
    </GlobalProvider>
  )
}
export default App
