import React from 'react'
import TodoItem from '../components/TodoItem'
import todoData from '../data/todosData'

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            todos: todoData
        }
    }

    render() {
        const todoItemComponents = this.state.todos.map(item =>
            <TodoItem 
                key={item.id}
                text={item.text}
                completed={item.completed}
            />    
        )
        return (
            <div className="todo-list">
                {todoItemComponents}
            </div>
        )
    }
}

export default App