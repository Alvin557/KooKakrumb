import React from 'react';
import { Link } from 'react-router-dom';

const CartModal = ({ cart, isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 p-4 sm:p-6 md:p-8">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg p-4 sm:p-6 md:p-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-rose-900">Cart</h2>
            {cart.length === 0 ? (
              <p className="text-gray-950">Your cart is empty.</p>
            ) : (
              <div>
                {cart.map((product, index) => (
                  <div key={index} className="flex items-center border border-rose-900 p-2 sm:p-4 rounded-lg mb-4">
                    <img src={`http://localhost:1337${product.attributes.Image.data[0].attributes.url}`} alt={product.attributes.Title} className="w-12 h-12 sm:w-16 sm:h-16 object-cover mr-4" />
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-rose-900">{product.attributes.Title}</h3>
                      <p className="text-gray-950 text-sm sm:text-base">Price: ${product.attributes.Price}</p>
                      <p className="text-gray-950 text-sm sm:text-base">Quantity: {product.quantity}</p>
                    </div>
                  </div>
                ))}
                <Link to="/cart" className="block w-full text-center bg-rose-900 text-white px-4 py-2 rounded-md mt-4 transition duration-200 ease-in-out hover:bg-rose-800" onClick={onClose}>
                  View Cart
                </Link>
              </div>
            )}
            <button
              className="block w-full text-center bg-rose-900 text-white px-4 py-2 rounded-md mt-4 transition duration-200 ease-in-out hover:bg-rose-800"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartModal;
