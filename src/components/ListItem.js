import React from 'react'
import { connect } from 'react-redux'
import { REMOVE_TODO, DONE_TODO } from '../redux/actions'

const ListItem = ({ children, num, done, REMOVE_TODO, DONE_TODO }) => {
  return (
    <div className={done ? 'list-item__solved' : 'list-item'}>
      <span>{children}</span>
      <div>
        <span
          style={{ cursor: 'pointer', marginRight: 5 }}
          onClick={() => DONE_TODO(num)}
        >
          <i className="fas fa-check-square" />
        </span>
        <span style={{ cursor: 'pointer' }} onClick={() => REMOVE_TODO(num)}>
          <i className="fas fa-trash-alt" />
        </span>
      </div>
    </div>
  )
}

export default connect(
  null,
  { REMOVE_TODO, DONE_TODO }
)(ListItem)
