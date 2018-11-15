import {
  ADD_TEXT,
  REMOVE_TEXT,
  TODO_DONE,
  SHOW_ALL,
  SHOW_DONE,
  SHOW_TODO
} from '../types'

export const ADD_TODO = text => ({
  type: ADD_TEXT,
  payload: text
})

export const REMOVE_TODO = id => ({
  type: REMOVE_TEXT,
  payload: id
})

export const DONE_TODO = id => ({
  type: TODO_DONE,
  payload: id
})

//filter
export const SHOW_ALL_LIST = () => ({
  type: SHOW_ALL
})
export const SHOW_DONE_LIST = () => ({
  type: SHOW_DONE
})
export const SHOW_TODO_LIST = () => ({
  type: SHOW_TODO
})
