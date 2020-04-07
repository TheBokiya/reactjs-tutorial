import React, { Component } from 'react'


class App extends Component {
    constructor() {
        super()
        this.state = {
            loggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        
        this.setState(prevState => {
            return {
                loggedIn: !prevState.loggedIn
            }
        })

        console.log(this.state.loggedIn)
    }

    render() {
        let buttonText = this.state.loggedIn ? "LOG OUT" : "LOG IN"
        return (
            <div>
                <div>
                    {
                        this.state.loggedIn ?
                        <h2>You are logged in.</h2> :
                        <h2>You are not logged in.</h2>
                    }
                </div>

                <div>
                <button onClick={this.handleClick}>{buttonText}</button>
                </div>
            </div>
        )
    }
}

export default App