import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { makePaymentRequest } from '../utils/makePaymentRequest.js';

const CartPage = ({ cart, setCart }) => {
  const [cartItems, setCartItems] = useState(cart);

  const calculateTotal = () => {
    return cartItems.reduce((total, product) => total + parseFloat(product.attributes.Price) * product.quantity, 0);
  };

  const stripePromise = loadStripe('pk_test_51PEZVuFIp5XO4imUFZKCEpKLI49gwmQa2FjEg2yNwSQnKSPpevl5uuw5mKcyl7MoSzmIUJ2YfT4XwpbTJYDAKD4i00fESs5wz4');

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCart = [...cartItems];
    if (newQuantity >= 0) {
      if (newQuantity === 0) {
        const confirmation = window.confirm("Do you want to remove this item from the cart?");
        if (confirmation) {
          updatedCart.splice(index, 1); // Remove item at index
        } else {
          updatedCart[index].quantity = 0;
        }
      } else {
        updatedCart[index].quantity = newQuantity;
      }
      setCartItems(updatedCart);
      setCart(updatedCart); // Update the cart in the parent component
    }
  };

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const total = calculateTotal(); // Calculate total amount
      const res = await makePaymentRequest.post('/api/orders', { total });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Your Cart</h1>
      <div className="overflow-x-auto">
        <table className="w-full sm:max-w-4xl border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-left">Product</th>
              <th className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-left">Price</th>
              <th className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-left">Quantity</th>
              <th className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((product, index) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 flex items-center">
                  <img
                    src={`http://localhost:1337${product.attributes.Image.data[0].attributes.url}`}
                    alt={product.attributes.Title}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-cover mr-2 sm:mr-4 rounded"
                  />
                  <span className="text-sm sm:text-base">{product.attributes.Title}</span>
                </td>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3">
                  ${parseFloat(product.attributes.Price).toFixed(2)}
                </td>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3">
                  <input
                    type="number"
                    min="0"
                    value={product.quantity}
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                    className="w-12 sm:w-16 p-1 sm:p-2 border rounded"
                  />
                </td>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3">
                  ${(product.attributes.Price * product.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 flex justify-between items-center flex-col sm:flex-row">
        <p className="text-lg sm:text-xl font-bold mb-4 sm:mb-0">
          Total: ${calculateTotal().toFixed(2)}
        </p>
        <button
          onClick={handlePayment}
          className="bg-rose-900 text-white px-6 py-3 rounded-md hover:bg-rose-800 transition duration-300"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
