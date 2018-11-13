import React from 'react'
import { connect } from 'react-redux'
import { REMOVE_TODO } from '../redux/actions'

const ListItem = ({ children, num, REMOVE_TODO }) => {
  console.log(num)
  return (
    <div className="list-item">
      <span>{children}</span>
      <span style={{ cursor: 'pointer' }} onClick={() => REMOVE_TODO(num)}>
        <i className="fas fa-trash-alt" />
      </span>
    </div>
  )
}

export default connect(
  null,
  { REMOVE_TODO }
)(ListItem)
