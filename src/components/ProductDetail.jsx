import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseServer';

const ProductDetail = () => {

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
      <h1 className="title-card">Mineral Info</h1>
      
      <div className="list-container">
        <div className="details-card">
            <div className="details-info">
                <p><strong>Name:</strong> {product.name}</p>
                <p><strong>Description:</strong> {product.description}</p>
                <p><strong>Region:</strong> {product.region}</p>
                <p><strong>Price:</strong> {product.price}</p>
                <button onClick={addToCart} className='add-btn'>
                  🛒 Add
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail