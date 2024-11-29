import React from 'react';
import './productCard.css';
import PropTypes from 'prop-types';

const ProductCard = ({ product, cart, setCart }) => {
  const { image, name, description, price } = product;

  const handleAddToCart = () => {
    const updatedCart = [...cart, product];
    setCart(updatedCart); // Update the shared cart state
    alert(`${name} has been added to your cart!`);
  };

  return (
    <div>

    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="price">₹{price}</div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  cart: PropTypes.array.isRequired,   // cart state
  setCart: PropTypes.func.isRequired, // function to update cart
};

export default ProductCard;