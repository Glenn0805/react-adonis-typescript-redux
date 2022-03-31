import React from 'react'

export interface User{
  name:string,
  age?:number
}
const AppContainer = (props:User) => {
  return (
    <>
      <div>
        NAME:{props.name} <br/>
        Age :{props.age}
      </div>

    </>
    )
}

export default AppContainer
