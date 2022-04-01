import React from 'react'

import useFoobarState from './hooks/useFoobarState'

const FoobarComponent = () => {
  let numberState: any = useFoobarState('numberState')
 //const dispatch=useDispatch()
  return (
    <div>{numberState}</div>
  )
}

export default FoobarComponent