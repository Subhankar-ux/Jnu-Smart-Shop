import React from 'react';
import './productCard.css';

import PropTypes from 'prop-types'; // For type-checking the props

const ProductCard = ({ product }) => {
  const { image, name, description, price } = product;

  const handleAddToCart = () => {
    // Implement the logic to add the product to the shopping cart
    console.log(`${name} added to cart`);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="price">₹{price}</div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

// Prop Types to ensure the correct types for the product data
ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default ProductCard;