import React from 'react'
import TodoItem from './components/TodoItem'
import todosData from './data/todosData'

function App() {

  return (
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  )
}

export default App