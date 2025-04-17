import React, { useEffect, useState } from 'react'

const Cart = () => {

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
            <div key={index} className="details-card">
              <div className="details-info">
                <p><strong>Name:</strong> {item.name}</p>
                <p><strong>Description:</strong> {item.description}</p>
                <p><strong>Category:</strong> {item.region}</p>
                <p><strong>Price:</strong> {item.price}</p>
              </div>
              <button onClick={() => handleDelete(index)} className="delete-btn">🗑️ Remove</button>
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default Cart