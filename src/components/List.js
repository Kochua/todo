import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListItem from './ListItem'

class List extends Component {
  renderListItems() {
    return this.props.toDo.map(({ key, data }) => (
      <ListItem key={key} num={key}>
        {data}
      </ListItem>
    ))
  }

  render() {
    return <div className="list">{this.renderListItems()}</div>
  }
}

const mapStateToProps = state => {
  return { toDo: state.toDo }
}

export default connect(mapStateToProps)(List)
