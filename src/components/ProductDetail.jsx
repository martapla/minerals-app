import React, { useEffect, useState,  useContext  } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseServer';
import { LanguageContext } from '../context/LanguageContext'; 

const ProductDetail = () => {
  const { language } = useContext(LanguageContext);
  const params= useParams()
  const {id} = params
  console.log(params)
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const addCarrito = () => {
    alert('Added to Cart:', product);
  };

  useEffect(() => {  // Ask for ID Product
    
    getDoc(doc(db, 'products', id)).then((docSnap) => {
  
      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() }); //Save in state if exist
      } else {
        console.log('Product not found');
      }
  
      // stop showing Loading..
      setLoading(false);
    });
  }, [id]);

  //LOCALSTORAGE
  const addToCart = () => {
    const saveCart = JSON.parse(localStorage.getItem("cartItem")) || [];
    // || []; significa que si es 'null', crea un array buit.
  
    saveCart.push(product);
    localStorage.setItem("cartItem", JSON.stringify(saveCart));
    alert("Mineral added to Cart");
  };
  

  if (loading) return <p>Loading product...</p>; // code very important, for the useEffect render.
  if (!product) return <p>Product not found</p>;

  return (
    <>
      <h2 className="title-card">Mineral Info</h2>
      
      <div className="list-container">
         <div className="product-card" key={product.id}>
         <img
                  className="product-img"
                  src={`/assets/minerals/${product.imageName}`}
                  alt={product.name?.[language]}
                />
            <div
                className="product-info">
                <p><strong>{product.name?.[language]}</strong></p>
                <p>{product.description?.[language]}</p>
                <p>Region - {product.region}</p>
                <p>Price : {product.price} euros</p>
                <button onClick={addToCart} className='product-btn'>Add</button>
            </div>
         </div>
        
      </div>
    </>
  )
}

export default ProductDetail