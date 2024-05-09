import React, { useState } from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const CheckoutPage = ({ cartItems, totalAmount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setErrorMessage(error.message);
      console.error('Error creating payment method:', error);
    } else {
      // Handle successful payment
      console.log('Payment Method:', paymentMethod);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          {/* Customer details form */}
          {/* Collect name, email, address, etc. */}
        </div>
        <div>
          {/* Display cart items and total amount */}
          {/* Iterate over cartItems and display each item */}
          {cartItems.map((item, index) => (
            <div key={index}>
              <p>{item.name} - ${item.price}</p>
            </div>
          ))}
          <div>Total: ${totalAmount}</div>
        </div>
        <div>
          {/* Payment form */}
          <CardElement />
        </div>
        <button type="submit">Pay Now</button>
      </form>
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

const stripePromise = loadStripe('your_stripe_publishable_key');

const Checkout = ({ cartItems, totalAmount }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutPage cartItems={cartItems} totalAmount={totalAmount} />
    </Elements>
  );
};

export default Checkout;
