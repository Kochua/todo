import { ADD_TEXT, REMOVE_TEXT } from '../actions/types'

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TEXT:
      return [...state, action.payload]
    case REMOVE_TEXT:
      return
    default:
      return state
  }
}
