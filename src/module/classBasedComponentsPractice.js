import React from 'react'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header username="Heng"/>
                <Greeting />
            </div>
        )
    }
}

class Header extends React.Component {
    render(props) {
        return (
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}

class Greeting extends React.Component {

    getTimeofDay() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
    
        if (hours < 12)
            timeOfDay = "morning"
        else if (hours >= 12 && hours < 18)
            timeOfDay = "afternoon"
        else
            timeOfDay = "night"

        return timeOfDay
    }

    render() {
        const timeOfDay = this.getTimeofDay()
        
        return (
            <p>Good { timeOfDay  }, sir or madam!</p>
        )
    }
}

export default App