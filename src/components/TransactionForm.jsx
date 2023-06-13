import { useState } from "react"
import { useGlobalState } from "../context/GlobalState"

function TransactionForm(){
  const {addTransaction}=useGlobalState()
  const [description, setDescription]= useState()
  const [cantidad, setCantidad]= useState(0)

const buttonPress = e=>{
  e.preventDefault()
  addTransaction({
    id:1,
    description,
    cantidad
  })
  console.log(description,cantidad)
}

  return (
    <div>
      <form onSubmit={buttonPress}>
        <input type="text" placeholder="Ingrese el concepto"
        onChange={e=>setDescription(e.target.value)} />
        <input type="number" placeholder="Ingrese el valor" step="0.1"
        onChange={e=>setCantidad(e.target.value)}
        />
        <button>Add transaction</button>
      </form>
    </div>
  )
}

export default TransactionForm