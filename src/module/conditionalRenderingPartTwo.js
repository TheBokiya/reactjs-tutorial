import React, { Component } from 'react'
import Conditional from '../components/Conditional'

class App extends Component {
    constructor() {
        super()
        this.state = {
            unreadMessages: [
                "Call your mom!",
                "New spam email available. All links are definitely safe to click."
            ]
        }
    }

    render() {
        return (
            <div>
                <h2>You have {this.state.unreadMessages.length} unread messsages!</h2>
            </div>
        )
    }
}

export default App

