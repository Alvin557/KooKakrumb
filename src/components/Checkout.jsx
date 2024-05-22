// import React from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { makePaymentRequest } from '../utils/makePaymentRequest.js';

// const Checkout = (product) => {
//     const stripePromise = loadStripe(
//         'pk_test_51PEZVuFIp5XO4imUFZKCEpKLI49gwmQa2FjEg2yNwSQnKSPpevl5uuw5mKcyl7MoSzmIUJ2YfT4XwpbTJYDAKD4i00fESs5wz4'
//       );
    
//       const handlePayment = async () => {
//         try {
//           const stripe = await stripePromise;
//           const res = await makePaymentRequest.post('/api/orders', product);
//           await stripe.redirectToCheckout({
//             sessionId: res.data.stripeSession.id,
//           });
//         } catch (err) {
//           console.log(err);
//         }
//       };
//       console.log(cart);
//   return (
//     <>
//     {handlePayment}
//     </>
//   )
// }
// export default Checkout