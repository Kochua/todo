import React, { Component } from 'react'

class Form extends Component {
  state = {
    text: ''
  }

  onSubmit = e => {
    e.preventDefault()
    if (this.state.text) {
      this.props.submit(this.state.text)
    }
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input
          name="text"
          className="input"
          value={this.state.text}
          onChange={e => this.setState({ text: e.target.text })}
        />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    )
  }
}

export default Form
