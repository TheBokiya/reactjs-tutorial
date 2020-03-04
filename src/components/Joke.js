import React from 'react'

function Joke(props) {
    return (
        <div className="joke-card">
            <span style={{display: props.question ? "block" : "none"}}>Question: {props.question}</span>
            <br/>
            <span style={{color: !props.question && "#FF8934"}}>Punchline: {props.punchline}</span>
        </div>
    )
}

export default Joke