import { ADD_TEXT, REMOVE_TEXT } from '../types'

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TEXT:
      return [...state, action.payload]
    case REMOVE_TEXT:
      return state.filter(t => t.key !== action.payload)
    default:
      return state
  }
}
