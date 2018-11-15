import { SHOW_ALL, SHOW_DONE, SHOW_TODO } from '../types'

export default function(state = 'show_all', action) {
  switch (action.type) {
    case SHOW_ALL:
      return 'show_all'
    case SHOW_DONE:
      return 'show_done'
    case SHOW_TODO:
      return 'show_todo'
    default:
      return state
  }
}
