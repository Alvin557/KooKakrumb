import React from 'react';
import { Link } from 'react-router-dom';

const CartModal = ({ cart, isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-rose-900">Cart</h2>
            {cart.length === 0 ? (
              <p className="text-gray-950">Your cart is empty.</p>
            ) : (
              <div>
                {cart.map((product, index) => (
                  <div key={index} className="flex items-center border border-rose-900 p-4 rounded-lg mb-4">
                    <img src={`http://localhost:1337${product.attributes.Image.data[0].attributes.url}`} alt={product.attributes.Title} className="w-16 h-16 object-cover mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-rose-900">{product.attributes.Title}</h3>
                      <p className="text-gray-950">Price: ${product.attributes.Price}</p>
                      <p className="text-gray-950">Quantity: 1</p>
                    </div>
                  </div>
                ))}
                {/* Open the CartPage when the user clicks this button */}
                <Link to="/cart" className="bg-rose-900 text-white px-4 py-2 rounded-md mt-4" onClick={onClose}>
                  View Cart
                </Link>
              </div>
            )}
            <button
              className="bg-rose-900 text-white px-4 py-2 rounded-md mt-4"
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
