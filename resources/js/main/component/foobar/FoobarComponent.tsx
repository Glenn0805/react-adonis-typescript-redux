/*eslint-disable*/
import React from 'react'
import { decrementFunction,incrementFunction } from './foobar-actions'
import useFoobarState from './hooks/useFoobarState'
import { useDispatch } from 'react-redux'
const FoobarComponent = () => {
  let numberState: any = useFoobarState('numberState')
 const dispatch=useDispatch()

 const increment=()=>{
  dispatch(incrementFunction(numberState))
 }

 const decrement=()=>{
  dispatch(decrementFunction(numberState))
 }
  return (
    <> 
     <button onClick={increment}>+</button>
     {numberState}
    <button onClick={decrement}>-</button>
    </>
   
  )
}

export default FoobarComponent