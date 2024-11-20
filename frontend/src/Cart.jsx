import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaymentComplete(true);
      clearCart();
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsPaymentComplete(false);
        navigate('/');
      }, 3000);
    }, 2000);
  };

  if (isPaymentComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <div className="text-green-500 text-5xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-green-600 mb-4">Payment Successful!</h2>
          <p className="text-gray-600">Thank you for your purchase.</p>
          <p className="text-gray-600">Redirecting to homepage...</p>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="max-w-6xl mx-auto p-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <p className="text-gray-600">Your cart is empty</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      <div className="grid grid-cols-1 gap-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 border p-4 rounded-lg">
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-contain"
            />
            <div className="flex-grow">
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-gray-600">₹{item.price.toFixed(2)} each</p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold">₹{(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 mt-2"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold">Total:</span>
          <span className="text-xl font-bold">₹{getCartTotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 border rounded-md hover:bg-gray-100"
          >
            Continue Shopping
          </button>
          <button
            onClick={handleCheckout}
            disabled={isProcessing}
            className={`px-6 py-2 rounded-md text-white ${
              isProcessing ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {isProcessing ? 'Processing...' : 'Proceed to Payment'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;