import axios from 'axios';

const API_URL = 'https://your-backend-api.com/orders';  // Replace with your API URL

export const createOrder = async (userId, cartItems, shippingAddress) => {
  try {
    const response = await axios.post(API_URL, {
      userId,
      cartItems,
      shippingAddress,
    });
    return response.data;  // Return order details
  } catch (error) {
    console.error('Order creation error:', error);
    throw error;
  }
};

export const trackOrder = async (orderId) => {
  try {
    const response = await axios.get(`${API_URL}/${orderId}`);
    return response.data;  // Return order status
  } catch (error) {
    console.error('Order tracking error:', error);
    throw error;
  }
};