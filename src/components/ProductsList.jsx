import React from 'react'
import { Link } from 'react-router-dom'

const ProductsList = ({products}) => {
  return (
    <>
        <h1 className="title-card">Minerals</h1>
        <div className="list-container">
            {products.map((product)=>(

              <div className="product-card" key={product.id}>
                <Link to={`/products/${product.id}`} 
                    className="product-info">
                    <p><strong>Name:</strong>{product.name}</p>
                    <p><strong>Description:</strong>{product.description}</p>
                    <p><strong>Region:</strong>{product.region}</p>
                </Link>
              </div>

            ))}
        </div>
    </>
  )
}

export default ProductsList