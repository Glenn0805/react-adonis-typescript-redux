import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import rootReducer from './home-reducer'

const middlewares = [
  thunk,
  // socketIoMiddleware
]

let store
let tryToCreateStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: middlewares,
  })

store = tryToCreateStore()

export default store
