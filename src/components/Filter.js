import React from 'react'
import { connect } from 'react-redux'
import { SHOW_ALL_LIST, SHOW_DONE_LIST, SHOW_TODO_LIST } from '../redux/actions'

const Filter = ({ SHOW_ALL_LIST, SHOW_DONE_LIST, SHOW_TODO_LIST }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 10
      }}
    >
      <button onClick={() => SHOW_ALL_LIST()}>Show all </button>
      <button onClick={() => SHOW_DONE_LIST()}>Show completed</button>
      <button onClick={() => SHOW_TODO_LIST()}>Show to do </button>
    </div>
  )
}

export default connect(
  null,
  { SHOW_ALL_LIST, SHOW_DONE_LIST, SHOW_TODO_LIST }
)(Filter)
