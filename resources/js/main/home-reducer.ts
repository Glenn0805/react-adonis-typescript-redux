/*eslint-disable*/
import { combineReducers } from 'redux'
import foobarReducer from './component/foobar/foobar-reducer'


const rootReducer =combineReducers({
   foobar:foobarReducer
}) 

export default rootReducer
