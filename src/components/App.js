import './styles.css'
import React from 'react'
import List from './List'
import AddToDo from './AddToDo'
import Filter from './Filter'

const App = () => {
  return (
    <div className="container">
      <h2>Todo list</h2>
      <AddToDo />
      <Filter />
      <List />
    </div>
  )
}

export default App
