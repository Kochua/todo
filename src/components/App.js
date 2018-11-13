import React from 'react'
import './styles.css'
import Form from './Form'
import List from './List'
const App = () => {
  return (
    <div className="container">
      <h2>HomeFrom</h2>
      <div>
        <Form />
        <List />
      </div>
    </div>
  )
}

export default App
