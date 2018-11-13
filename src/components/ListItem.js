import React from 'react'

export default ({ children }) => {
  return (
    <div className="list-item">
      <span>{children}</span>{' '}
      <span style={{ cursor: 'pointer' }}>
        <i class="fas fa-trash-alt" />
      </span>
    </div>
  )
}
