import { ADD_TEXT, REMOVE_TEXT, TODO_DONE } from '../types'

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TEXT:
      return [...state, action.payload]
    case REMOVE_TEXT:
      return state.filter(t => t.key !== action.payload)
    case TODO_DONE:
      return state.map(t => {
        if (t.key === action.payload) {
          t.done = !t.done
        }
        return t
      })
    default:
      return state
  }
}
