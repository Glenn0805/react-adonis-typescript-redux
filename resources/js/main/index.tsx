/*eslint-disable*/
import React from 'react'
import { Provider } from 'react-redux'
import store from './home-store'
import AppContainer from './AppContainer'
import ReactDOM from 'react-dom'
import './index.scss';
if (document.getElementById('root')) {
    ReactDOM.render(
        <Provider store={store}>
           <AppContainer/>
        </Provider>,
        document.getElementById('root')
    )
}