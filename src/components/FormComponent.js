import React from 'react'

function FormComponent(props) {
    return (
        <main>
            <form onSubmit={props.handleSubmit}>
                <input 
                    type="text"
                    name="firstName"
                    placeholder="First Name" 
                    value={props.data.firstName}
                    onChange={props.handleChange}
                /><br/>
                <input 
                    type="text"
                    name="lastName"
                    placeholder="Last Name" 
                    value={props.data.lastName}
                    onChange={props.handleChange}
                /><br/>
                <input 
                    type="number"
                    name="age"
                    placeholder="Age" 
                    value={props.data.age}
                    onChange={props.handleChange}
                /><br/>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={props.data.gender === "male"}
                        onChange={props.handleChange}
                    />Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={props.data.gender === "female"}
                        onChange={props.handleChange}
                    />Female
                </label>

                <br/>

                <label>Destination</label>
                <select
                    name="destination"
                    value={props.data.destination}
                    onChange={props.handleChange}
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
                        checked={props.data.isVegan}
                        onChange={props.handleChange}
                    />Vegan
                </label>
                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="isKosher"
                        checked={props.data.isKosher}
                        onChange={props.handleChange}
                    />Kosher
                </label>
                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="isLactoseFree"
                        checked={props.data.isLactoseFree}
                        onChange={props.handleChange}
                    />Lactose Free
                </label>
                <br/><br/>
                <button>Submit</button>
            </form>

            <hr/>
            <h2>Entered information: </h2>
            <h3>Your name: {props.data.firstName} {props.data.lastName}</h3>
            <h3>Your age: {props.data.age}</h3>
            <h3>Your gender: {props.data.gender}</h3>
            <h3>Your destination: {props.data.destination}</h3>
            <h3>Your dietary Restrictions: </h3>
            <h4>Vegan: {props.data.isVegan ? "Yes" : "No"}</h4>
            <h4>Kosher: {props.data.isKosher ? "Yes" : "No"}</h4>
            <h4>Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}</h4>
        </main>
    )
}

export default FormComponent