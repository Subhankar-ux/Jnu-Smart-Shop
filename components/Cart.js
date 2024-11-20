import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cart] = useState([]);
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className='cart-container'>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className='cart-items'>
          {cart.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      )}
      <div className='total'>₹{total}</div>
      <button className='check'><a href="/Checkout">Proceed to Checkout</a></button>
    </div>
  );
};

export default Cart;