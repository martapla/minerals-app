import React from 'react'
import { Link } from 'react-router'

const ProductsList = ({products}) => {
  return (
    <>
        <h1 className="title-card">Minerals</h1>

            {products.map((product)=>(

              <div className="product-card">
                <Link key={product.id} to={`/product/${product.id}`} 
                    className="product-info">
                    <p><strong>Name:</strong>{product.name}</p>
                    <p><strong>Description:</strong>{product.description}</p>
                    <p><strong>Region:</strong>{product.region}</p>
                </Link>
              </div>
              
            ))}
    </>
  )
}

export default ProductsList