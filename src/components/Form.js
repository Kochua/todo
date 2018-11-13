import React, { Component } from 'react'

class Form extends Component {
  state = {
    text: ''
  }

  onSubmit = e => {
    e.preventDefault()
    if (this.state.text) this.props.onSubmit(this.state.text)
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input
          type="text"
          name="text"
          className="input"
          value={this.state.text}
          onChange={e => this.setState({ text: e.target.value })}
        />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    )
  }
}

export default Form
