import { ADD_TEXT, REMOVE_TEXT } from '../types'

export const ADD_TODO = text => ({
  type: ADD_TEXT,
  payload: text
})

export const REMOVE_TODO = id => ({
  type: REMOVE_TEXT,
  payload: id
})
