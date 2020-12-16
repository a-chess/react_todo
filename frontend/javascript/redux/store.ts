import { combineReducers, createStore } from 'redux'
import { booksReducer } from './books/reducers'

const rootReducer = combineReducers({
  booksReducer,
})

export default createStore(rootReducer)
