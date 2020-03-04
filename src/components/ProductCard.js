import React from 'react'

function ProductCard(props) {
    return (
        <div className="card">
            <h3>{props.name}</h3>
            <h5>{props.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</h5>
            <p>{props.description}</p>
        </div>
    )
}

export default ProductCard