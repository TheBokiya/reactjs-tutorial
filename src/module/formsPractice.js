import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        alert("First Name: " + this.state.firstName +
                "\nLast Name: " + this.state.lastName +
                "\nAge: " + this.state.age +
                "\nGender: " + this.state.gender +
                "\nDestination: " + this.state.destination +
                "\nDietary restriction: " + this.state.dietaryRestrictions)
    }

    handleChange(e) {
        const {name, value, type, checked} = e.target

        type === "checkbox" ? 
        this.setState({
            [name]: checked
        }) : this.setState({
            [name]: value
        })
    }

    render() {
        return(
            <main>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="firstName"
                        placeholder="First Name" 
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    /><br/>
                    <input 
                        type="text"
                        name="lastName"
                        placeholder="Last Name" 
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    /><br/>
                    <input 
                        type="number"
                        name="age"
                        placeholder="Age" 
                        value={this.state.age}
                        onChange={this.handleChange}
                    /><br/>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        />Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        />Female
                    </label>

                    <br/>

                    <label>Destination</label>
                    <select
                        name="destination"
                        value={this.state.destination}
                        onChange={this.handleChange}
                    >
                        <option value="">--- Please choose your destination ---</option>
                        <option value="Bangkok">Bangkok</option>
                        <option value="Jakarta">Jakarta</option>
                        <option value="Tokyo">Tokyo</option>
                    </select>

                    <br/>

                    <label>Dietary Restrictions</label><br/>
                    <label>
                        <input
                            type="checkbox"
                            name="isVegan"
                            checked={this.state.isVegan}
                            onChange={this.handleChange}
                        />Vegan
                    </label>
                    <br/>
                    <label>
                        <input
                            type="checkbox"
                            name="isKosher"
                            checked={this.state.isKosher}
                            onChange={this.handleChange}
                        />Kosher
                    </label>
                    <br/>
                    <label>
                        <input
                            type="checkbox"
                            name="isLactoseFree"
                            checked={this.state.isLactoseFree}
                            onChange={this.handleChange}
                        />Lactose Free
                    </label>
                    <br/><br/>
                    <button>Submit</button>
                </form>

                <hr/>
                <h2>Entered information: </h2>
                <h3>Your name: {this.state.firstName} {this.state.lastName}</h3>
                <h3>Your age: {this.state.age}</h3>
                <h3>Your gender: {this.state.gender}</h3>
                <h3>Your destination: {this.state.destination}</h3>
                <h3>Your dietary Restrictions: </h3>
                <h4>Vegan: {this.state.isVegan ? "Yes" : "No"}</h4>
                <h4>Kosher: {this.state.isKosher ? "Yes" : "No"}</h4>
                <h4>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</h4>
            </main>
        )
    }
}

export default App