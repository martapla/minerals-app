import React, { useEffect, useState, useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

const Cart = () => {
  const { language } = useContext(LanguageContext);
  const [cart, setCart] = useState([])

  useEffect(() => {
    const cartSaved = JSON.parse(localStorage.getItem("cartItem")) || [];
    setCart(cartSaved);
  }, []);

  const handleDelete = (indexToRemove) => {
    const updatedCart = cart.filter((item, index) => index !== indexToRemove);
    setCart(updatedCart);
    localStorage.setItem("cartItem", JSON.stringify(updatedCart));
  };

  return (
    <>
      <h2 className="title-card">💎 Your Selection</h2>

      <div className="list-container">
        {cart.length === 0 ? (
          <p>Is empty.. 🫤</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="product-card">
              <img
                  className="product-img"
                  src={`/assets/minerals/${item.imageName}`}
                  alt={item.name?.[language]}
                />
              <div className="product-info">
                <p><strong>{item.name?.[language]}</strong></p>
                <p>{item.description?.[language]}</p>
                <p>Region - {item.region}</p>
                <p>Price: {item.price} euros</p>
                <button onClick={() => handleDelete(index)} className="delete-btn">🗑️ </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default Cart