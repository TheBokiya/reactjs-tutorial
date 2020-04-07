import React, { Component } from 'react'
import FormComponent from './FormComponent'

class Form extends Component {
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
        return (
            <FormComponent 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            data={this.state}
        />
        )
    }
}

export default Form