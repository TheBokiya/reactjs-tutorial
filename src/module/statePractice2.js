import React from 'react'

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        let isLoggedIn
        if (this.state.isLoggedIn) 
            isLoggedIn = "in"
        else
            isLoggedIn = "out"
        return (
            <div>
                <h1>You're currently logged {isLoggedIn}</h1>
            </div>
        )
    }
}

export default App