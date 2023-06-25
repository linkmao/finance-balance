import { useGlobalState } from "../context/GlobalState"

function Balance(){
  // const data = useGlobalState() // Todos os datos del global state
  const {transactions} = useGlobalState() // Solo las transacciones
  const cantidades = transactions.map(t=>t.cantidad)
  const total = cantidades.reduce((acum,item)=>(acum+=item),0)
  return (
    <div>
    <h3>Total Balance</h3>
    <h1>{total} $</h1>
    </div>
  )
}

export default Balance