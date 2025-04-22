import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../context/LanguageContext'

const ProductsList = ({products}) => {
  const { language } = useContext(LanguageContext);
  return (
    <>
        <h1>Minerals</h1>
        <div className="list-container">
            {products.map((product)=>(

              <div className="product-card" key={product.id}>
                <Link to={`/products/${product.id}`} className="product-info">
                    <p><strong>{product.name?.[language]}</strong></p>
                    <p>{product.description?.[language]}</p>
                    <p>Region - {product.region}</p>
                    <button className='product-btn'>+ Info</button>
                </Link>
              </div>

            ))}
        </div>
    </>
  )
}

export default ProductsList