import React, { Component } from 'react'
import ListItem from './ListItem'

class List extends Component {
  render() {
    return (
      <div className="list">
        <ListItem>List</ListItem>
        <ListItem>List</ListItem>
        <ListItem>List</ListItem>
        <ListItem>List</ListItem>
      </div>
    )
  }
}

export default List
