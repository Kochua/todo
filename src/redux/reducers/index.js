import { combineReducers } from 'redux'
import toDoReducer from './toDoReducer'
import filterReducer from './filterReducer'

export default combineReducers({
  toDo: toDoReducer,
  filter: filterReducer
})
