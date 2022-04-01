/*eslint-disable*/
import React, { Component } from 'react'
import AppContainer from './main/AppContainer'
import ReactDOM from 'react-dom'


class App extends Component {
    render() {
        return (
            <>
                <AppContainer name='GLENN CAVITAaa' age={24} position='Jr Web Developer'/>
            </>
        )
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'))}