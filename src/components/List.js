import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListItem from './ListItem'

class List extends Component {
  renderListItems() {
    console.log(this.props)
    if (this.props.toDo) {
      return this.props.toDo.map(({ key, data, done }) => (
        <ListItem key={key} num={key} done={done}>
          {data}
        </ListItem>
      ))
    }
  }

  render() {
    return <div className="list">{this.renderListItems()}</div>
  }
}

const mapStateToProps = ({ toDo, filter }) => {
  switch (filter) {
    case 'show_all':
      return { toDo }
    case 'show_done':
      return { toDo: toDo.filter(t => t.done) }
    case 'show_todo':
      return { toDo: toDo.filter(t => !t.done) }
    default:
      console.error('no filter')
  }
}

export default connect(mapStateToProps)(List)
