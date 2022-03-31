import React from 'react'

export interface User{
  name:string,
  age?:number,
  position:string
}
const AppContainer = (props:User) => {
  return (
    <>
      <div>
        NAME:{props.name} <br/>
        Age :{props.age}<br/>
        Position: {props.position}
      </div>

    </>
    )
}

export default AppContainer
