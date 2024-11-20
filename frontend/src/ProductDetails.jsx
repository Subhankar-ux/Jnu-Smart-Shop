import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "./CartContext"; // Import the cart context

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart(); // Get addToCart function from the context

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    alert("Product added to cart!");
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
        <img
          src={product.image}
          alt={product.title}
          className="w-64 h-64 object-cover rounded-md"
        />
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-700 mt-2">{product.description}</p>
          <p className="text-lg font-bold mt-4">Price: ₹{product.price.toFixed(2)}</p>

          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={handleDecreaseQuantity}
              className="bg-gray-300 p-2 rounded-md"
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              onClick={handleIncreaseQuantity}
              className="bg-gray-300 p-2 rounded-md"
            >
              +
            </button>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
