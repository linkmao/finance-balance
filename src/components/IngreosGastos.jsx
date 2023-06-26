import { useGlobalState } from "../context/GlobalState"

function IngresosGastos() {

const {transactions}= useGlobalState()
const valores= transactions.map(t=>t.cantidad)

const ingresos= valores.filter(v=>v>0).reduce((acc,item)=>(acc+=item),0)
const gastos =valores.filter(v=>v<0).reduce((acc,item)=>(acc+=item),0)*(-1)

console.log(valores)


  return <div>
    <div>
      <h4>Ingresos</h4>
      <p>{ingresos}</p>
    </div>
    <div>
      <h4>Gastos</h4>
      <p>{gastos}</p>

    </div>
  </div>
}

export default IngresosGastos