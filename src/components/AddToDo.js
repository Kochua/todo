import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import { ADD_TODO } from '../redux/actions'

class AddToDo extends Component {
  onSubmit = data => {
    const key = Math.floor(Math.random() * 10100)
    this.props.ADD_TODO({
      key,
      data
    })
  }
  render() {
    return <Form onSubmit={this.onSubmit} />
  }
}

export default connect(
  null,
  { ADD_TODO }
)(AddToDo)
