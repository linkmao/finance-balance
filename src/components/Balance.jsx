import { useGlobalState } from "../context/GlobalState"

function Balance(){
  const data = useGlobalState()
  return (
    <div>
    <h1>Balance</h1>
    <h3>{JSON.stringify(data)}</h3>
    </div>
  )
}

export default Balance