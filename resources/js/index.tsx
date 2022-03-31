/*eslint-disable*/
import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import AppContainer from './AppContainer'
class App extends Component {
  render() {
    return (
      <>
        <AppContainer />
      </>
    )
  }
}
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
