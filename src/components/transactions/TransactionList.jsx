import { useGlobalState } from "../../context/GlobalState";


function TransactionList () {
const {transactions,deleteTransaction}=useGlobalState()

return <div>
  {
    transactions.map(t=>(
      <div key={t.id}>
        <p> {t.description}</p>
        <span>{t.cantidad}</span>
        <button onClick={()=>{deleteTransaction(t.id)}}>Delete</button>
      </div>
    ))
}
</div>
}

export default TransactionList