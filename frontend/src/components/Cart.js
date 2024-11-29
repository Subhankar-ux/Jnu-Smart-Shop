import React from 'react';
import './Cart.css';

const Cart = ({ cart, setCart }) => {
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    alert('Item removed from cart!');
  };

  return (
    <div>
       <header className="header">
        <nav className="main-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/ProductList">Products</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href='/dashboard'>Dashboard</a></li>
            <li> <a href="/register" className="register-link">Register</a></li>
          </ul>
        </nav>
      </header>
    <div className="cart-page">
      <div className="cart-container">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="cart-items">
            {cart.map((product, index) => (
              <li key={index} className="cart-item">
                <span>{product.name} - ₹{product.price}</span>
                <button onClick={() => handleRemoveItem(index)} className="remove-btn">Remove</button>
              </li>
            ))}
          </ul>
        )}
        <div className="total">Total: ₹{total}</div>
        <button className="check">
          <a href="/checkout">Proceed to Checkout</a>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Cart;