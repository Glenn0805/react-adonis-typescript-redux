/*eslint-disable*/
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './home-reducer'

const middlewares = [
    thunk
    // socketIoMiddleware
]

let tryToCreateStore = (composeEnhancers) => createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
)

let store
try {
    let composeFunction = (process.env.NODE_ENV !== 'production'
      &&  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    || compose
    store = tryToCreateStore(composeFunction)
} catch (error) {
    store = tryToCreateStore(compose)
}

export default store
