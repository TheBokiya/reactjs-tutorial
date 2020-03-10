import React from 'react'
import TodoItem from '../components/TodoItem'
import todoList from '../data/todosData'

function App() {

    const todoItemComponents = todoList.map(item =>
        <TodoItem 
            key={item.id}
            text={item.text}
            completed={item.completed}
        />    
    )

    return (
        <div>
            {todoItemComponents}
        </div>
    )
}

export default App