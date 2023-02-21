/*eslint-disable*/
import React from 'react'
import { Provider } from 'react-redux'
import store from './home-store'
import AppContainer from './AppContainer'
import ReactDOM from 'react-dom'

import './index.scss';
import { CustomProvider } from 'rsuite'
if (document.getElementById('root')) {
    ReactDOM.render(
        <CustomProvider theme='dark'>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </CustomProvider>,
        document.getElementById('root')
    )
}