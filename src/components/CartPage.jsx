import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { makePaymentRequest } from '../utils/makePaymentRequest.js';

const CartPage = ({ cart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + parseFloat(product.attributes.Price), 0);
};

  const stripePromise = loadStripe('pk_test_51PEZVuFIp5XO4imUFZKCEpKLI49gwmQa2FjEg2yNwSQnKSPpevl5uuw5mKcyl7MoSzmIUJ2YfT4XwpbTJYDAKD4i00fESs5wz4');

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
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Product</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Quantity</th>
            <th className="border border-gray-300 px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex items-center">
                  <img
                    src={`http://localhost:1337${product.attributes.Image.data[0].attributes.url}`}
                    alt={product.attributes.Title}
                    className="w-12 h-12 object-cover mr-2"
                  />
                  <span>{product.attributes.Title}</span>
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.attributes.Price}
              </td>
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">
                {(product.attributes.Price * 1).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <p className="text-lg font-bold mb-6">
          Total: ${calculateTotal().toFixed(2)}
        </p>
        <button
          onClick={handlePayment}
          className="bg-rose-900 text-white px-4 py-2 rounded-md mt-16"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
