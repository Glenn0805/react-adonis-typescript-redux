/*eslint-disable*/
import React from 'react'
import { decrementFunction,incrementFunction } from './foobar-actions'
import useFoobarState from './hooks/useFoobarState'
import { useDispatch } from 'react-redux'
import { Button } from 'antd';


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
     <Button type="primary" onClick={increment}>+</Button>
     {numberState}
    <Button type="primary" onClick={decrement}>-</Button>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
    </>
   
  )
}

export default FoobarComponent