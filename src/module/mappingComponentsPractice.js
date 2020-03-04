import React from 'react'
import ProductCard from '../components/ProductCard'
import productsData from '../data/vschoolProducts'

function App() {
    const productComponents = productsData.map(product => 
        <ProductCard 
            key={product.id}
            name={product.name} 
            price={product.price} 
            description = {product.description}/>
    )

    return (
        <div>
            {productComponents}
        </div>
    )
}

export default App