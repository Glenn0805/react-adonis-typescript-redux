/*eslint-disable*/
import React, { Component } from 'react'
import AppContainer from './AppContainer'
import ReactDOM from 'react-dom'


class App extends Component {
    render() {
        return (
            <>
                <AppContainer name='GLENN CAVITA' age={24} position='Jr Web Dev'/>
            </>
        )
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'))}