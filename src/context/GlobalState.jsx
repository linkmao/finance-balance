import {createContext, useContext, useEffect, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState={
  transaction:[]
}

export const Context =createContext()

export const useGlobalState = () =>{
  const context = useContext(Context)
  return context
}

export const GlobalProvider = ({children})=>
{
  // EL use redce ademas de inicializar el estado se puede colocar alternativamente una funcion que permita incializar tambien, tal como se muestra en este ejemplo donde se verifica si hay algo guarado en el local storage, de no ser así se usa entonces el initialState
  const [state, dispatch]= useReducer(AppReducer,initialState,
    ()=>{
      const localData = localStorage.getItem('transacciones')
      return localData ? JSON.parse(localData) : initialState
    }
    )  

  // Para vigilar cuando cambia el estato y que este se guarde en el localStorage, se hace uso del useEffct

  useEffect(()=>{
    localStorage.setItem('transacciones', JSON.stringify(state))
  },[state])
    
  const addTransaction = (transaction)=>{
    dispatch({
      type:"ADD_TRANSACTION",
      payload:transaction
    })
  }

  const deleteTransaction = (id)=>{
    dispatch({
      type:"DELETE_TRANSACTION",
      payload:id
    })
  }

  return  <Context.Provider
   value={{
    transactions:state.transaction,
    addTransaction:addTransaction,
    deleteTransaction:deleteTransaction
  }}>
    {children}
  </Context.Provider>
}