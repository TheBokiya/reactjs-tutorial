import React from "react"

function TodoItem(props) {

    return (
        <div>
            <input 
                type="checkbox" 
                checked={ props.completed } 
                onChange={() => console.log("this is clicked")}
            />
            <p>{ props.text }</p>
        </div>
    )
}

export default TodoItem