import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../context/LanguageContext'
import FilterSort from './FilterSort';

const ProductsList = ({products, search, handleSearch}) => {
  const { language } = useContext(LanguageContext);
  return (
    <>
        <h1>Minerals</h1>
        
        <FilterSort search={search} handleSearch={handleSearch}/>

        <div className="list-container">
            {products.map((product)=>(

              <div className="product-card" key={product.id}>
                <img
                  className="product-img"
                  src={`/assets/minerals/${product.imageName}`}
                  alt={product.name?.[language]}
                />
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